// LIBRARY
import { firestore } from "./firebase";
import { readVoca, createVoca, removeVoca } from "../redux/modules/voca";

const vocabularyDB = firestore.collection("vocabulary");

// READ
export const loadVocaFB = () => {
    return function (dispatch) {
        vocabularyDB.get().then((docs) => {
            const wordData = [];

            docs.forEach((doc) => {
                if (doc.exists) {
                    wordData.push({ id: doc.id, ...doc.data() });
                }
            });

            dispatch(readVoca(wordData));
        });
    };
};

// CREATE
export const addVocaFB = (vocaObj) => {
    return function (dispatch) {
        vocabularyDB
            .add(vocaObj)
            .then((docRef) => {
                vocaObj = { ...vocaObj, id: docRef.id };

                dispatch(createVoca(vocaObj));
            })
            .catch((err) => {
                console.error(err);
            });
    };
};

// UPDATE

// DELETE
export const removeVocaFB = (index) => {
    return function (dispatch, getState) {
        const vocaData = getState().voca.list[index];

        if (!vocaData.id) return;

        vocabularyDB
            .doc(vocaData.id)
            .delete()
            .then((res) => {
                dispatch(removeVoca(index));
            })
            .catch((err) => {
                console.error(err);
            });
    };
};
