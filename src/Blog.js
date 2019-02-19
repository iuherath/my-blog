import React, {Component} from 'react'
import Blogitem from './BlogItem';
import {FaPlus} from 'react-icons/fa'

class Blog extends Component{
    constructor(props){
        super(props)
        this.state = {
            blogPosts: [
                {
                    id: this.nextId(),
                    blogTitle: "Blog title",
                    blogContent: "Test Blog cntent"
                },
                {
                    id: this.nextId(),
                    blogTitle: "Blog title2",
                    blogContent: "Test Blog cntent Test Blog cntent Test Blog cntent Test Blog cntent"
                },
                {
                    id: this.nextId(),
                    blogTitle: "Blog title3",
                    blogContent: "Test Blog cntent Test Blog cntent Test Blog cntent Test Blog cntent"
                }
            ]
        }
    }

    componentWillMount(){
        if(this.props.count){
            fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
            .then(response => response.json())
            .then(json => json[0]
            .split('. ')
            .forEach(sentense=> this.add(sentense.substring(0, 25))))
        }
    }

    nextId = ()=>{
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    add = (blogTitle, blogContent)=>{
        this.setState(prevState =>({
            blogPosts: [
                {
                    id: this.nextId(),
                    blogTitle: blogTitle,
                    blogContent: blogContent
                },
                ...prevState.blogPosts
            ]
        }))
    }

    update = (newTitle, newContent, id)=>{
        console.log(`update blogitem at ${id} Title: ${newTitle} Content: ${newContent}`)
        
        this.setState(prevState => ({
            blogPosts: prevState.blogPosts.map(
                blogitem => blogitem.id !== id ? blogitem : {...blogitem, blogTitle: newTitle, blogContent: newContent}
            )
        }
        ))

        this.state.blogPosts.map(blog => (
            console.log(blog)
        ))
    }

    remove = (id)=>{
        console.log(`Removing items at ${id}`)
        this.setState(prevState =>({
            blogPosts: prevState.blogPosts.filter(blogitem => (blogitem.id !== id))
        }))
    }

    eachBlogPosts = (blogItem)=>{
        return(
            <Blogitem index={blogItem.id}
                      key={blogItem.id}
                      title={blogItem.blogTitle}
                      content={blogItem.blogContent}
                      onChange={this.update}
                      onRemove={this.remove}>
                      </Blogitem>
        )
    }

    render(){
        return(
            <React.Fragment>
            <div className="blog-container">
               {this.state.blogPosts.map(this.eachBlogPosts)}
            </div>
            <div className="new-blog-post">
               <button id="add" onClick={this.add.bind(null, "Blog Post Title", "Blog content")}><FaPlus /></button>
            </div>
            </React.Fragment>
        )
    }
}

export default Blog
