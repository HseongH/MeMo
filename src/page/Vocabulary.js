// LIBRARY
import React from "react";

// STORE
import { useSelector } from "react-redux";
// import { readVoca } from "../redux/modules/voca";

// STYLE
import "../style/css/vocabulary.css";

const Vocabulary = (props) => {
    const vocaList = useSelector((state) => state.voca).list;

    return (
        <section className="section section--contents">
            <div className="container">
                {vocaList.map((elem, idx) => {
                    return (
                        <div className="Card" key={idx}>
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
