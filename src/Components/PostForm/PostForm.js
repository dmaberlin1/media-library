import React, {useState} from 'react';
import styles from './PostForm.module.css'
import uuid from "react-uuid";
import Button from "../UI/button/Button";
import Input from "../UI/Input/Input";

function id() {
    return uuid()
}



const PostForm = ({createPostBooks,createPostFilms,createPostMusic,index}) => {

    const [dataBooks, setDataBooks] = useState({title:'',author:'',description:''});
    const [dataFilms, setDataFilms] = useState({title:'',castList:'',duration:'',description:''});
    const [dataMusic, setDataMusic] = useState({title:'',author:'',duration:'',description:''});

   const addNewBook=(e)=>{
      e.preventDefault()

       const newPostBook={
          ...dataBooks,id:id()
       }
       setDataBooks({title:'',author:'',description:''})
       createPostBooks(newPostBook)
   }

   const addNewFilm=(e)=>{
       e.preventDefault()
       const newPostFilm={
           ...dataFilms,id:id()
       }
       setDataFilms({title:'',castList:'',duration:'',description:''})
       createPostFilms(newPostFilm)
   }

   const addNewMusic=(e)=>{
       e.preventDefault()
       const newPostMusic={
           ...dataMusic,id:id()
       }
       setDataMusic({title:'',author:'',duration:'',description:''})
       createPostMusic(newPostMusic)
   }

    const formBook=()=>{
        return(
          <>
              <form action="">
                  <Input type="text" placeholder={'название'} value={dataBooks.title} onChange={(e)=>setDataBooks({...dataBooks,title: e.target.value})}/>
                  <Input type="text" placeholder={'имя автора'} value={dataBooks.author} onChange={(e)=>setDataBooks({...dataBooks,author: e.target.value})}/>
                  <Input type="text" placeholder={'описание'} value={dataBooks.description} onChange={(e)=>setDataBooks({...dataBooks,description:e.target.value})}/>
                  <Button onClick={addNewBook}>add Book</Button>
              </form>
          </>
        )
    }


    const formFilms=()=>{
       return(
         <>
             <form action="">
                 <Input type="text" placeholder={'Название'} value={dataFilms.title} onChange={(e)=>setDataFilms({...dataFilms,title:e.target.value})} />
                 <Input type="text" placeholder={'список актёров'} value={dataFilms.castList} onChange={(e)=>setDataFilms({...dataFilms,castList :e.target.value})} />
                 <Input type="text" placeholder={'длительность'} value={dataFilms.duration} onChange={(e)=>setDataFilms({...dataFilms,duration:e.target.value})} />
                 <Input type="text" placeholder={'описание'} value={dataFilms.description} onChange={(e)=>setDataFilms({...dataFilms,description:e.target.value})} />
                 <Button onClick={addNewFilm}>add Film</Button>
             </form>
       </>
       )
    }

    const formMusic = () => {
      return(
        <>
            <form action="">
                <Input placeholder={'название'} type="text" value={dataMusic.title} onChange={e=>setDataMusic({...dataMusic,title: e.target.value})} />
                <Input placeholder={'имя автора'} type="text" value={dataMusic.author} onChange={e=>setDataMusic({...dataMusic,author: e.target.value})} />
                <Input type="text" placeholder={'длительность'} value={dataMusic.duration} onChange={e=>setDataMusic({...dataMusic,duration: e.target.value})} />
                <Input type="text" placeholder={'описание'} value={dataMusic.description} onChange={e=>setDataMusic({...dataMusic,description: e.target.value})} />
                <Button onClick={addNewMusic}>add Music</Button>
            </form>
        </>
      )
    }

    function showForm(index) {
            switch (index){
                case 0 :
                    return formBook()
                case 1 :
                    return formFilms()
                case 2:
                    return formMusic()
                default:
            }
    }

    return (
      <div>
          {showForm(index)}

      </div>
    );
};

export default PostForm;
