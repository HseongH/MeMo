// LIBRARY
import React, { useEffect } from 'react';
import { Route, Link, Switch, useLocation } from 'react-router-dom';

// COMPONENTS
import Header from './Header';
import LoadingSpinner from './Loading';

// REDUX
import { useDispatch, useSelector } from 'react-redux';

// FIREBASE
import { loadVocaFB } from '../firebase/method';

// PAGES
import Vocabulary from '../page/Vocabulary';
import AddWord from '../page/Add';
import ModifyWord from '../page/Modify';
import NotFound from '../page/NotFound';

// STYLE
import '../style/css/main.css';

const App = () => {
  const url = useLocation().pathname;
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.voca.isLoaded);

  useEffect(() => {
    dispatch(loadVocaFB());
  }, [dispatch, isLoaded]);

  return (
    <>
      <Header />

      {isLoaded || <LoadingSpinner />}

      <Switch>
        <Route path="/" component={Vocabulary} exact />
        <Route path="/add" component={AddWord} exact />
        <Route path="/modify" component={ModifyWord} exact />
        <Route component={NotFound} />
      </Switch>

      {url === '/' && (
        <Link to="/add">
          <button className="btn btn--addVoca">+</button>
        </Link>
      )}
    </>
  );
};

export default App;
