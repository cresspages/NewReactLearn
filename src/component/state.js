import '../assets/state.css';

import React from 'react';

class state extends React.Component {
    constructor(props){
        super(props);
        this.state = { isGrate: false, count: 0 }
        this.handerChange = this.handerChange.bind(this);
        this.handerContinuousChange = this.handerContinuousChange.bind(this);
    }

    handerChange(){
        this.setState({ isGrate: !this.state.isGrate });
    }

    // 连续点赞
    handerContinuousChange(){
        this.setState({ count: this.state.count + 1 });

        // 第二种方法
        // this.setState((prevState) => {
        //     // console.log(prevState); // 读取state里的值
        //     return { count: prevState.count + 1 }
        // });
    }

    render(){
        var color = this.state.isGrate ? 'yes' : '';

        return(
            <div>
                <div id="great">
                    <div onClick={this.handerChange} className={color}>点赞</div>
                    <div onClick={this.handerContinuousChange} className='yes'>连续点赞{ this.state.count }</div>
                </div>
            </div>
        )
    }
}

export default state;