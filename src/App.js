import './App.css';
import React, { Component} from 'react';
import Comment from './Comment'
import Author from './Author'

class App extends Component {
  //name and store variables before return statements
  state = {
    title: "Dinosaurs are awesome",
    author: ["Stealthy Stegosaurus", "Tiny Trex", "iguanadon ivory"],
    body: "Check out this body property!",
    comments: ["First!", "Great post", "Hire this author now!"]
  }

  editBody = ()=> {
    let newBody = prompt('What should the new body say?')
    if (newBody != null){
      this.setState({
        body: newBody
      })

    }
  }

render(){
  const comments = this.state.comments.map((comment, index)=> (<Comment content = {comment} key= {index}/>))
  const authors = this.state.author.map((author, index)=> (<Author content={author} key={index}/>))
  return (
    <div className="App">
      {/* can use varaibales with curly brackets */}
      <h1>{this.state.title}</h1> 
      <p>{authors}</p>
      <p>{this.state.body}</p>
      <h3>Comments:</h3>
      <p>{comments}</p>
      <button onClick = {this.editBody}>Edit Body</button>
      
    </div>
  );
}
}
export default App;