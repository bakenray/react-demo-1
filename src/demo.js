
// const div = t('div',t('p',t('span','hi')))

// document.body.appendChild(div)

// function t(tagName,children){
//     const element = document.createElement(tagName)
//     if(children){
//         if(typeof children ==='string'){
//             var childElement = document.createTextNode(children)
//             element.appendChild(childElement)
//         }
//         else{
//             element.appendChild(children)
//         }
//     }
//     return element
// }

import React from 'react'
import ReactDOM from 'react-dom'

const Header =(
    <header>header</header>
)

const Footer =(
    <footer>footer</footer>
)

const Main = function(){
    const [n,setN] = React.useState(0)
    return(
        <mian>
            {n}
            <button onClick={function(){
                setN(n+1)
            }}>+1</button>
        </mian>
    )
}

const div =(
    <div>
        {Header}
        <Main name="ray"/>
        <p>
            <span>hi</span>
        </p>
        {Footer}
    </div>
)
console.log(div) //虚拟dom
ReactDOM.render(div,document.getElementById('root'))