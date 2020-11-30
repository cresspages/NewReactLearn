// 本组件实现一个简单的评论功能

import React from 'react';

import axios from 'axios';

import '../assets/comment.css';

class CommentInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            comText: ''
        }
        this.nameChange = this.nameChange.bind(this);
        this.comtextChange = this.comtextChange.bind(this);
        this.handerSubmit = this.handerSubmit.bind(this);
    }

    nameChange(event){
        this.setState({ userName: event.target.value })
    }

    comtextChange(event){
        this.setState({ comText: event.target.value })
    }

    handerSubmit(){
        if(this.props.onSubmit){
            const user = this.state.userName;
            const com = this.state.comText;
            this.props.onSubmit({ username: user, comtext: com, date: +new Date });
        }
        this.setState({ userName: '', comText: '' });
    }

    componentDidMount(){
        // 页面加载完成聚焦到用户名框
        this.userInput.focus();
    }

    render(){
        return (
            <div className="inputArea">
                <input placeholder="输入你的用户名" onChange={this.nameChange} value={this.state.userName} ref={(input) => this.userInput = input} />
                <textarea placeholder="输入你的评论" onChange={this.comtextChange} value={this.state.comText} />
                <button onClick={this.handerSubmit}>发布</button>
            </div>
        )
    }
}

class ShowComment extends React.Component {

    constructor(){
        super();

        this.state = { data: [], prevProp: [] }
    }
    
    componentWillMount(){
        var that = this;
        axios.get('/commentdata.json').then(
            function(res){
                res.data.map((item) => {
                    item.dateNow = that.showDate(item.dateNow);
                });
                that.setState({ data: res.data });
            }
        ).catch(
            function(err){
                console.log(err);
            }
        )

    }

    // 显示时间
    showDate(data){
        let timeString = '';
        let now = +new Date();
        let duration = parseInt((now - (+data)) / 1000);
        if(duration < 60){
            timeString = duration + '秒前';
        } else if (duration < 3600) {
            timeString = parseInt(duration / 60) + '分钟前';
        } else if (duration < 86400) {
            timeString = parseInt(duration / 3600) + '小时前';
        } else if (duration > 86400) {
            timeString = parseInt(duration / 86400) + '天前';
        } 
        return timeString;
    }

    componentWillUpdate(prevProps, prevState){
        if(prevProps.comdata.length != 0 && this.state.prevProp != prevProps.comdata){ //eslint-disable-line
            prevProps.comdata.dateNow = '刚刚';
            prevState.data.push(prevProps.comdata);
            prevState.comdata = prevProps.comdata;
        }
    }

    deleteCom(e){
        var fatherElem = e.target.parentNode.parentNode; // 此方法不合理  之后改进
        fatherElem.remove();
    }

    render () {
        var data = this.state.data;
        return (
            data.map((item, index) => {
                return (
                    <div className="showComment" key={ item.username + index }>
                        <div>
                            <p className="username">{item.username}</p>
                            <p className="comText">{item.comtext}</p>
                        </div>
                        <div className="back">
                            <span className="timeNow">{ item.dateNow }</span>
                            <button>回复</button>
                            <button onClick={this.deleteCom}>删除</button>
                        </div>
                    </div>
                )
            })
        )
    }
    
}

class Comment extends React.Component {
    constructor(){
        super();
        this.state = {data: []}
        this.handerGetComText = this.handerGetComText.bind(this);
    }

    // 获取评论的信息
    handerGetComText(comtext){
        this.setState({data: comtext});
    }

    render(){

        const data = this.state.data;

        return (
            <div data-component="comment">
                <CommentInput onSubmit={this.handerGetComText} />
                <ShowComment comdata={data} />
            </div>
        )
    }
}

export default Comment;