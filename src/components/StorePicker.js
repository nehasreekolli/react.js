import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component{
    //constructor is caleld prior to anything is called
    //we are not using construtor because as we have lot of methods, we have to bind each method in the construtor 
    //same as goToStore, which becomes tidiuous
    // constructor(){
    //     //super must be called to access the parent class as constructor is sub class 
    //     super();
    //     //we are binding goToStore. When we console log this in goToStore method, we get this refering to Store Picker
    //     //We are not binding then this returns as undefined
    //     this.goToStore = this.goToStore.bind(this);
    // }
    myInput = React.createRef();

    myInput = React.createRef();

    //If we wnat to access this in custom method, we have to use as
    //goToStore = (event => {}(arrow function))(to break it down: goToStore is the property same as myInput in top line)
    //otherwise if you want to use as goToStore(event){}
    //we have to use constructor function and bind methos in that
    goToStore = (event) => {
        event.preventDefault();//Prevents default loading of the browser(url).i.e stop form from submitting
        // console.log("Going to store");
        //get the text from input
        console.log(this);
        
        //change the page to /store/whatever-they-entered
    }
    render(){
        return (            
        <form className="store-selector" onSubmit={this.goToStore}>
        {/* gotoStore is called when form is submitted. If we use goToStore() then function is automaticcaly
        called when page is loaded without waiting for onSubmit to happen */}
            <h2>Please enter a Store</h2>
            <input type="text" required ref={this.myInput} placeholder="Store Name" defaultValue={ getFunName()}/>
            {/* getFunName is calling a function while page loads, so () is used*/}
            <button type="submit">Visit Store</button>
        </form>
         /*<React.Fragment>
            <p>Seafood stores</p>
            <form className="store-selector">
                <h2>Please enter a Store</h2>
            </form>  
            </React.Fragment>
            JSX can render only one parent element, no sibling can be rendered, to render multiple  we can use 
            React.Fragment  tags or Fragment tag
            and comment should'nt be a first element - it gives error
        */
        )     
    }
}

export default StorePicker;
