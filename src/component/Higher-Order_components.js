// 高阶组件  组件间的 代码 复用
// 高阶组件是一个函数

import React, { Component } from 'react';

import axios from 'axios';

let wrapper = (WrapperComponent, url) => {

    class NewComponent extends Component {
        constructor(){
            super();
            this.state = ({ data: null });
        }

        componentWillMount(){
            axios.get(url).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
        }

        render(){
            return (
                <WrapperComponent data={this.state.data} />
            )
        }
    }

    return NewComponent;
}
