import React from 'react';

export default function Note() {
  return (
    <div className="list-unstyled border text-right m-3">
        <ul className="m-3">
          <li>Instructions:
            <ul>
              <li>Please type atleast 3 characters to start the color search.</li>
              <li>Please type in meaningful words realted to color names.</li>
              <li>The result will be dispalyed in deck of card format with color hex code in it.</li>
            </ul>
          </li>
        </ul>
    </div>
  );
}