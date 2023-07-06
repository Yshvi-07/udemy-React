function getNo(){
    return Math.floor(Math.random()*10)+1;
}




class NumberPic extends React.Component{
    render() {
        const n=getNo();
     return(
         <div>
         <h1>My Cuurent number is : {n}</h1>
           <p>{n===7 ? 'Congrats' : 'Better Luck Next Time'}</p>
           {
           n===7 &&
            <img src="https://media.tenor.com/AHkmrzYNgYEAAAAC/congrats-yellow-confetti-around-congrats-in-pink-bubble-letters.gif"></img> 
           
           }
         </div>
     )
 
     };
    }
 
 ReactDOM.render(<NumberPic/>, document.getElementById('root'));