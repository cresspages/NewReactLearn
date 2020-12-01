import { createContext, useContext } from 'react';

const nameContext = createContext(null);

function HuseContext(){
    const name = useContext(nameContext);
    return (
        <p>子组件渲染数据{name}</p>
    )
}

export default HuseContext;