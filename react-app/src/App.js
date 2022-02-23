import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/Navigation';
import ProtectedRoute from './components/auth/ProtectedRoute';
import SplashPage from './components/SplashPage';
import UsersList from './components/UsersPage';
import User from './components/UserIdPage';
import { authenticate } from './store/session';
import Footer from './components/Footer';
import PostsPage from './components/PostsPage';
import PostIdPage from './components/PostIdPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} >
          <SplashPage />
        </Route>
        <Route path='/login' exact={true}>
          <SplashPage />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SplashPage />
        </Route>
        <ProtectedRoute path='/posts' exact={true} >
          <NavBar />
          <PostsPage />
        </ProtectedRoute>
        <ProtectedRoute path='/posts/:postId' exact={true} >
          <NavBar />
          <PostIdPage />
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <NavBar />
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <NavBar />
          <User />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
