export const initialState = {
  email: "",
  password:"",
};

export function loginReducer(state:any, action:any) {
  switch (action.type) {
    case "edited_email": {
      return {
        ...state,
        email: action.email,
      };
    }
    case "edited_password": {
      return {
        ...state,
        password: action.password,
      };
    }
    case "reset_form": {
      return {
        email: "",
        password:"",
      };
    }
  }
}