// LIBRARY
import { firestore } from './firebase';
import { readVoca, moreVoca, createVoca, updateVoca, removeVoca } from '../redux/modules/voca';

const vocabularyDB = firestore.collection('vocabulary');

// READ
export const loadVocaFB = () => {
	return function (dispatch) {
		const vocaList = [];

		vocabularyDB
			.orderBy('date', 'desc')
			.limit(6)
			.get()
			.then((docs) => {
				docs.forEach((doc) => {
					if (doc.exists) vocaList.push({ id: doc.id, ...doc.data() });
				});

				const lastVisible = vocaList.length > 0 ? vocaList[vocaList.length - 1].date : 0;
				dispatch(readVoca(vocaList, lastVisible));
			})
			.catch((err) => console.error(err));
	};
};

export const loadMoreVocaFB = (date) => {
	return function (dispatch) {
		const vocaList = [];
		const previousWork = parseInt(date);

		vocabularyDB
			.orderBy('date', 'desc')
			.startAfter(previousWork)
			.limit(6)
			.get()
			.then((docs) => {
				docs.forEach((doc) => {
					if (doc.exists) vocaList.push({ id: doc.id, ...doc.data() });
				});

				const lastVisible = vocaList.length > 0 ? vocaList[vocaList.length - 1].date : 0;
				dispatch(moreVoca(vocaList, lastVisible));
			})
			.catch((err) => console.error(err));
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
export const updateVocaFB = (index, vocaObj) => {
	return function (dispatch, getState) {
		const modifydata = getState().voca.list[index];

		if (!modifydata.id) return;

		vocabularyDB
			.doc(modifydata.id)
			.update(vocaObj)
			.then((res) => {
				dispatch(updateVoca(index, vocaObj));
			})
			.catch((err) => {
				console.error(err);
			});
	};
};

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
