import React from 'react';

class InnerHTML extends React.Component {
    constructor(){
        super();
        this.state = {
            content: '<div>动态添加的div</div>'
        }
    }

    render () {
        return (
            // 使用dangerouslySetInnerHTML动态添加html 防止跨站脚本攻击 不必要情况下不使用
            <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
        )
    }

}

class Style extends React.Component {
    render () {
        return (
            <div style={{ fontSize: '20px', color: 'green' }}>React中的style</div>
        )
    }
}

export class InnerHTML_Style extends React.Component {
    render(){
        return (
            <div>
                <InnerHTML />
                <Style />
            </div>
        )
    }
}