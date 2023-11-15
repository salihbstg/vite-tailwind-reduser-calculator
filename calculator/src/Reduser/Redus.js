const reduser = (state, action) => {
    switch (action.type) {
      case "TYPE1":
        return { ...state, num1: action.payload };
      case "TYPE2":
        return { ...state, num2: action.payload };
      case "RESULT":
        return { ...state, result: action.payload };
    }
  };
  const initialState = {
    num1: 0,
    num2: 0,
    result: 0,
  };
  export {reduser,initialState};