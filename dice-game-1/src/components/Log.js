import React, { Component } from 'react'

class Log extends Component {
    render() {
    return (
        <>
        <div>
           { this.props.diceLog.map((value , index) => {
               return (
                   <p key={ index }>
                      { value }
                   </p>
               )
           })}
        </div>
        </>
        )
    }
}
export default Log