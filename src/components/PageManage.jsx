import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

export const PageManage = (props) => {
    
    
    const addPage = () => {

        //memo 現在のメモを保存
        props.setMemos(
            [
                ...(props.memos.map((memo) => {
                    if(memo.isActive){
                        return {
                            ...memo,
                            text: props.displayMemo,
                            isActive: false
                        }
                    }
                    return memo;
                })),
                {
                    id: props.memos.length+1,
                    text: '',
                    isActive: true
                },
            ]
        );

        props.setDisplayMemo("");
    }

    const changePage = (nextActiveId) => {

        let currentActiveId = 0;
        let nextDisplayMemo = "";

        props.memos.forEach((memo) => {
            if(memo.isActive){
                currentActiveId = memo.id
            }
        });

        if(currentActiveId === nextActiveId){
            return;
        }

        // 現在のメモを保存してクリックしたIDのメモを表示
        props.setMemos(
            props.memos.map((memo) => {
                if(memo.id === currentActiveId){
                    return {
                        ...memo,
                        text: props.displayMemo,
                        isActive: false
                    }
                }
                if(memo.id === nextActiveId){    
                    nextDisplayMemo = memo.text;
                    return {
                        ...memo,            
                        isActive: true
                    }
                }
                return memo;
            })
        )
        
        props.setDisplayMemo(nextDisplayMemo);

    }


    return (
        <div className="PageManage">
            <FontAwesomeIcon onClick={ () => addPage() } icon={faFileCirclePlus} size="2x" color="#483d8b" className="add-page"/>
            <ul>
                {props.memos.map((memo) => (
            <li key={memo.id} 
                onClick={() => changePage(memo.id)}
                className={memo.isActive ? "active" : ""}
            >
                <span>{memo.id}</span>
            </li>
            ))}
            </ul>
        </div>
    )
}
