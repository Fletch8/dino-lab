import './App.css';

function App() {
  // name and store vars b4 return statement
  const name = "Fletcher";

  const post = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property!",
    commnets: ["First!", "Great post", "Hire this author now!"]
  }

  return (
    <div className="App">
      {/* can use varibles with curly brackets */}
      <p>{name}</p>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.body}</p>
      <h2>Comments:</h2>
      <p>{post.commnets[0]}</p>

    </div>
  );
}

export default App;
