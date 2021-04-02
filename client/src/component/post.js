import React from 'react';
import PostElement from './postElement';

class PostApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name:"",
            description : "",
            postList : []
        };

        this.submitOnClick = this.submitOnClick.bind(this);
        this.renderPostList = this.renderPostList.bind(this);
        this.deleteAction = this.deleteAction.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        

    }

    componentDidMount(){
        this.props.service.get().then( r => {
            this.setState({
                postList : r
            });
        }).catch(e => console.log("Error ",e));
        
    }

    handleChangeName(ev) {    
        this.setState({name: ev.target.value});  
    }
    handleChangeDescription(ev){
        this.setState({description: ev.target.value});
    }
    submitOnClick(service){
        //e.preventDefault();
        service.preventDefault();
        this.props.service.add({ name: this.state.name, description : this.state.description})
            .then( r => {
                let currentPosts = this.state.postList;
                currentPosts.push(r);
                this.setState({name : "", description : "", postList : currentPosts});
            })
        
        //console.log(service);
        
    }

    renderPostList(postList){
        //this.setState( () => { postList = {}})
        if(this.state.postList === undefined || this.state.postList.length === 0)
            return <h2>No posts</h2>;
        return this.state.postList.map((el) => {
            return <PostElement key={el.id} {...el} deleteAction={this.deleteAction.bind(this, el)}></PostElement>;
        })
    }

    deleteAction({id, name}, target){
        console.log(id);
        this.props.service.delete(id).then( r =>{
            let index = 0;
            const currentList = this.state.postList;
            let toDelete = currentList.filter( (p, i) => { 
                if(p.id === id){
                    index = i;
                }
                return p.id === id;
            });
            
            if(toDelete.length > 0)
            {
                let deletedItem = currentList.splice(index, 1);
                deletedItem.indexOf("")
                this.setState({postList : currentList});
            }
        });
    }

    render(props){
        //const serviceAPI = this.props.service;
        //this.renderPostList(serviceAPI)
        return (
            <div>
            {
            // TABLA DE REGISTROS
            }
            <h1>POST LIST</h1>
            <div className="post-container">
                {this.renderPostList()}
            </div>
            
            {
            // BOTONERA
            }
            <hr/>
            <div>
             <form onSubmit={this.submitOnClick}>
                 <input type="text" name="" required placeholder="name" onChange={this.handleChangeName} value={this.state.name}/>
                 <input type="text" name="" placeholder="description" onChange={this.handleChangeDescription} value={this.state.description}/>
                 <button type="submit" >ADD</button>
            </form>
            </div>
            </div>
        )
    }
}

export default PostApp;