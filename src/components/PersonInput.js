import React from "react"
import axios from "axios"

class PersonInput extends React.Component{
    state={
        name:'',
        showName:false
    }
    handleChange=(e)=>{
        e.preventDefault()
        this.setState({
            name:e.target.value
        })
    }
    handleAddName=()=>{
        
        this.setState({
            name:[...this.state.name,""]
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.setState({
            showName:true
        })
        const user={
            name:this.state.name
        }
        axios.post(`https://jsonplaceholder.typicode.com/users`,{user})
        .then((res)=>{
            console.log(res)
            console.log(res.data)
        })
    }
    
    render(){
        return(<div><form onSubmit={this.handleSubmit} method="post">
            <label>
                Person Name : <input type="text" name="name" onChange={this.handleChange}></input>
                <button onClick={()=>this.handleAddName()} type="submit">Add</button>
            </label>
        </form>
        {/* {this.state.showName && <p>{this.state.name}</p>} */}
        </div>
             )
    }
}
export default PersonInput