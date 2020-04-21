import React, { useState, useRef } from 'react';

type ListInputProps = {
    onAddCard: (text: string) => void;
}

function ListInput({onAddCard}: ListInputProps) {
    const [text, setText] = useState('');
    const textRef = useRef<HTMLTextAreaElement>(null);

    const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value);
    }
    const onAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(!text) { return; }
        onAddCard(text);
        setText('');
        if(!textRef.current) { return }
        textRef.current.focus();
    }
    const onCancel = () => {
        setText('');
        if(!textRef.current) { return }
        textRef.current.focus();
    }

    return (
        <div className='list-input'>
            <div className='list-input-text'>
                <textarea 
                    ref={textRef} 
                    placeholder='할 일을 적어주세요.' 
                    value={text} 
                    onChange={onChangeTextarea} 
                />
            </div>
            <div className='list-input-controls'>
                <button className='add' onClick={onAdd}>Add</button>
                <button className='cancel' onClick={onCancel}>X</button>
            </div>
        </div>
    )
}

export default ListInput;