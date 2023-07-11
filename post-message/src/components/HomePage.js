import axios from 'axios';
import React from 'react';
import {useParams} from 'react-router-dom'
import DeletePost from './DeletePost'





const HomePage= ({data,error })=>{


    return(
        <div> 
            <p>{error}</p>
            <h1>Hello </h1>
            {
                data&& data.map((response)=>{
                    return(
                        <div key={response._id}>
                           
                             <p>{response.message}</p>
                            <DeletePost postId={response._id}/>
                             
                        </div>
                        
                       
                    )

                })
            }
        </div>
    )
}
export default HomePage;