// LIBRARY
import React, { useRef, useState } from "react";

// REDUX
import { useDispatch } from "react-redux";
import { history } from "../redux/configStore";

// FIREBASE
import { addVocaFB, updateVocaFB } from "../firebase/method";

// STYLE
import "../style/css/add.css";

// FUNCTION
const isValueExistence = (event) => {
    const enterArea = event.target;

    if (enterArea.value) {
        enterArea.classList.remove("danger");
        return;
    }
    enterArea.classList.add("danger");
};

const AddWord = (props) => {
    const dispatch = useDispatch();
    const modifyContents = props.vocaObj;

    const wordInput = useRef();
    const descInput = useRef();
    const exInput = useRef();

    const [wordValue, setWordValue] = useState(
        modifyContents ? modifyContents.word : ""
    );
    const [descValue, setDescValue] = useState(
        modifyContents ? modifyContents.desc : ""
    );
    const [exValue, setExValue] = useState(
        modifyContents ? modifyContents.example : ""
    );

    const addVoca = (event) => {
        event.preventDefault();

        if (!(wordValue && descValue && exValue)) return;

        const vocaObj = {
            word: wordValue,
            desc: descValue,
            example: exValue,
        };

        dispatch(addVocaFB(vocaObj));
        history.goBack();
    };

    const modifyVoca = (event) => {
        event.preventDefault();

        if (!(wordValue && descValue && exValue)) return;

        const vocaObj = {
            word: wordValue,
            desc: descValue,
            example: exValue,
        };

        dispatch(updateVocaFB(props.index, vocaObj));
        history.goBack();
    };

    return (
        <section className="section section--input">
            <div className="container">
                <form
                    className="Add"
                    onSubmit={modifyContents ? modifyVoca : addVoca}
                >
                    <label htmlFor="word-input" className="input-label">
                        단어
                    </label>
                    <input
                        id="word-input"
                        type="text"
                        ref={wordInput}
                        className="input--text"
                        onBlur={isValueExistence}
                        value={wordValue}
                        onChange={(event) => {
                            setWordValue(event.target.value);
                        }}
                    />

                    <label htmlFor="desc-input" className="input-label">
                        설명
                    </label>
                    <input
                        id="desc-input"
                        type="text"
                        ref={descInput}
                        className="input--text"
                        onBlur={isValueExistence}
                        value={descValue}
                        onChange={(event) => {
                            setDescValue(event.target.value);
                        }}
                    />

                    <label htmlFor="ex-input" className="input-label">
                        예시
                    </label>
                    <input
                        id="ex-input"
                        type="text"
                        ref={exInput}
                        className="input--text"
                        onBlur={isValueExistence}
                        value={exValue}
                        onChange={(event) => {
                            setExValue(event.target.value);
                        }}
                    />

                    <button type="submit" className="btn btn--submit">
                        {modifyContents ? "수정하기" : "추가하기"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddWord;
