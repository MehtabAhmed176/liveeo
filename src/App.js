import logo from "./logo.svg";
import "./App.css";
import Comment from "./components/comments/Comment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        LiveEO
        <p>Admin</p>
        </header>{" "}
      <div className="App-comments-main">
        <Comment />
      </div>{" "}
    </div>
  );
}

export default App;
