// 点赞的组件

import React from 'react';

import '../../assets/props.css';

class greatButton extends React.Component {
    static defaultProps = {
        greatText: '已点赞',
        unGreatText: '未点赞'
    }

    constructor(){
        super();
        this.state = { isGreat: false }
        this.handerChange = this.handerChange.bind(this);
    }

    handerChange(){
        this.setState({ isGreat: !this.state.isGreat });
    }

    render(){
        var text = this.state.isGreat ? this.props.greatText : this.props.unGreatText;
        var style = this.state.isGreat && this.props.greatStyle;

        return (
            <div data-component="greate-button">
                <div onClick={this.handerChange} className={"button " + style}>{ text }</div>
            </div>
        )
    }
}

export default greatButton;