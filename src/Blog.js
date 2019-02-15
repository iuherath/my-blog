import React, {Component} from 'react'
import Blogitem from './BlogItem';

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

    nextId = ()=>{
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
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

    eachBlogPosts = (blogItem)=>{
        return(
            <Blogitem index={blogItem.id}
                      key={blogItem.id}
                      title={blogItem.blogTitle}
                      content={blogItem.blogContent}
                      onChange={this.update}>
                      </Blogitem>
        )
    }

    render(){
        return(
            <div className="blog-container">
               {this.state.blogPosts.map(this.eachBlogPosts)}
            </div>
        )
    }
}

export default Blog
