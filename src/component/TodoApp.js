import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {

    state={                                                         //defining the state
        input:"",                                                   //here the input will be stored           
        array:[],
    }

    handleChange=(event)=>{
        this.setState({
            input:event.target.value
        });

        
    }

    storeItems= event =>{
        event.preventDefault();
        
        const {input}=this.state;
    
        
        this.setState({
           array:[...this.state.array,input],
           input:""
       });
    }

    deleteItem=(index)=>{
        const allitems=this.state.array

        allitems.splice(index,1);
        this.setState({
            array:allitems
        })
    }

    render() {

        const {input,array}=this.state;
        return (
            <div className="todoapp">
                <form className="input-section">
                <h1>TodoApp</h1>
                    <input onChange={this.handleChange} value={input} placeholder="Type here..." type="text"/>
                    <button onClick={this.storeItems}>Submit</button>
                <ul>
                    {/* <li>item <i className="fas fa-trash-alt"></i></li> */}
              
                    {array.map((value,index)=>(
                        <li key={index}>{value} <i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i></li>
                    ))}
                </ul>
                </form>

            </div>
        )
    }
}
