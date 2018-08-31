import React from 'react';

var Board = (props)=> (
    <div>
    <table id="table">
    <tbody>
    {props.board.map(function(row){
        return (    <tr>
            <td className="col1" colindex="0" onClick={(e)=>{props.handleColClick(e.target)}}></td>
            <td className="col2" colindex="1" onClick={(e)=>{props.handleColClick(e.target)}}></td>
            <td className="col3" colindex="2" onClick={(e)=>{props.handleColClick(e.target)}}></td>
            <td className="col4" colindex="3" onClick={(e)=>{props.handleColClick(e.target)}}></td>
            <td className="col5" colindex="4" onClick={(e)=>{props.handleColClick(e.target)}}></td>
            <td className="col6" colindex="5" onClick={(e)=>{props.handleColClick(e.target)}}></td>
            <td className="col7" colindex="6" onClick={(e)=>{props.handleColClick(e.target)}}></td>
            </tr>)
    })}
    </tbody>
    </table>
    </div>
)

export default Board;