import React, { Component } from 'react';
import store from '../store/index';

import { Input, Button, List } from 'antd';
import axios from 'axios';

import '../assets/reduxcom.css';

import { handerChangePlanInput, handerAddPlan, handerDeletePlan, handerGetStoreData } from '../store/actionCreators';

class reduxCom extends Component {
    constructor(props){
        super(props);
        this.state = { 
            planInputValue: '',
            storeData: store.getState()};
        this.inputChange = this.inputChange.bind(this);
        this.submitPlan = this.submitPlan.bind(this);
        this.storeChange = this.storeChange.bind(this);
    }

    componentDidMount(){
        store.subscribe(this.storeChange);

        // 初始化请求数据写入store
        axios.get('storeData.json').then((res) => {
            store.dispatch(handerGetStoreData(res.data));
        });
    }

    inputChange(e){
        // const action = {
        //     type: ChangePlanInput,
        //     value: e.target.value
        // }
        // store.dispatch(action);

        store.dispatch(handerChangePlanInput(e.target.value));

        this.setState({ planInputValue: e.target.value });
    }

    submitPlan(){
        // const action = { type: AddPlan };
        // store.dispatch(action);

        store.dispatch(handerAddPlan());

        this.setState({ planInputValue: '' });
    }

    enterAddPlan(e){
        if( e.keyCode === 13 ){
            // const action = { type: AddPlan };
            // store.dispatch(action);

            store.dispatch(handerAddPlan());

            this.setState({ planInputValue: '' });
        }
    }

    storeChange(){
        this.setState({ storeData: store.getState()});
    }

    deletePlan(index){
        // const action = {
        //     type: DeletePlan,
        //     index
        // }
        // store.dispatch(action);

        store.dispatch(handerDeletePlan(index));
    }

    render(){
        let planData = this.state.storeData.list;
        return (
            <div className="reduxcom">
                <div className="input-area">
                    <Input placeholder="输入计划" value={this.state.planInputValue} onChange={this.inputChange} onKeyDown={this.enterAddPlan.bind(this)}></Input>
                    <Button type="primary" onClick={this.submitPlan}>添加</Button>
                </div>
                <List
                    itemLayout="horizontal"
                    dataSource={planData}
                    renderItem={
                        (item, index) => <List.Item>
                                {item}
                                <Button danger size="small" style={ { float: 'right' } } onClick={this.deletePlan.bind(this, index)}>删除</Button>
                            </List.Item>
                    }
                >

                </List>
            </div>
        )
    }
}

export default reduxCom;