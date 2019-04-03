import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import appRoutes from './appRoutes';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('App',props);
	}

	render() {
		return <BrowserRouter>
	      <Route component={AppExtended} />
	    </BrowserRouter>;
	}
}

class AppExtended extends Component {

	constructor(props) {
		super(props);
		console.log('AppExtended',props);
		this.state = {
			id:0,
			name: 'none',
			component: ''
		}
	}

	openComponent(data) {
		this.props.history.replace('/');
		this.setState(data);
	}
  
	render() {
		let ele;
		if (this.state.id > 0) {
			ele = <this.state.component />;
		}
		return (
			<>
			<div className="wrapper">
				{
					appRoutes.map((data)=>{
						return <div key={data.id} onClick={()=> this.openComponent(data)} className="box">{data.name}</div>
					})
				}
			</div>
			<hr/>	
			{ele}
			</>
		);
	}
}

export default App;
