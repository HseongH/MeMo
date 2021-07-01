// ACTION
const READ = 'voca/READ';
const READMORE = 'voca/READMORE';
const CREATE = 'voca/CREATE';
const UPDATE = 'voca/UPDATE';
const DELETE = 'voca/DELETE';

// ACTION CREATER
export const readVoca = (vocaList, date) => ({ type: READ, vocaList, date });
export const moreVoca = (vocaList, date) => ({
  type: READMORE,
  vocaList,
  date,
});
export const createVoca = (vocaObj) => ({ type: CREATE, vocaObj });
export const updateVoca = (index, vocaObj) => ({
  type: UPDATE,
  index,
  vocaObj,
});
export const removeVoca = (index) => ({ type: DELETE, index });

// INITIAL STATE
const initialState = {
  isLoaded: false,
  list: [
    {
      word: 'Algorithm',
      desc: '어떠한 문제를 해결하기 위해 정해진 일련의 절차나 방법을 공식화한 형태로 표현한 것, 계산을 실행하기 위한 단계적 절차를 의미한다.',
      url: 'https://ko.wikipedia.org/wiki/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98',
    },
  ],
  date: 0,
};

// REDUCER
function voca(state = initialState, action) {
  switch (action.type) {
    case READ:
      if (action.vocaList.length)
        return {
          isLoaded: true,
          list: action.vocaList,
          date: action.date,
        };
      return { list: state.list, isLoaded: true };

    case READMORE:
      const moreVocaList = [...state.list, ...action.vocaList];

      return { list: moreVocaList, date: action.date, isLoaded: true };

    case CREATE:
      const newVocaList = [...state.list, action.vocaObj];
      return { list: newVocaList };

    case UPDATE:
      const modifyList = [...state.list];
      modifyList[action.index] = action.vocaObj;

      return { list: modifyList };

    case DELETE:
      const vocaList = state.list.filter((elem, idx) => idx !== action.index);

      return { list: vocaList };

    default:
      return state;
  }
}

export default voca;
