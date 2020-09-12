import React from 'react';
import Question from './Question';
import data from './Data'

function Renders(props) {
    const dataset = data.map(info => < Question key = { info.id }
                                        question = { info.question }
                                        description = { info.description }
                                        tag = { info.tag }
                                    />)
        return ( 
            <div> 
                { dataset } 
            </div>
        )
}

export default Renders;