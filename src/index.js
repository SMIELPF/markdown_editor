import ReactDOM from 'react-dom'
import React from 'react'
import Editor from './container/EditorContainer'
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
        <Editor/>,
        document.getElementById('root'));
registerServiceWorker();