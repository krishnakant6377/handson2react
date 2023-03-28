// const { Component } = require {"react"};
import React, { Component } from "react"
import './App.css'

class Input extends Component {
    state = {
        name: "",
        department: "",
        rating: "",
        data: []
    }

    handlechange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    handlesubmit = (e) => {
        const dataobj = {
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating
        }

        const arr = this.state.data;
        arr.push(dataobj)
        this.setState({ [this.state.data]: arr })

    }
    render() {
        return (
            <>

                <div className='chow'>
                    <form>
                        <label >
                            Name:  <input type='text' name="name" onChange={this.handlechange} />
                        </label>
                        <br></br>

                        <label>
                            Department: <input type='text' name="department" onChange={this.handlechange} />
                        </label>

                        <br></br>
                        <label >
                            Rating:    <input type='number' name="rating" onChange={this.handlechange} />
                        </label>
                        <br></br>


                        <button type="button" onClick={this.handlesubmit}>Submit</button>

                    </form>
                      <div className="hii" > {this.state.data.map((item, index) => {
                    return (
                       
                            
                        <h3 key={index}> Name:{item.name}  Department: {item.department}  Rating:{item.rating}</h3>
                        
                    )
                })}</div>

                </div>
               
            </>


        )
    }


}
export default Input; 