// LIBRARY
import React, { useState } from "react";
import { Route, Link, Switch, useLocation } from "react-router-dom";

// COMPONENTS
import Header from "./Header";

// PAGES
import Vocabulary from "../page/Vocabulary";
import AddWord from "../page/Add";
import NotFound from "../page/NotFound";

// STYLE
import "../style/css/main.css";

const App = () => {
    const url = useLocation().pathname;
    const [vocaObj, setVoca] = useState([
        {
            word: "레미",
            desc: "하핳",
            example: "러시안 블루",
        },
        {
            word: "레미",
            desc: "하핳",
            example: "러시안 블루",
        },
    ]);

    return (
        <>
            <Header />

            <Switch>
                <Route
                    path="/"
                    render={() => <Vocabulary voca={vocaObj} />}
                    exact
                />
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
