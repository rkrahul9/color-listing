import React,{ useState } from 'react';
import Input from '../components/Input';
import Listing from '../components/Listing';
import Note from '../components/Note';

export default function Colors() {
  const [inputText, setInputText] = useState('');
  return(
    <>
      <Input
       text={inputText}
       onChange={(e) => setInputText(e.target.value)}
      />
      {inputText.length > 2
        ? <Listing text={inputText} />
        : <Note />
      }
    </>
  );
} 