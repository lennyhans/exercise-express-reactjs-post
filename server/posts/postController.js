const PostRepository = require('./postRepository');

class PostController{

    /**
     * 
     * @param {PostRepository} postRespository 
     */
    constructor( postRespository){
        this.repository = postRespository;
    }

    Get(req, res, next){
        let postList = [];
        if(req.params.id !== null || req.params.id !== undefined){
            const postID = parseInt(req.params.id, 10);
            postList = this.repository.Get(postID);
        }else{
            postList = this.repository.Get();
        }
        
        res.status(200).send( postList);
    }

    Put(req, res, next){
        const inputPost = req.body;
        if(inputPost === null || inputPost === undefined){
            return res.status(400).send(
                {message: "You should provide a post data"}
            );
        }
        if(inputPost.name === null || inputPost.name === undefined){
            return res.status(400).send(
                {message: "You should provide a post name"}
            );
        }

        const addedPost = this.repository.Insert(inputPost);

        if(addedPost === null)
            return res.status(500).send(
                {message: "Error adding post"}
            );
        res.status(200).send( addedPost);

    }
    Delete(req, res, next){
        if(req.params.id === null || req.params.id === undefined){
            res.status(400).send(
                {message: "You should provide an Id to delete a post"}
            );
            return;
        }

        const postID = parseInt(req.params.id, 10);
        const deletedPost = this.repository.Delete(postID);

        if(deletedPost === null)
            return res.status(500).send(
                {message: "Error deleting post"}
            );
        res.status(200).send( deletedPost);
    }
}

module.exports = PostController;