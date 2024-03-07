import { useState } from "react";
import  "./App.css";

export default function Lottery(){

    const [lotteryNum, setLotteryNum] = useState("click to get")


    const newRandomNum = () => {
        const randomLottery = Math.floor(Math.random() *1000)+1;
        setLotteryNum(randomLottery); 
    };

    let sum = (lotteryNum) => {
        let ticketSum = 0;
        while(lotteryNum > 0){
        let digit = lotteryNum % 10;
        ticketSum += digit;
        lotteryNum= Math.floor(lotteryNum/10);
        }
        return ticketSum;
    };
    const ticketSum = sum(lotteryNum);
    console.log(ticketSum);

    let luck = (ticketSum) =>  {
        
        ticketSum == 15 ?  (alert("Congratulations, you are the winner! ") ) 
    : 
       ( alert("Sorry, you are loss!")
       )}


    return(
        <div className="flex">
    <h2 style={{color: "pink"}}>Lottery</h2>
    <h3>Lottery Ticket =  {lotteryNum};</h3>
    <button onClick={newRandomNum}>Get new ticket</button>
    <button onClick={() => luck(ticketSum)}>chick luck</button>
   
        </div>
    );
}