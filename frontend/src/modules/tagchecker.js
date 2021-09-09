const ADD_TAG = 'tagchecker/ADD_TAG';
const REMOVE_TAG = 'tagchecker/REMOVE_TAG';

export const addTag = () => ({ type: ADD_TAG});
export const removeTag = () =>({type: REMOVE_TAG});

const initialState = {
	tagNum : 0,
}

export default function tagchecker(state = initialState, action) {
	switch(action.type){
		case ADD_TAG:
			return {
				...state,
				tagNum: state.tagNum + 1,
			};
		case REMOVE_TAG:
			return {
				...state,
				tagNum: state.tagNum - 1
			};
		default:
			return state;
	}
}