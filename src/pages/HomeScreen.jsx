import React from "react";

import {posts} from "../data/posts.js"
import Post from "../components/Post";

const HomeScreen = () => {
  console.log(posts)
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Bienvenido al Blog!</h1>
          <hr />
          <div className="col-12 col-md-8 offset-md-2">

           {posts.map(post=>(            
            <Post key={post.id} post={post} />
           ))}
          </div>
                
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
