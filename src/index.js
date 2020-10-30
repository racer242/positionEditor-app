import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let element=document.getElementById('editorWidget');

console.log(element.getAttribute("oninit"));

ReactDOM.render(
  <React.StrictMode>
    <App
      id="editorApp"
      onInit={window[element.getAttribute("oninit")]}
      onNext={window[element.getAttribute("onnext")]}
      onPrev={window[element.getAttribute("onprev")]}
    />
  </React.StrictMode>,
  element
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
