
import { useState } from 'react';
import './App.css'

function App(){
        // OBJECTS in useState
  let [moves, SetMoves] = useState({red: 0,yellow: 0, green: 0, purple: 0});

  function updateGreen(){
      SetMoves( (prevMoves) => {
        return {
          ...prevMoves, green: prevMoves.green +1
        };
      }
        );
  };

  let updateYellow= () => {
    SetMoves( (prevMoves)=>{
      return {...prevMoves, yellow: prevMoves.yellow+1}
    });
  };

  let updateRed = ()=> {
    moves.red += 1;
    SetMoves({...moves});
  }

  let updatePurple = ()=> {
    SetMoves({ ...moves , purple: moves.purple+1 }) 
  }

  return (
    <div className='flex'>
     <h6 >Green color = {moves.green} </h6>
     <button style={{backgroundColor: 'green'}} onClick={updateGreen}>+1</button>

     <h6>yellow color ={moves.yellow}</h6>
     <button style={{backgroundColor: 'yellow',color: "black"}} onClick={updateYellow} >+1</button>

     <h6>red color = {moves.red}</h6>
     <button onClick={updateRed} style={{backgroundColor: 'red'}}>+1</button>

     <h6>pruple color ={moves.purple}</h6>
     <button onClick={updatePurple} style={{backgroundColor: 'purple'}}>+1</button>

    </ div>
  );
}
 


export default App
