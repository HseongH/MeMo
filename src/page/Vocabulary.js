// LIBRARY
import React from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// FIREBASE
import { removeVocaFB } from "../firebase/method";

// STYLE
import "../style/css/vocabulary.css";

// ICON
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Vocabulary = (props) => {
    const vocaList = useSelector((state) => state.voca.list);
    const dispatch = useDispatch();

    const removeVoca = (index) => {
        dispatch(removeVocaFB(index));
    };

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

                            <div className="btn-group">
                                <button className="btn btn--modify">
                                    <EditIcon />
                                </button>
                                <button
                                    onClick={() => {
                                        removeVoca(idx);
                                    }}
                                    className="btn btn--delete"
                                >
                                    <DeleteForeverIcon />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Vocabulary;
