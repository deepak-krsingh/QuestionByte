import React from 'react';
import Vote from './Vote'

function Question(props) {
    return ( 
        <div>
            <div className="show">
                <Vote idc = { props.question } /> 

                <div className = "align" style={{fontSize:"14px"}}>

                    <a href="#"style={{color:"rgb(32, 93, 223)", fontSize:"16px"}}> {props.question} </a>   
                    <p className = "text ellipsis">
                        <span className = "text-concat" style={{color:"black", fontSize:"14px"}}> { props.description } </span>  
                    </p>
                </div> 

                <ul style={{marginLeft:"7rem"}}>       
                    <table>
                        <tr>
                            <td className = "table2"> 
                                <a href = "#" style={{marginRight:"0.5rem", marginLeft:"0.5rem", fontSize:"14px"}}> hh </a>
                            </td>
                            <td className = "table2"> 
                                <a href = "#" style={{marginRight:"0.5rem", marginLeft:"0.5rem", fontSize:"14px"}}> hi </a>
                            </td >
                            <td className = "table2"> 
                                <a href = "#" style={{marginRight:"0.5rem", marginLeft:"0.5rem", fontSize:"14px"}}> Active </a>
                            </td >
                            <td className = "table2"> 
                                <a href = "#" style={{marginRight:"0.5rem", marginLeft:"0.5rem", fontSize:"14px"}}> Closed </a>
                            </td >  
                            <td><pre>   Username</pre></td> 
                        </tr>
                    </table>
                </ul>
            
            </div>
            <hr/>
            
        </div>
    )
}

export default Question;