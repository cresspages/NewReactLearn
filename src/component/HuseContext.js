import { useState, createContext } from "react";

import HuseContext from './HuseContextChild';

export const NameContext = createContext('');

function ExampleState(){
    const [ name, setName ] = useState('cress');

    return (
        <div>
            <p>父组件渲染数据：{ name }</p>
            <NameContext.Provider value={name}>
                {/* 这里写入需要传值的子组件 */}
                <HuseContext></HuseContext>
            </NameContext.Provider>
        </div>
    )

}

export default ExampleState;