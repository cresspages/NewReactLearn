import React from 'react';

class Father extends React.Component {

    componentDidMount(){
        console.log(this.props.children);
    }

    render () {
        return (
            <div>
                {/* 能够获取到组件调用时 组件内的元素信息 */}
                { this.props.children }
            </div>
        )
    }

}

class child extends React.Component {

    render () {
        return (
            <Father>
                <div>子组件</div>
                <input type="text" />
            </Father>
        )
    }

}

export default child;