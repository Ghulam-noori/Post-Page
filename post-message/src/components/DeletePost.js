import axios from 'axios';
function DeletePost(props){
    console.log(props.postId)
    axios.delete(`http://localhost:2000/${props.postId}`)
    return (
        <button>delete</button>
    )
 }
 export default DeletePost