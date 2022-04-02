import Card from './commentCard/CommentCard'
import fetchComments from '../../api/commentsApi'
import {useEffect,useState} from 'react'

const main = {
    display: "flex",
    flexWrap: "wrap",
  };

function Comment() {
   const [comments, setComments] = useState([]);
   async function fetchData() {
    const response = await fetchComments()
    console.log('response', response)
    setComments(response)
  }
      useEffect(() => {
          fetchData()
      }, []);
      const list = comments.map((item)=>{
          return (<Card key={item.id} name={item.name} email={item.email} body={item.body}/> )
      })
    return ( <div style={main}>
        {list} 
        </div>
    );
}

export default Comment;