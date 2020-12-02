import { createContext, useReducer } from 'react';

export const ColorContext = createContext({});

const updata_color = 'upadatacolor';

const reducer = (state, action) => {
    switch (action.type) {
        case updata_color:
            return state = action.value;
        default:
            return state;
    }
}

export const Color = (props) => {
    const [color, dispath] = useReducer(reducer, 'blue'); // 定义变量color ， 函数dispath通过ColorContext.Provider传递给子组件使用
    return (
        <ColorContext.Provider value={ {color, dispath} }>
            { props.children }
        </ColorContext.Provider>
    )
}