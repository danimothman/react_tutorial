//props를 활용하는 기본 방법
//default 활용


import React from 'react';

// function Hello(props){
//     return <div style={{color:props.color}}> 안녕하세요{props.name}</div>
// }


function Hello({color, name}){
    return <div style={{color}}> 안녕하세요{name}</div>
}

Hello.defaultProps = {
    name:"대전"
}

export default Hello;