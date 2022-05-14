import './App.css';
import { useState } from 'react'
import {Title} from './components/Title';
import {InputArea} from './components/InputArea';
import {DisplayArea} from './components/DisplayArea';
import {PageManage} from './components/PageManage';

function App() {
  const [displayMemo, setDisplayMemo] = useState("");
  const initialMemo = {
    id:1, 
    text:"",
    isActive: true
  }
  const [memos, setMemos] = useState([initialMemo]);

  return (
    <div className="App">
      <Title />
      <InputArea displayMemo={displayMemo} setDisplayMemo={setDisplayMemo} />
      <DisplayArea displayMemo={displayMemo}/>
      <PageManage 
        displayMemo={displayMemo} setDisplayMemo={setDisplayMemo} 
        memos={memos} setMemos={setMemos} 
      />
    </div>
  );
}

export default App;