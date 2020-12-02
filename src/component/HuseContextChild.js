import { useContext } from 'react';

import { NameContext } from './HuseContext';

function HuseContext(){
    const name = useContext(NameContext);
    return (
        // 不使用useContext
        // <NameContext.Consumer>
        //     {(name) => (
        //         <p>子组件渲染数据{name}</p>
        //     )}
        // </NameContext.Consumer>

        // 使用useContext
        <p>子组件渲染数据{name}</p>
    )
}

export default HuseContext;