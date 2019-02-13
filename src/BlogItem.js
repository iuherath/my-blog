import React, {Component} from 'react'
import {FaEdit, FaTrash, FaSave} from 'react-icons/fa'

class Blogitem extends Component{
    constructor(props){
        super(props)
        this.state = {
            editing: false
        }
    }

    edit = ()=>{
        this.setState({
            editing: true
        })
    }

    save = (e)=>{
        e.preventDefault()
        alert(`Blog title ${this._newText.value}`)
        alert(`Blog content ${this._newTextContent.value}`)
        
    }

    remove = (e)=>{
        alert("removed")
    }

    renderBlogItemEdit = ()=> {
        return(
            <div className="blog-item">
                <form>
                    <div className="input-text">
                        <label>Blog Title</label>
                        <input type='text' ref={input =>this._newText = input}></input>
                    </div>
                    <div className="input-text">
                        <label>Blog content</label>
                        <textarea ref={content=> this._newTextContent = content}></textarea>    
                    </div>
                    <button onClick={this.save}><FaSave />Save</button>
                </form>
        </div> 
        )
    }

    renderBlogItems(){
        return(
            <div className="blog-item">
                <h1 className="blog-title">{this.props.title}</h1>
                <p className="blog-content">{this.props.content}</p>
                <div className="blog-links">
                    <a href="#" onClick={this.edit}><FaEdit /> Edit</a>
                    <a href="#" onClick={this.remove}><FaTrash /> Remove</a>
                </div>
            </div>
        )
    }

    render(){
        return(
            this.state.editing ? this.renderBlogItemEdit() : this.renderBlogItems()
        )
    }
}

export default Blogitem