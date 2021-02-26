import React, { Component } from 'react'
import Dice from './components/Dice'
import Log from './components/Log'
import './App.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            diceNumber: 0,
            diceLog: []
        }
}
diceRoll = () => {
    let dice = Math.ceil(Math.random() * 6)
    console.log(dice)
    this.setState({diceNumber: dice , diceLog: 
        [... this.state.diceLog, dice]
    })

}
    render() {
    return (
        <>
            <hi>Dice Roller</hi>
            <Dice
                diceNumber={ this.state.diceNumber }
                diceRoll={ this.diceRoll}
                />
            <Log diceLog={ this.state.diceLog } />
        </>

        )
    }
}

export default App