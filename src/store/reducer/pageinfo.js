const initialState = {
    loader : false,
    alert: {
        msg: "",
        type: "",
    },
};

const pageInfoReducer = (state=initialState, action) => {
    switch (action.type){
        case "open_loading":
            return{
                ...state,
                loading: true
            }
            case "stop_loading":
                return{
                    ...state,
                    loading: false
                }
                case "show_msg":
                    return{
                        ...state,
                        alert: action.alert,
                    };
                    default:
                      return state;
    }
}

export default pageInfoReducer;