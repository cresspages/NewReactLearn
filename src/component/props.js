import React from 'react';

import GreatButton from './publicComponent/greatButton'

class props extends React.Component {

    render(){
        return (
            <div>
                {/* greatText 点赞后的文本
                    unGreatText 取消或者未点赞的文本
                    greatStyle 点赞后的样式 */}
                <GreatButton greatText="已点赞" unGreatText="点赞" greatStyle="yes" />

                {/* 测试默认props */}
                <GreatButton greatStyle="yes" />
            </div>
        )
    }
}

export default props;