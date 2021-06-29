// LIBRARY
import React, { useRef } from "react";

// STORE
import { useDispatch } from "react-redux";
import { history } from "../redux/configStore";

// FIREBASE
import { addVocaFB } from "../firebase/method";

// STYLE
import "../style/css/add.css";

const AddWord = (props) => {
    const dispatch = useDispatch();

    const wordValue = useRef();
    const descValue = useRef();
    const exValue = useRef();

    const addVoca = (event) => {
        event.preventDefault();
        
        const vocaObj = {
            word: wordValue.current.value,
            desc: descValue.current.value,
            example: exValue.current.value
        };

        dispatch(addVocaFB(vocaObj));
        history.goBack();
    };

    return (
        <section className="section section--input">
            <div className="container">
                <form className="Add" onSubmit={addVoca}>
                    <label htmlFor="word-input" className="input-label">
                        단어
                    </label>
                    <input
                        type="text"
                        ref={wordValue}
                        className="input--text"
                        id="word-input"
                    />

                    <label htmlFor="desc-input" className="input-label">
                        설명
                    </label>
                    <input
                        type="text"
                        ref={descValue}
                        className="input--text"
                        id="desc-input"
                    />

                    <label htmlFor="ex-input" className="input-label">
                        예시
                    </label>
                    <input
                        type="text"
                        ref={exValue}
                        className="input--text"
                        id="ex-input"
                    />

                    <button type="submit" className="btn btn--submit">
                        추가하기
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddWord;
