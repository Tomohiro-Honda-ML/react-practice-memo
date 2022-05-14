import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export const InputArea = (props) => {

  const [inputText, setInputText] = useState('');

  const hundleSubmit = (e) => {
    e.preventDefault();

    let appendText = inputText

    if(props.displayMemo !== ''){
      appendText = '\n' + appendText;
    }

    props.setDisplayMemo(props.displayMemo+appendText);
    setInputText('');
  }

  const hundleType = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className="InputArea">
        <form onSubmit={hundleSubmit}>
            <input type="text" onChange={hundleType} value={inputText}/>
            <button>
              <FontAwesomeIcon icon={faPen} color="#483d8b"/>
            </button>
        </form>
    </div>
  )
}
