import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { name:"" }
    }
 componentDidMount=()=>{
    setInterval(() => {
        this.setState({ name: 'jai' });
        
      }, 2000);
 }
    render() {
        //  console.log("parent")
        return ( 
            <>
            <h1 style={{color:"red"}}>{this.state.name}</h1>
            <ChildComponent />
            </>
         );
    }
}
 
export default ParentComponent;