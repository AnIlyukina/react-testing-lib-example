import React, {useState} from 'react';

const HelloWorld = () => {

    const [value, setValue] = useState('')
    const [visible, setVisible] = useState(false)

    const onChange = (e) => setValue(e.target.value)
    const toggle = () => value === 'hello' && setVisible(prev => !prev)

    return (
        <div>
            <input
                id="search"
                onChange={onChange}
            />

            <button onClick={toggle} id="toggle"> HELLO WORLD !!!</button>
            {visible && <h1 id="hello">HELLO WORLD</h1>}
        </div>
    );
};

export default HelloWorld;