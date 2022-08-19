import React from 'react';
<<<<<<< HEAD
import axios from 'axios';

export function TextBook() {
  axios.get('https://rslang-mdg.herokuapp.com/words')
    .then((response) => {
      console.log(response.data);
    });

  return (
    <div>
      <div>gg</div>
      <div>gg</div>
    </div>
  );
}
=======

export const TextBook = () => (<h1>TextBook</h1>);
>>>>>>> 0759eee411c639740a4d6a418e7d3ecf20b403b5
