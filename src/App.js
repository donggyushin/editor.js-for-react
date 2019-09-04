import React from 'react';
import './App.css';
import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Embed from '@editorjs/embed'
import ImageTool from '@editorjs/image'

const editor = new EditorJs({
  holderId: 'editorjs',
  tools: {
    header: {
      class: Header,
      inlineToolbar: ['link']
    },
    list: {
      class: List,
      inlineToolbar: [
        'link',
        'bold',
      ]
    },
    embed: {
      class: Embed,
      inlineToolbar: false,
      config: {
        services: {
          youtube: true
        }
      }
    },
    image: {
      class: ImageTool,
      config: {
        uploader: {
          uploadByFile(file) {
            console.log(file)
          },
          uploadByUrl(url) {
            console.log(url)
          }
        }
      }
    }
  }
})

function App() {
  return (
    <div className="App">
      <h1>Your content</h1>
      <div id="editorjs" />
      <button onClick={() => {
        editor.save().then(outputData => console.log(outputData))
      }}>save</button>
    </div>
  );



}



export default App;
