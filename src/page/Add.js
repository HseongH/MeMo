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

const historyBack = () => {
    history.goBack();
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

    const noValue = () => {
        wordValue || wordInput.current.classList.add("danger");
        descValue || descInput.current.classList.add("danger");
        exValue || exInput.current.classList.add("danger");
    };

    const addVoca = (event) => {
        event.preventDefault();

        if (!(wordValue && descValue && exValue)) {
            noValue();
            return;
        }

        const vocaObj = {
            word: wordValue,
            desc: descValue,
            example: exValue,
            date: Date.now(),
        };

        dispatch(addVocaFB(vocaObj));
        historyBack();
    };

    const modifyVoca = (event) => {
        event.preventDefault();

        if (!(wordValue && descValue && exValue)) {
            noValue();
            return;
        }

        const vocaObj = {
            word: wordValue,
            desc: descValue,
            example: exValue,
            date: Date.now(),
        };

        dispatch(updateVocaFB(props.index, vocaObj));
        historyBack();
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
                    <textarea
                        id="desc-input"
                        type="text"
                        ref={descInput}
                        className="input--text"
                        onBlur={isValueExistence}
                        value={descValue}
                        onChange={(event) => {
                            setDescValue(event.target.value);
                        }}
                    ></textarea>

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

                    <div className="btn-group">
                        <button type="submit" className="btn btn--submit">
                            {modifyContents ? "수정하기" : "추가하기"}
                        </button>

                        <button
                            type="button"
                            className="btn btn--cancle"
                            onClick={historyBack}
                        >
                            취소
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddWord;
