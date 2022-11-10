import React, {useState} from 'react';
import styles from './PostForm.module.css'
import uuid from "react-uuid";
import Button from "../UI/button/Button";
import Input from "../UI/Input/Input";

function id() {
    return uuid()
}



const PostForm = () => {

    const [dataBooks, setDataBooks] = useState({title:'',author:'',description:''});
    const [dataFilms, setDataFilms] = useState({title:'',castList:'',duration:'',description:''});
    const [dataMusic, setDataMusic] = useState({title:'',author:'',duration:'',description:''});



    const formBook=()=>{
        return(
          <>
              <form action="">
                  <Input type="text" value={dataBooks.title} onChange={(e)=>setDataBooks({...dataBooks,title: e.target.value})}/>
                  <Input type="text" value={dataBooks.author} onChange={(e)=>setDataBooks({...dataBooks,author: e.target.value})}/>
                  <Input type="text" value={dataBooks.description} onChange={(e)=>setDataBooks({...dataBooks,description:e.target.value})}/>
                  <Button onClick={addNewBook}>add Book</Button>
              </form>
          </>
        )
    }


    return (
      <div>

          {formBook}
          {formFilms}
          {formMusic}

      </div>
    );
};

export default PostForm;
