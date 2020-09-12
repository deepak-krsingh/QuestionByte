import React from 'react';
import Vote from './Files/Vote'
import Header from './Files/Header'
import Description from './Files/Description'
import Example from './Files/Example'
import Code from './Files/Code'
import Tag from './Files/Tag'
import Conclusion from './Files/Conclusion'
import User from './Files/User'
import Answer from './Files/Answer'

function Question() {
    return ( 
        <div>
            <Header /> <hr />
            <Vote />
            <div className="align">
                <div>
                    <Description />
                    <Example />
                    <Code />
                    <Conclusion />
                    <Tag />
                    <div><User /></div>
                    <Answer />
                </div>
            </div>   
        </div>         
    )
}

export default Question;