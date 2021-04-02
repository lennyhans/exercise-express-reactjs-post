
/**
 * Abstaction of posssible repositories, it needs a repository implementation
 */
class PostRepository {
    constructor(repositoryImplementation){
        if(repositoryImplementation === null || repositoryImplementation === undefined)
            throw Error("There should be a repository");
        this.repository = repositoryImplementation; 
    }

    /**
     * 
     * @param {integer} id 
     * @return {Array<PostModel>}
     */
    Get(id){
        return this.repository.Get(id);
    }

    /**
     * 
     * @param {PostModel} post 
     * @return {integer}
     */

    Insert(post){
        return this.repository.Insert(post);
    }

    /**
     * 
     * @param {PostModel} post 
     */
    Edit(post){
        return this.repository.Edit(post);
    }

    /**
     * 
     * @param {integer} id 
     * @return {boolean}
     */
    Delete(id){
        return this.repository.Delete(id);
    }
    
}

module.exports = PostRepository;