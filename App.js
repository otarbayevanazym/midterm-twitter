// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';
import Post from './components/Post';
import Profile from './components/Profile';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, text: 'Hello, Twitter!', author: 'User1' },
    { id: 2, text: 'This is a simple app.', author: 'User2' },
  ]);

  const [profile, setProfile] = useState({
    username: 'UserX',
    bio: 'A Twitter clone user',
  });

  return (
    <Router>
      <div className="App">
        <h1>Twitter Clone</h1>
        <nav>
          <Link to="/">Feed</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Feed posts={posts} setPosts={setPosts} />
          </Route>
          <Route path="/post/:id">
            <Post posts={posts} setPosts={setPosts} />
          </Route>
          <Route path="/profile">
            <Profile profile={profile} setProfile={setProfile} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
