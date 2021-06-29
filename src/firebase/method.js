// LIBRARY
import { firestore } from "./firebase";
import { readVoca, createVoca } from "../redux/modules/voca";

const vocabulary_db = firestore.collection("vocabulary");

// READ
export const loadVocaFB = () => {
    return function (dispatch) {
        vocabulary_db.get().then((docs) => {
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
        vocabulary_db
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
