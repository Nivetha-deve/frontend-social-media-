const baseUrl = import.meta.env.VITE_BE_URL;

const getToken = () => {
  return localStorage.getItem("token");
}

//APIs related to Users 
const userLogin = async (data) => {
    const response = await fetch(`${baseUrl}/api/auth/login`, {
      body: JSON.stringify(data),
      method:"POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    });
    return await response.json();
};

const userRegister = async (data) => {
    const response = await fetch(`${baseUrl}/api/auth/register`, {
        body: JSON.stringify(data),
        method:"POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });
    return await response.json();
};

const updateUser = async (userEmail,data) => {
  const response = await fetch (`${baseUrl}/api/users/${userEmail}`, {
       body:JSON.stringify(data),
       method: "PUT",
       headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization : getToken(),
       },
  });
  if (response.status !== 200 && response.status !== 204){
    throw new Error("Unauthorizes Entry")
  }
  return await response.json();
};

//APIs related to posts 
const createPost = async (postData) => {
  const response = await fetch(`${baseUrl}/api/posts`, {
    body:JSON.stringify(postData),
    method:"POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
       Authorization: getToken(),
    },
  });
  if(response.status !==200 && response.status !==201) {
    throw new Error("Unauthorized Entry");
  }
  return await response.json();
};

//Get all the logged in unser posts

const getAllPosts = async () => {
  const response = await fetch(`${baseUrl}/api/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: getToken(),
    },
  });
  if(response.status !==200) {
    throw new Error("Something went wrong, plese try again later");
  }
  return await response.json();
};

const getOtherPost = async () => {
  const response = await fetch(`${baseUrl}/api/posts/other-posts`, {
    method:"GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: getToken(),
    },
  });
  if(response.status !== 200) {
    throw new Error("Something went wrong, please try again later");
  }
  return await response.json();
};

const deletePost = async (postId) => {
  const response = await fetch (`${baseUrl}/api/posts/${postId}`,{
    method:"DELETE",
  });
  if(response.status !== 200) {
    throw new Error("Something went wrong, please try again");
  }
  return response.json();
};

export {userLogin,userRegister,updateUser,createPost,getAllPosts,deletePost,getOtherPost};