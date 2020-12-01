import { useState } from "react";

function ExampleState(){
    // 调用useState函数返对象，使用结构第一个为变量名，第二个为修改的方法，似setState
    const [ name, setName ] = useState('cress');
    const [ age, setAge ] = useState(21);
    const [ hoppy, setHoppy ] = useState('money');



    return (
        <div>
            <p>{ name }</p>
            <p onClick={ () => { setAge(age + 1) } }>{ age }</p> {/* 每点击一次年龄加一 */}
            <p>{ hoppy }</p>
        </div>
    )

}

export default ExampleState;