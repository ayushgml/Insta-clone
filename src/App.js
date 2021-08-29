import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const [ posts, setPosts ] = useState( [] );

  // useEffect( () => {
  //   db.collection( 'posts' ).onSnapshot( snapshot => {
  //     setPosts(spanshot.docs.map(doc => doc.data()))
  //   })
  // }, [])

  return (
    <div className="app">
      
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg"
        />
      </div>

      {
        posts.map( post => (
          <Post
            username={ post.username }
            caption={ post.caption }
            imageUrl={ post.imageUrl }
          />
        ))
      }
    </div>
  );
}

export default App;
