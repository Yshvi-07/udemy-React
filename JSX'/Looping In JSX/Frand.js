class Frand extends React.Component {
	render() {
		const{ s1,hobbies}=this.props;
 
        return(
            <div>
                <h1>{s1}</h1>
                <ul>
                    {hobbies.map(h=><li>{h}</li>)}
                </ul>
            </div>
        )

       
				
			
		
	}
}