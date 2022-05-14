import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export const InputArea = (props) => {

  const [inputText, setInputText] = useState('');

  const hundleSubmit = (e) => {
    e.preventDefault();

    let appendText = inputText

    if(props.memo !== ''){
      appendText = '\n' + appendText;
    }

    props.setMemo(props.memo+appendText);
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
              <FontAwesomeIcon icon={faPen} />
            </button>
        </form>
    </div>
  )
}
