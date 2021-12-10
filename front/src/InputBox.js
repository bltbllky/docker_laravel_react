import React, { useState } from 'react';

const InputBox = ({sendData}) => {
    const [data, setData] = useState('')

    const send = () =>{
        if(data)
        sendData(data);
        setData('');
    }

    return (
        <div>
            <input
                className="FormInput"
                data-testid="add-input"
                value={data}
                placeholder="Metin"
                onChange={e=>setData(e.target.value)} />
            <button
                data-testid="add-button"
                type="button"
                onClick={send}
            >
                ekle
            </button>
        </div>
    );

}

export default InputBox;
