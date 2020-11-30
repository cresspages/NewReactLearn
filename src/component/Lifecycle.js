import React from 'react';

class Clock extends React.Component {
    constructor(){
        super();
        this.state = { date: new Date().toString() }
        console.log('数据初始化');
    }





    // componentWillMount  componentDidMount   componentWillUnmount   只会在组件挂载和销毁的时候执行一次
    componentWillMount(){
        console.log('在render执行之前执行');

        // 此处可以进行ajax

        this.timer = setInterval(() => {
            this.setState({ date: new Date().toString() });
        }, 1000)
    }
    
    componentDidMount(){
        console.log('在render执行之后执行');
    }
    


    // componentWillUpdate   componentDidUpdate 这两个生命周期钩子会随着render的渲染而改变 每一次渲染都会执行  初始渲染不调用此方法。
    componentWillUpdate(){
        console.log('组件开始重新渲染之前执行');
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('组件重新渲染之后执行');
    }

    componentWillUnmount(){
        // 删除组件必须清楚定时器
        clearInterval(this.timer);

        console.log('组件删除之前');
    }

    render(){
        console.log('render执行');
        return (
            <div>{ this.state.date }</div>
        )
    }

}

class lifecycle extends React.Component {
    constructor(){
        super();
        this.state = { isShow: true, clocktext: '关闭定时器'  };
        this.handerStart = this.handerStart.bind(this);
    }

    handerStart(){
        this.setState({ isShow: !this.state.isShow, clocktext: '开启定时器' });
    }

    render(){
        return (
            <div>
                { this.state.isShow && <Clock /> }
                <button onClick={this.handerStart}>{ this.state.clocktext }</button>
            </div>
        )

    }

}

export default lifecycle;