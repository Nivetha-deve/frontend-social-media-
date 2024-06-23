/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Post = ({ 
  userName,
  image,
  caption,
  likes,
  deleteAPost = () => undefined,
  id,
  profilePic, 
}) => {
  
  const localUser = JSON.parse(localStorage.getItem("user"));
  
  return (
    <div className="card mb-3" style={{ flexShrink: 0}}>
      <img src={image}
      style={{height:300, 
      objectFit: "contain"}}
      className="card-img-top" alt={caption} />
      <div className="card-body">
        <div className='row'>
          <img className='col-4' style={{ borderRadius: 50, objectFit: "contain" }}
          src={profilePic} 
          alt={userName}
           />
           <h5 className='col-8 card-title'>{userName}</h5>
        </div>
        <p className="card-text"
        style={{
          maxWidth:"100%",
          whiteSpace: "nowrap",
          textOverflow:"ellipsis",
          overflow:"hidden",
        }}
        >{caption}</p>
        <p className="card-text">
          <small className="text-muted">{likes} likes</small>
        </p>
        {localUser.email === userName && (      
          <i role='button'
        className="fa-solid fa-trash fa-2x" 
        onClick={() =>deleteAPost(id)}></i>
        )}
        {localUser.email !== userName && (
          <i className="fa-solid fa-heart"></i>
        )}
      </div>
    </div>
  );
}

Post.propTypes = {
    userName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    deleteAPost:PropTypes.func,
    id:PropTypes.string.isRequired,
    profilePic:PropTypes.string,
};

  
  const PostList = ({postsData = [], deleteAPost = () => undefined }) => {
    return (
      <div className="container">
        <div className='row' style={{flexWrap: "wrap"}}>
          {postsData.map((post, index) => (
            <div key={index} className="col-md-6 col-lg-4" style={{flexShrink: 0}}>
              <Post 
              userName={post.userName}
              image={post.image}
              caption={post.caption}
              likes={post.likes}
              deleteAPost={deleteAPost}
              id={post.id}
              profilePic={post.profilePic}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default PostList;