import {  } from 'react';

/* 
    props: {
        time: {
            s/second: '', 秒
            m/minute: '', 分
            h/hour: '', 时
            d/day: '', 天
            w/week: '', 周
            mo/month： '', 月
            y/year: '', 年
        }
    }
*/

// 2020-12-24 08:08:08
function beforeTime(props){
    
    // 取当前时间
    var date = new Date();
    var now_s = date.getSeconds();
    var now_m = date.getMinutes();
    var now_h = date.getHours();
    var now_d = date.getUTCDate();
    var now_mo = date.getMonth();
    var now_y = date.getFullYear();

    return (
        <div>
            <span>5</span>
            <span>秒钟前</span>
        </div>
    )
}

export default beforeTime;