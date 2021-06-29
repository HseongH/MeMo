// LIBRARY
import React, { useRef } from "react";

// REDUX
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

    const isValueExistence = (event) => {
        const enterArea = event.target;

        if (enterArea.value) {
            enterArea.classList.remove("danger");
            return;
        } 
        enterArea.classList.add("danger");
    };

    const addVoca = (event) => {
        event.preventDefault();

        const word = wordValue.current.value;
        const desc = descValue.current.value;
        const example = exValue.current.value;

        if (!(word && desc && example)) return;

        const vocaObj = {
            word,
            desc,
            example,
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
                        id="word-input"
                        type="text"
                        ref={wordValue}
                        className="input--text"
                        onBlur={isValueExistence}
                    />

                    <label htmlFor="desc-input" className="input-label">
                        설명
                    </label>
                    <input
                        id="desc-input"
                        type="text"
                        ref={descValue}
                        className="input--text"
                        onBlur={isValueExistence}
                    />

                    <label htmlFor="ex-input" className="input-label">
                        예시
                    </label>
                    <input
                        id="ex-input"
                        type="text"
                        ref={exValue}
                        className="input--text"
                        onBlur={isValueExistence}
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
