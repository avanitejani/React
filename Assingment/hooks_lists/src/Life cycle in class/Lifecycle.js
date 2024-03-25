import React, { Component } from 'react'

export default class Lifecycle extends Component {

    // 1. intioal variayable defain krva use thay 
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log('this is constructor');
        
    }

    // 2. static ma getDerivedStateFromProps ma props and state ma props  vlaue pass krva and state value set krva use thay.  and compolsory return katavu padse null rakhine pn.
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        
        return { count: props.site }
    }

    // 4. componentDidMount no use api call krva thay 
    componentDidMount() {
        console.log('this is componentDidMount');
        


    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');

        
    }

    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate');
        
        
    }

    componentDidUpdate(oldProps, oldState) {
        console.log('componentDidUpdate');
        
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
        

    }




    // 2 render html ne bRAUSER MA RENDER KRVA USE TAHY
    render() {
      console.log('rendering html');
      
    return (
        <>
            
            
        </>
    )
  }
}



