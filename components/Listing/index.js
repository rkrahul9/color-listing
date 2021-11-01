import React,{ useEffect, useState } from 'react';
import Spinner from '../Spinner';
import { useDebouncedValue } from '../../utils/debounceHook';
import styles from '../../styles/Home.module.css' 

export default function Listing({ text }) {
  const [colors, setColors] = useState([]);
  const debouncedValue = useDebouncedValue(text, 500);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    fetchColors();
  },[debouncedValue]);

  useEffect(() => {
    setLoading(true);
  },[text]);

  const fetchColors = async () => {
    const res = await fetch(`https://api.color.pizza/v1/names/?name=${text}&goodnamesonly=true&noduplicates=true`);
    const { colors } = await res.json();
    setColors(colors);
    setLoading(false); 
  }
  
  const noResult = colors.length === 0;

  const getColorListing = () => {
    return(
      <>
        {noResult
            ? <p className="h4 my-3">Nothing matched with the query. Please search something meaningful...</p> 
            : <>{colors.map(color => <div key={color.hex} style={{'background': `${color.hex}`}} className="p-5 bd-highlight border border-2 m-2 text-center">{color.hex}</div>)}</>
        }
      </>
    );
  }

  return (
    <div className={(loading || noResult) ? "text-center" : styles.gridContainer}>
      {loading
        ? <Spinner />
        : getColorListing()
      }
    </div>
  );
}
