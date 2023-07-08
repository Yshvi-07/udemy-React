class Frand extends React.Component {
	render() {
		const{ s1,hobbies}=this.props;
 
        return(
            <div className="Frand">
                <label htmlFor="textInput" />
                <h1>{s1}</h1>
                <ul style={{fontSize:"50px" ,backgroundColor:"purple"}}>
                    {hobbies.map(h=><li>{h}</li>)}
                </ul>
            </div>
        )

       
				
			
		
	}
}