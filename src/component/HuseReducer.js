import { useReducer } from 'react';

function ExampleReducer(){
    // dispath为状态改变函数
    const [ count, dispath ] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1;
            case 'sub':
                return state - 1;
            default:
                return state;
        }
    }, 0); // 函数第二个参数为count的初始值

    return (
        <div>
            <button onClick={ () => dispath('add') }>加1</button>
            <button onClick={ () => dispath('sub') }>减1</button>
            <p>现在count: { count }</p>
        </div>
    )
}

export default ExampleReducer;