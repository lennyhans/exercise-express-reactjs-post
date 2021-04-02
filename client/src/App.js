///import logo from './logo.svg';
import './App.css';
import './component/postElement';
import PostApp from './component/post';
import PostAPI from './api/post';


const postAPI = new PostAPI("http://localhost:3000");

function App() {
  
  
  

  return (
    
    <div className="App">
      <header className="App-header">
        <PostApp service={postAPI}></PostApp>
      </header>
    </div>
  );
}

export default App;
