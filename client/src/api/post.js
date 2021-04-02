class PostAPI {
    constructor( apiEndpoint ){
        this.url = apiEndpoint;
    }

    async get(){
        try {
            return await this.doRequest({ method : "GET" });
            
        }
        catch(err){
            return { message : `${err}` };
        }
    }
    
    async delete(id){
        try {
            return await this.doRequest({ method : "DELETE", path : id });
        }
        catch(err){
            return { message : `${err}` };
        }
    }
    
    async add(post){
        try {

            return await this.doRequest(
                { 
                    method : "PUT",
                    data : post,
                    isJson : true 
                });
        }
        catch(err){
            return { message : `${err}` };
        }
    }

    async doRequest( requestOptions ){
        const headers = requestOptions.isJson ? {
            'Content-Type': 'application/json'
            }:
            null;

        const path = requestOptions.path !== null || 
            requestOptions.path !== undefined ?
                requestOptions.path :
                null;

        const body = requestOptions.data !== undefined ||
            requestOptions.data !== null ? 
                requestOptions.data :
                null;

        try {
            const response = await fetch(`${this.url}/post${(path ? "/" + path : "")}`,
            {
                method: requestOptions.method, // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: headers !== null ? headers : {},
                body: body !== null ? JSON.stringify(body) : {}
            });

            return await response.json();
        }
        catch(err){
            return { message : `${err}` };
        }
    }
}

module.exports = PostAPI