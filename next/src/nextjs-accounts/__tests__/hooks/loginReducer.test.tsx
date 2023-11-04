/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useReducer } from "react";
import { initialState, loginReducer } from "../../hooks/loginReducer";

describe("loginReducer", ()=>{
  
  test("Reducerの生成と初期値のテスト", () => {
    const hook = renderHook(() => useReducer(loginReducer, initialState))
    const [state, dispatch] = hook.result.current
    //初期値の確認
    expect(state.email).toBe("")
    expect(state.password).toBe("")
  })

  test("Emailの値の更新のテスト", () => {
    let email="Edited Email"
    const hook = renderHook(() => useReducer(loginReducer, initialState))
    const [state, dispatch] = hook.result.current
    //メールアドレスの更新
    act(() => {
      dispatch({
        type: "edited_email",
        email: email,
      });
    })
    expect(hook.result.current[0].email).toBe(email);
  })

  test("Passwordの値の更新のテスト", () => {
    let password="Edited Password"
    const hook = renderHook(() => useReducer(loginReducer, initialState))
    const [state, dispatch] = hook.result.current
    //パスワードの更新
    act(() => {
      dispatch({
        type: "edited_password",
        password: password,
      });
    })
    expect(hook.result.current[0].password).toBe(password);
  })

  test("Stateのリセットのテスト", () => {
    const hook = renderHook(() => useReducer(loginReducer, { email:"email",
                                                             password:"password"}))
    const [state, dispatch] = hook.result.current
    //Stateのリセット
    act(() => {
      dispatch({
        type: "reset_form",
      });
    })
    expect(hook.result.current[0].password).toBe("");
    expect(hook.result.current[0].password).toBe("");
  })
})