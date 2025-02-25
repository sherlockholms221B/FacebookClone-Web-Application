const allPostsQuery = () => {
  const query = `*[_type == "post"] | order(_createdAt desc){
    _createdAt,
    _id,
    topic,
    audience,
    image[],
    video[],
      creatorId,
      postedBy->{
        _id,
        userName,
        profileImage,
      },
    likes,
    comments[]{
      comment,
      _key,
      createdAt,
      postedBy->{
        userName,
        profileImage,
        email,
      },
    },
  }`;

  return query;
};

const postDetailQuery = (postId) => {
  const query = `*[_type == "post" && _id == "${postId}"]{
    _id,
     topic,
       video[],
      creatorId,
    postedBy->{
      _id,
      userName,
      profileImage,
    },
    image[],
     likes,
   comments[]{
      comment,
      _key,
      createdAt,
      postedBy->{
        userName,
        profileImage,
        email,
      },
    },
  }`;
  return query;
};

const searchPostsQuery = (searchTerm) => {
  const query = `*[_type == "post" && caption match '${searchTerm}*' || topic match '${searchTerm}*'] {
    _id,
     caption,
       video[]{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      profileImage,
    },
likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      profileImage,
    },
    }
  }`;
  return query;
};
const signInUser = (email, userId) => {
  const query = `*[_type =="user" && email=='${email}'|| _id== '${userId}]`;

  return query;
};
const singleUserQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;

  return query;
};

const allUsersQuery = () => {
  const query = `*[_type == "user"]`;

  return query;
};

const userCreatedPostsQuery = (userId) => {
  const query = `*[ _type == 'post' && userId == '${userId}'] | order(_createdAt desc){
    _id,
     caption,u
       video[]{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      profileImage,
    },
 likes,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      profileImage,
      
    },
    }
  }`;

  return query;
};

const userLikedPostsQuery = (userId) => {
  const query = `*[_type == 'post' && '${userId}' in likes[]._ref ] | order(_createdAt desc) {
    _id,
     caption,
       video[]{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      profileImage,
      s
    },
 likes,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      profileImage,
    },
    }
  }`;

  return query;
};

const topicPostsQuery = (topic) => {
  const query = `*[_type == "post" && topic match '${topic}*'] {
    _id,
     caption,
       video[]{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      profileImage,
    },
 likes,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      profileImage,
    },
    }
  }`;

  return query;
};

//elsint-diable-next-line
module.exports = {
  allPostsQuery,
  singleUserQuery,
  userCreatedPostsQuery,
  userLikedPostsQuery,
  searchPostsQuery,
  topicPostsQuery,
  allUsersQuery,
  signInUser,
  postDetailQuery,
};
