import { useState, createContext } from "react";

import HuseContext from './HuseContextChild';

const nameContext = createContext();

function ExampleState(){
    const [ name, setName ] = useState('cress');

    return (
        <div>
            <p>父组件渲染数据：{ name }</p>
            <nameContext.Provider value={name}>
                {/* 这里写入需要传值的子组件 */}
                <HuseContext></HuseContext>
            </nameContext.Provider>
        </div>
    )

}

export default ExampleState;