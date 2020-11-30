import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import Nav from './component/publicComponent/Nav';
import StateL from './component/state';
import Props from './component/props';
import RenderList from './component/renderList';
import Comment from './component/Comment';
import Lifecycle from './component/Lifecycle';
import Ref from './component/Ref';
import PropsChildren from './component/Props.children';
import { InnerHTML_Style } from './component/DangerouslySetHTML_Style';
import RequestAnimation from './component/RequestAnimation';
import ReduxToDoList from './component/Redux-ToDoList';
import ReactHooks from './component/ReactHooks';
import NotPage from './component/notPage';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 不使用router构建路由
// class All extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {route: window.location.hash.substr(1)}
//   }

//   componentDidMount(){ // 组件已挂载
//     let that = this; 
//     window.addEventListener('hashchange', function(){
//       let hash = window.location.hash.substr(1);
//       that.setState({route: hash});
//       console.log(that.state.route);
//     });
//   }

//   render(){

//     let RenderChild = null;

//     switch (this.state.route) {
//       case '/home':
//         RenderChild = App
//         break;
//       case '/state':
//         RenderChild = State_
//         break;
//       default:
//         RenderChild = App
//         break;
//     }

//     return (
//       <React.StrictMode>
//         <Nav />
//         <RenderChild />
//       </React.StrictMode>
//     )
    
//   }
// }


// 使用router构建路由
class All extends React.Component {

  render(){

    // 渲染一级路由所需数据
    const firstLevel = [
      {path: '/home', text: 'HOME'},
      {path: '/firstlevel', text: '第一阶段'},
      {path: '/seconedlevel', text: '第二阶段'},
      {path: '/resAnimation', text: '请求动画'},
      {path: '/reduxtodolist', text: 'Redux'},
      {path: '/reacthooks', text: 'ReactHooks'},
    ]

    // 渲染firstlevel下二级路由所需数据
    const firstSecondLevel = [
      {path: '/firstlevel/state', text: 'state'},
      {path: '/firstlevel/props', text: 'props'},
      {path: '/firstlevel/renderlist', text: '渲染列表数据'},
      {path: '/firstlevel/comment', text: '评论案例'},
    ]

    // 渲染seconedlevel下二级路由所需数据
    const seconedSecondLevel = [
      {path: '/seconedlevel/lifecycle', text: '生命周期'},
      {path: '/seconedlevel/ref', text: 'Ref属性'},
      {path: '/seconedlevel/propschildren', text: 'Props.children'},
      {path: '/seconedlevel/dangerouslysethtmlstyle', text: 'DangerouslySetHTML_Style'},
    ]

    return (
      // React.StrictMode 检测一些隐藏的warn
      <React.StrictMode>

        <Router>
            <Nav routerData={firstLevel} />

            {/* Switch 仅会匹配一个页面 */}
            <Switch>
              {/* 使用jsx */}
              <Route path='/' component={App} exact />
              <Route path="/home" component={App} exact />
              <Route path="/firstlevel">
                <Nav routerData={firstSecondLevel} exact />

                <Route path="/firstlevel/state" component={StateL}  exact />
                <Route path="/firstlevel/props" component={Props} exact />
                <Route path="/firstlevel/renderlist" component={RenderList} exact />
                <Route path="/firstlevel/comment" component={Comment} exact />
              </Route>
              <Route path="/seconedlevel">
                <Nav routerData={seconedSecondLevel} />

                <Route path="/seconedlevel/lifecycle" component={Lifecycle} exact />
                <Route path="/seconedlevel/ref" component={Ref} exact />
                <Route path="/seconedlevel/propschildren" component={PropsChildren} exact />
                <Route path="/seconedlevel/dangerouslysethtmlstyle" component={InnerHTML_Style} exact />
              </Route>
              <Route path="/resAnimation" component={RequestAnimation}></Route>
              <Route path="/reduxtodolist" component={ReduxToDoList}></Route>
              <Route path="/reacthooks" component={ReactHooks}></Route>
              {/* 没有匹配的页面 */}
              <Route component={NotPage} />
              {/* 使用对象配置 */}
            </Switch>
        </Router>

      </React.StrictMode>
    )
  }
}

ReactDOM.render(
  <All />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
