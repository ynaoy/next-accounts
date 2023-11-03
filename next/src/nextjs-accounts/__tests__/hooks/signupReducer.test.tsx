/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import { useReducer } from 'react';
import { initialState, signupReducer } from '../../hooks/signupReducer';

describe('signupReducer', ()=>{
  
  test('Reducerの生成と初期値のテスト', () => {
    const hook = renderHook(() => useReducer(signupReducer, initialState))
    const [state, dispatch] = hook.result.current
    //初期値の確認
    expect(state.userName).toBe('')
    expect(state.email).toBe('')
    expect(state.password).toBe('')
  })

  test('UserNameの更新のテスト', () => {
    let userName='Edited UserName'
    const hook = renderHook(() => useReducer(signupReducer, initialState))
    const [state, dispatch] = hook.result.current
    //初期値の確認
    //ユーザーネームの更新
    act(() => {
      dispatch({
        type: 'edited_userName',
        userName: userName,
      });
    })
    expect(hook.result.current[0].userName).toBe(userName);
  })

  test('Emailの更新のテスト', () => {
    let email='Edited Email'
    const hook = renderHook(() => useReducer(signupReducer, initialState))
    const [state, dispatch] = hook.result.current
    //メールアドレスの更新
    act(() => {
      dispatch({
        type: 'edited_email',
        email: email,
      });
    })
    expect(hook.result.current[0].email).toBe(email);
  })

  test('Passwordの更新のテスト', () => {
    let password='Edited Password'
    const hook = renderHook(() => useReducer(signupReducer, initialState))
    const [state, dispatch] = hook.result.current
    //パスワードの更新
    act(() => {
      dispatch({
        type: 'edited_password',
        password: password,
      });
    })
    expect(hook.result.current[0].password).toBe(password);
  })

  test('Stateのリセットのテスト', () => {
    const hook = renderHook(() => useReducer(signupReducer, {userName:'userName',
                                                             email:'email',
                                                             password:'password'}))
    const [state, dispatch] = hook.result.current
    //Stateのリセット
    act(() => {
      dispatch({
        type: 'reset_form',
      });
    })
    expect(hook.result.current[0].userName).toBe('');
    expect(hook.result.current[0].password).toBe('');
    expect(hook.result.current[0].password).toBe('');
  })
})