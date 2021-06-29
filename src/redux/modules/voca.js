// ACTION
const READ = "voca/READ";
const CREATE = "voca/CREATE";

// ACTION CREATER
export const readVoca = () => ({ type: READ });
export const createVoca = (vocaObj) => ({ type: CREATE, vocaObj });

// INITIAL STATE
const initialState = {
    list: [
        {
            word: "Algorithm",
            desc: "어떠한 문제를 해결하기 위해 정해진 일련의 절차나 방법을 공식화한 형태로 표현한 것, 계산을 실행하기 위한 단계적 절차를 의미한다.",
            example: "Algorithm",
        },
        {
            word: "Algorithm",
            desc: "어떠한 문제를 해결하기 위해 정해진 일련의 절차나 방법을 공식화한 형태로 표현한 것, 계산을 실행하기 위한 단계적 절차를 의미한다.",
            example: "Algorithm",
        },
    ],
};

// REDUCER
function voca(state = initialState, action) {
    switch (action.type) {
        case READ:
            return state;

        case CREATE:
            const newVocaList = [...state.list, action.vocaObj];
            return { list: newVocaList };

        default:
            return state;
    }
}

export default voca;
