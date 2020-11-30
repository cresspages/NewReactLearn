// 导航组件

import '../../assets/nav.css';

import { NavLink } from 'react-router-dom';

function nav(props) {
    return (
        <div className="nav">
            {
                props.routerData.map((item) => {
                    return <NavLink key={item.path} to={item.path} activeClassName="active">{item.text}</NavLink>
                })
            }
            {/* <NavLink to="/home" activeClassName="active">HOME</NavLink>
            <NavLink to="/state" activeClassName="active">state</NavLink>
            <NavLink to="/props" activeClassName="active">props</NavLink>
            <NavLink to="/renderlist" activeClassName="active">渲染列表数据</NavLink> */}
        </div>
    )
}

export default nav;