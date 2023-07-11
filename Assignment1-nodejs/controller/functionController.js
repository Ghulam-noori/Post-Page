const Post = require('../model/article')

const homePage = (req,res)=>{
	
    Post.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}

// const postCreate = (req, res) => {

// const post = new Post(req.body);
// post.save()
//     .then((result) => {
//         res.send("result");
//     })
//     .catch((err) => console.log(err));
// }
const postCreate = async(req,res)=>{
    const Text=req.body
    console.log(Text)
    const post= new Post (Text)
    try{
        // await post.toJSON;
        await post.save();
        res.send({
            message: "Question added successfully",
            data: Text,
        success: true,
        })
    }
    catch(err) {
        console.log(err)
    }
}
const deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
    .then(() => {
        res.send('deleted')
    })
    .catch(err =>{ console.log(err)}); 
}

module.exports = {
    homePage,
    postCreate,
    deletePost
}












