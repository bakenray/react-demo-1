import React,{useState} from 'react';
import ReactDOM from 'react-dom'
import './style.css'

const Cell = function(props){
    return(
        <div className="cell" onClick={props.onClick}>
            {props.text}
        </div>
    )
}

const Chessboard = function(){
    const [cells,setCells] = useState(
        [
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ] 
    )
    const [finished,setFinished] = useState(false)
    const [n,setN] = useState(0)
    const [winer,setWiner] = useState('')


    const tell =(cells)=>{
        // 判断行
        for(let i= 0;i < 3;i++){
            if(cells[i][0] === cells[i][1] && cells[i][1] === cells[i][2] &&cells[i][0] !==null){
                setFinished(true)
                setWiner(cells[i][0])
                break;
            }
        }
        // 判断列
        for(let i= 0;i < 3;i++){
            if(cells[0][i] === cells[1][i] && cells[1][i] === cells[2][i] &&cells[0][i] !==null){
                setFinished(true)
                setWiner(cells[0][i])
                break;
            }
        }
        // 判断左斜
        if(
            cells[0][0] === cells[1][1] && 
            cells[1][1] === cells[2][2] &&
            cells[0][0] !== null
        ){
            setFinished(true)
            setWiner(cells[0][0])
        }
        // 判断右斜
        if(
            cells[0][2] === cells[1][1] && 
            cells[1][1] === cells[2][0] &&
            cells[1][1] !== null
        ){
            setFinished(true)
            setWiner(cells[1][1])
        }
    }
    const onClickCell = (row,col)=>{
        setN(n+1)
        const copy = JSON.parse(JSON.stringify(cells))
        copy[row][col] = n%2 ===0 ?'X':'O'
        setCells(copy)
        tell(copy)
    }
    return(
        <div className="box">
            <div className="number">第{n}手</div>
            {cells.map((items,row)=>
                <div className="row">
                    {items.map((item,col)=>
                    <div className="col">
                        <Cell text={item} onClick={()=>onClickCell(row,col)}/>
                    </div>)}
                </div>)}
                {finished && <div className="gameOver">{winer}赢啦</div>}
        </div>
    )
}
ReactDOM.render(
    <div>
        <Chessboard></Chessboard>
    </div>
    ,document.getElementById('root')
)