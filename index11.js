class JSXDemo extends React.Component{
   render() {
    return(
        <div>
        <h1>My Image</h1>
        <img src="https://media.istockphoto.com/id/1297984098/photo/famous-ancient-hawa-mahal-palace-of-winds-in-jaipur-rajasthan-state-india.jpg?s=2048x2048&w=is&k=20&c=fO6qmXeOBM8iZildFUeHoKJDE0BBDLA7XvxIJ5PcqJ8="/>
        </div>
    )
        
    };
   }

ReactDOM.render(<JSXDemo/>, document.getElementById('root'));