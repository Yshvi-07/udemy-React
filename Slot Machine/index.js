class App extends React.Component {
	render() {
	        return (
                <div>
                <h1>SLOT MACHINE!</h1>
                <Machine 
                s1="X"
                s2="X"
                s3="X"
                
                
                />
                </div>
            )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))