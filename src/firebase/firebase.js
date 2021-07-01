import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCWAnVmE9L76u1ioe8DufJJj2TkdmW0tKo',
	authDomain: 'voca-dictonary.firebaseapp.com',
	projectId: 'voca-dictonary',
	storageBucket: 'voca-dictonary.appspot.com',
	messagingSenderId: '194190880898',
	appId: '1:194190880898:web:dfb789dae7a8ce1f51c49b',
	measurementId: 'G-32ZM0HK489',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const vocabulary_db = firestore.collection('vocabulary');
