import React, {Component} from 'react'
class Game2 extends Component{
    ;
        state={
          score:10,
          gameover:false  
        }
    
    render(){
        return(
            <div >
                    <h1>Your score is: {this.state.score}</h1>


            </div>
        )
    }
}
export default Game2;