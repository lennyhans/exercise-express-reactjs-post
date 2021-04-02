
const PostElement = ({name, description, deleteAction}) => (
    <div className="post-item">
        <label>{name}</label>
        <p>{description}</p>
        <div><button onClick={ deleteAction }>DELETE</button></div>
    </div>
)

export default PostElement;