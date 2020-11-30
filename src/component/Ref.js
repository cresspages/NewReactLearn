// ref 用于快速找到组件内的某一个元素

import React from 'react';

class ref extends React.Component {

    constructor(){
        super();
    }

    componentDidMount (){
        this.myInput.focus()
    }

    render(){
        return (
            // 此时当前元素绑定在了this.myInput上
            <input ref={(input) => this.myInput = input} />
        )
    }

}

export default ref;