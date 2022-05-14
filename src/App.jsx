import './App.css';
import {Title} from './components/Title';
import {InputArea} from './components/InputArea';
import {DisplayArea} from './components/DisplayArea';
import { useState } from 'react'

function App() {
  const [memo, setMemo] = useState('');

  return (
    <div className="App">
      <Title />
      <InputArea memo={memo} setMemo={setMemo} />
      <DisplayArea memo={memo}/>      
    </div>
  );
}

export default App;