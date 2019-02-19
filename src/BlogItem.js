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
        // alert(`Blog title ${this._newText.value}`)
        // alert(`Blog content ${this._newTextContent.value}`)
        this.props.onChange(this._newTextTitle.value, this._newTextContent.value, this.props.index)
        this.setState({
            editing: false
        }
        )
        
    }

    remove = (e)=>{
        this.props.onRemove(this.props.index)
    }

    renderBlogItemEdit = ()=> {
        return(
            <div className="blog-item">
                <form onSubmit={this.save}>
                    <div className="input-text">
                        <label>Blog Title</label>
                        <input type='text' ref={input =>this._newTextTitle = input}></input>
                    </div>
                    <div className="input-text">
                        <label>Blog content</label>
                        <textarea ref={content=> this._newTextContent = content}></textarea>    
                    </div>
                    <button id="save"><FaSave />Save</button>
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
                    <button id="edit" onClick={this.edit}><FaEdit /> Edit</button>
                    <button id="remove" onClick={this.remove}><FaTrash /> Remove</button>
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