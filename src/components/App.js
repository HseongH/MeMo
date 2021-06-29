// LIBRARY
import React, { useEffect } from "react";
import { Route, Link, Switch, useLocation } from "react-router-dom";

// COMPONENTS
import Header from "./Header";

// REDUX
import { useDispatch } from "react-redux";

// FIREBASE
import { loadVocaFB } from "../firebase/method";

// PAGES
import Vocabulary from "../page/Vocabulary";
import AddWord from "../page/Add";
import NotFound from "../page/NotFound";

// STYLE
import "../style/css/main.css";

const App = () => {
    const url = useLocation().pathname;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadVocaFB());
    });

    return (
        <>
            <Header />

            <Switch>
                <Route path="/" component={Vocabulary} exact />
                <Route path="/add" component={AddWord} exact />
                <Route component={NotFound} />
            </Switch>

            {url === "/" && (
                <Link to="/add">
                    <button className="btn btn--addVoca">+</button>
                </Link>
            )}
        </>
    );
};

export default App;
