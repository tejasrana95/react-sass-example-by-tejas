import React from 'react';
import './App.scss';
import Accordion from '@material-ui/core/Accordion';

function App() {
  return (
    <div class="container-cards">
      <div class="container-form">
        <label>Review product</label>
        <input class="input-form" type="text" />
        <div class="buttons-container">
          <button>Submit</button>
          <button>Wow</button>
          <button>Cancel</button>
        </div>
      </div>
      <div class="container-form">
        <label>Review product</label>
        <input class="input-form" type="text" />
        <button>Submit</button>
      </div>
      <div class="container-form">
        <label>Review product</label>
        <input class="input-form" type="text" />
        <button>Submit</button>
      </div>
      <div class="container-form">
        <label>Review product</label>
        <input class="input-form" type="text" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
