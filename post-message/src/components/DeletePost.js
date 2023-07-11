import axios from 'axios';
function DeletePost(props){
    console.log(props.postId)

const delteHandler =()=>{
    axios.delete(`http://localhost:2000/${props.postId}`)
}
    
    return (
        <button onClick={delteHandler}>delete</button>
    )
 }
 export default DeletePost