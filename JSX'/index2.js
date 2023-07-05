function getMood(){
    const moods = ['Angry','Sad','Hugry','Silly','Happy'];
    return moods[Math.floor(Math.random()*moods.length)];
}




class JSXDemo extends React.Component{
    render() {
     return(
         <div>
         <h1>My Cuurent mood is : {getMood()}</h1>
        
         </div>
     )
 
     };
    }
 
 ReactDOM.render(<JSXDemo/>, document.getElementById('root'));
