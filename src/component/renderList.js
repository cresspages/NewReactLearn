import React from 'react';

const users = [
    { id: '11001', username: 'Jerry', age: 21, gender: 'male' },
    { id: '11002', username: 'Tomy', age: 22, gender: 'male' },
    { id: '11003', username: 'Lily', age: 19, gender: 'female' },
    { id: '11004', username: 'Lucy', age: 20, gender: 'female' }
]

class RenderList extends React.Component {
    render(){
        const userDom = [];

        for (const item of users) {
            userDom.push(
                <ul key={item.id}>
                    {
                        Object.keys(item).map((val) => {
                            return <li key={val}>{item[val]}</li>
                        })
                    }
                </ul>
            )
        }

        return (
            <div data-component="render-list">
                {userDom}
            </div>
        )
    }
}

export default RenderList;