// LIBRARY
import React from "react";

// STYLE
import "../style/css/vocabulary.css";

const Vocabulary = (props) => {
    const list = props.voca;

    return (
        <section className="section section--contents">
            <div className="container">

                {list.map((elem, idx) => {
                    return (
                        <div className="Card">
                            <div className="card__container word">
                                <p className="contents">{elem.word}</p>
                            </div>

                            <div className="card__container desc">
                                <p className="contents">{elem.desc}</p>
                            </div>

                            <div className="card__container example">
                                <p className="contents">{elem.example}</p>
                            </div>
                        </div>
                    );
                })}
                
            </div>
        </section>
    );
};

export default Vocabulary;
