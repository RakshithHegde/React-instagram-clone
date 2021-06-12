import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';
import { db }   from './firebase'; 
import firebase from 'firebase';

function App() {
  const [posts,setPosts] = useState([]);

useEffect(() => {
  db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
  })
  
}, []);


  return (
    <div className="App">
        <div className="app__header">
            <img 
              className="app__headerimage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              alt="" />

        </div>
        <h1>Instagram 🔗 !</h1>
       {
         posts.map(post => (
              <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
         ))
       }

        {/*header */}


        {/* posts*/}
        {/* posts*/}
    </div>
  );
}

export default App;
