import React from 'react';
import ReactDOM from 'react-dom';
import './css/Editor.css';
import registerServiceWorker from './registerServiceWorker';
import EditorContainer from "./container/EditorContainer";

ReactDOM.render(<EditorContainer />, document.getElementById('root'));
registerServiceWorker();
