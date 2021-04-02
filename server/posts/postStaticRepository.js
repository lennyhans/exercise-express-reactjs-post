const arrayPost = []

class PostStaticRepository{
    constructor(){

    }

    Get(id){
        return [...arrayPost].sort( (a,b) => {return a.id - b.id});
    }

    Insert( post ){
        const sorted = [...arrayPost].sort( (a,b) => {return a.id - b.id})

        post.id = sorted.length > 0 ? sorted[sorted.length -1].id +1 : 1;
        arrayPost.push(post);
        return post;
    }

    Delete(array){
        return array.map(this.Delete);
    }

    Delete(id){

        let index = -1; 
        for( let i = 0, l = arrayPost.length; i < l; i++)
            if( arrayPost[i].id == id){
                index = i;
                break;
            }
        
        if(index == -1)
            return null;

        return arrayPost.splice(index,1);
    }

    Edit(post){
        // UNUSED
    }
}

module.exports = PostStaticRepository;