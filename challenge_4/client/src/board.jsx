import React from 'react';

var Board = (props)=> (
    <div>
    <table id="table">
    <tbody>
    {props.board.map(function(row, i){
        return (<tr>
            <td className="col1" rows={i+1} cols="1" onClick={(e)=>{props.handleColClick(e)}}></td>
            <td className="col2" rows={i+1} cols="2" onClick={(e)=>{props.handleColClick(e)}}></td>
            <td className="col3" rows={i+1} cols="3" onClick={(e)=>{props.handleColClick(e)}}></td>
            <td className="col4" rows={i+1} cols="4" onClick={(e)=>{props.handleColClick(e)}}></td>
            <td className="col5" rows={i+1} cols="5" onClick={(e)=>{props.handleColClick(e)}}></td>
            <td className="col6" rows={i+1} cols="6" onClick={(e)=>{props.handleColClick(e)}}></td>
            <td className="col7" rows={i+1} cols="7" onClick={(e)=>{props.handleColClick(e)}}></td>
            </tr>)
    })}
    </tbody>
    </table>
    </div>
)

export default Board;