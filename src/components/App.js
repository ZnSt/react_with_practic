import "./App.css";
import { PostList } from "./PostList/PostList";
import data from "../assets/data.json";

function App() {
  return (
    <div>
      <PostList users={data} title="Hello World" />
    </div>
  );
}

export default App;
