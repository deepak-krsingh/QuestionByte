import React from 'react';

function Header() {
    return ( 
        <div>
            <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
                <div style={{marginLeft:"0.7rem"}}>
                    All Questions
                </div>
                <ul>
                <button class="button">Ask Question</button>
                </ul>
            </div>
            <div className="d-sm-flex justify-content-between"> 
               
                <div style={{marginLeft:"0.9rem", font: "1rem Helvetica"}}>
                        1111111 questions
                </div>

                <ul>
                    <table className = "table1" style={{marginRight:"3rem"}}>
                        <tr className = "table1">
                            <td className = "table1 link"> 
                                <a href = "#" style={{marginRight:"0.5rem", marginLeft:"0.5rem"}}> Newest </a>
                            </td>
                            <td className = "table1 link"> 
                                <a href = "#" style={{marginRight:"0.5rem", marginLeft:"0.5rem"}}> Most Vote </a>
                            </td >
                            <td className = "table1 link"> 
                                <a href = "#" style={{marginRight:"0.5rem", marginLeft:"0.5rem"}}> Active </a>
                            </td >
                            <td className = "table1 link"> 
                                <a href = "#" style={{marginRight:"0.5rem", marginLeft:"0.5rem"}}> Closed </a>
                            </td >   
                        </tr>   
                    </table>
                </ul>

            </div>
            <hr />
            
        </div>       
    )
}

export default Header;