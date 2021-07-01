import { useState } from 'react';
import { createContext } from 'react';
import './App.css';
import Home from './Components/Home';
import EditPost from './Components/EditPost';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LikedPost from './Components/LikedPost';
import UnLikedPost from './Components/UnLikedPost';


export const PostUpdate = createContext() 
export const GetLikes = createContext() 
export const GetUnLikes = createContext() 

function App() {
  const [postCount, setPostCount] = useState([])
  const [likeCount, setLikeCount] = useState([])
  const [unLikeCount, setUnLikeCount] = useState([])
  return (
    <div className="App">
      <PostUpdate.Provider value={[postCount, setPostCount]}>
        <GetLikes.Provider value={[likeCount, setLikeCount]}>
        <GetUnLikes.Provider value={[unLikeCount, setUnLikeCount] }>
          <Router>
            <Switch>
              <Route path="/posts/:postId">
                <EditPost />
              </Route>
              <Route path="/unLikedPost">
                <UnLikedPost/>
              </Route>
              <Route path="/likedPost">
                <LikedPost />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
          </GetUnLikes.Provider>
        </GetLikes.Provider>
      </PostUpdate.Provider>
    </div>
  );
}

export default App;
