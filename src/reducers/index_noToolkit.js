
/* //SIN TOOLKIT
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { 
                counter: state.counter + action.payload, 
                visibility: state.visibility 
            };

		case "DECREMENT":
			return { 
                counter: state.counter - action.payload, 
                visibility: state.visibility 
            };

		case "SHOW_COUNTER":
			return { 
                counter: state.counter, 
                visibility: !state.visibility 
             };

		default:
			return state;
	}
};

export default combineReducers({ counterReducer }); */
