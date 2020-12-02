// 使用useContext和useReducer 模拟 Redux;

import { useContext } from 'react';
import { ColorContext, Color } from './color';

// 显示区域组件
function ShowArea(){
    const context = useContext(ColorContext);
    return (
        <div style={{ color: context.color }}>字体颜色为{context.color}</div>
    )
}

// 按钮组件
function Button(){
    const context = useContext(ColorContext);
    return (
        <div>
            <button onClick={ () => { context.dispath({ type: 'upadatacolor', value: 'blue' }) } }>蓝色</button>
            <button onClick={ () => { context.dispath({ type: 'upadatacolor', value: 'yellow' }) } }>黄色</button>
        </div>
    )
}

// 父组件
function Father(){
    return (
        <div>
            <Color>
                <Button></Button>
                <ShowArea></ShowArea>
            </Color>
        </div>
    )
}

export default Father;