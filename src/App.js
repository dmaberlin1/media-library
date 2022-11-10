
import './App.css';
import {useState} from "react";
import PostForm from "./Components/PostForm/PostForm";
import Header from "./Components/Header/Header";

function App() {

  const [postsBooks, setPostsBooks] = useState({title:'',author:'',description:''});

  const [postsFilms, setPostsFilms] = useState({title: '', castList: '', duration: '', description: ''});
  const [postsMusic, setPostsMusic] = useState({title:'',author:'',duration:'',description:''});

  const [index, setIndex] = useState(0);

  const createPostBooks=(newPostBook)=>{
    setPostsBooks([...postsBooks,newPostBook])
  }

  const createPostFilms=(newPostFilm)=>{
    setPostsFilms([...postsFilms,newPostFilm])
  }

  const createPostMusic=(newPostMusic)=>{
    setPostsMusic([...postsMusic,newPostMusic])
  }

  return (
    <div className="App">
      <Header setIndex={setIndex}></Header>
      <PostForm createPostBooks={createPostBooks} createPostMusic={createPostMusic} createPostFilms={createPostFilms} index={index}></PostForm>
    </div>
  );
}

export default App;
