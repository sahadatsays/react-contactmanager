import React, { Component } from 'react';

class Test extends Component {
     constructor(props) {
          super(props);
          this.state = {
               post: {
                    id: '',
                    title: '',
                    body: ''
               },
               posts: []
          }
     }
     componentDidMount() {
          fetch('https://jsonplaceholder.typicode.com/posts')
               .then(response => response.json())
               .then(data => this.setState({ posts: data }));
          // .then(data => {
          //      data.map(post => console.log(post))
          // })
     }
     render() {
          const { posts } = this.state;
          return (
               <div className="card card-body">
                    <h2>Get Blog Requests</h2>
                    {posts.map(post => (
                         <div className="alert alert-success">
                              <h4>{post.title}</h4>
                              <p className="lead">{post.body}</p>
                         </div>
                    ))}

               </div>
          )
     }
}

export default Test;