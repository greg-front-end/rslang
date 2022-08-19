import React from 'react';
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
