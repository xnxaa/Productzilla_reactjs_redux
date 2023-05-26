const initialState = {
    formData: {},
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_STEP1_DATA':
        return {
          ...state,
          formData: {
            ...state.formData,
            ...action.payload,
          },
        };
      case 'SAVE_STEP2_DATA':
        return {
          ...state,
          formData: {
            ...state.formData,
            ...action.payload,
          },
        };
      case 'SAVE_STEP3_DATA':
        return {
          ...state,
          formData: {
            ...state.formData,
            ...action.payload,
          },
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  