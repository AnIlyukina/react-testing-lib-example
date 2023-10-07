import {useEffect, useState} from "react";
import AppRouters from "./router/AppRouters";
import Navbar from "./components/Navbar/Navbar";
import Counter from "./components/Counter/Counter";

function App() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('')
    const toggleClick = () => setToggle(prev => !prev);

    useEffect(() => {
        setTimeout(() => {
            setData({})
        }, 100)
    }, [])

    return (<div>

        <Navbar/>
        <AppRouters/>
        {/*<p data-testid="value-elem">{ value }</p>*/}
        {/*{toggle && <div data-testid="toggle-div">toggle</div>}*/}
        {/*{data && <div style={{color: 'red'}}>data</div>}*/}
        {/*<h1>Hello world</h1>*/}
        {/*<button data-testid="toggle-btn" onClick={toggleClick}> Кнопка </button>*/}
        {/*<input type="text" placeholder='инпут value' onChange={e => setValue(e.target.value)} />*/}
    </div>);
}

export default App;
