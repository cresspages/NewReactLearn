import { useState, useEffect } from 'react';

// useEffect 在class组件中存在生命周期 而函数式组件中没有  useEffect类似生命周期  称之为副作用

function ExampleEffect(){
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        // 此处类似于componentDidMount 和 componentDidUpdate
        // 此函数为异步执行  生命周期函数为同步执行
        console.log('组件第一次渲染和之后每次的渲染都会执行');
        return () => {
            console.log('离开了useEffect页');
        }
    }, [count]);
    // 不加第二个参数（数组）则每次页面状态发生改变，都会解绑useEffect这个副作用，也就是执行return。加上第二个参数（设置为空数组），则只有在当前组件销毁才会对useEffect进行解绑（执行return）。如果想指定部分变量状态改变就解绑，则在数组中填入需要解绑的变量，此变量状态改变才解绑。
    // 注：第二个参数为空数组，则导致似 componentDidUpdate 的副作用不会执行

    return(
        <div>
            <p onClick={() => { setCount(count + 1) }}>{ count }</p>
        </div>
    )

}

export default ExampleEffect;