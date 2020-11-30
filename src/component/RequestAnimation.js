import React from 'react';

import axios from 'axios';

import { Spin } from 'antd';

import 'antd/dist/antd.css';


class Button extends React.Component {

    constructor(){
        super()
        this.state = { isShow: false };
    }

    resData(e){
        e.target.innerText = '正在请求';
        e.target.disabled = true;

        var that = this;
        // 添加请求拦截器
        axios.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            that.setState({ isShow: true });
            e.target.innerText = '请求数据';
            e.target.disabled = false;
            return config;
        }, function (error) {
            // 对请求错误做些什么
            that.setState({ isShow: false });
            e.target.innerText = '开始请求';
            e.target.disabled = false;
            return Promise.reject(error);
        });

        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            that.setState({ isShow: false });
            e.target.innerText = '开始请求';
            e.target.disabled = false;
            return response;
        }, function (error) {
            // 对响应错误做点什么
            that.setState({ isShow: false });
            e.target.innerText = '开始请求';
            e.target.disabled = false;
            return Promise.reject(error);
        });

        axios.get('/commentdata.json').then(
            function(res){
                console.log(res);
            }
        ).catch(
            function(err){
                console.log(err);
            }
        )

    }

    render(){
        return (
            <div>
                { this.state.isShow && <Spin /> }
                <button onClick={this.resData.bind(this)}>开始请求</button>
            </div>
        )
    }

}

export default Button;