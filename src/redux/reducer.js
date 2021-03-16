const initialStae = {
 data:[]
  };
  const reducer = (state = initialStae, action) => {
    switch (action.type) {
      case 'GET_DATA':
        return {...state, data: action.payload};
      
    }
    return state;
  };
  export default reducer;