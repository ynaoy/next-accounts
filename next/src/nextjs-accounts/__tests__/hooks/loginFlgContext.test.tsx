/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import {LoginFlgContextProvider, 
        UseLoginFlgContext,
        UseSetLoginFlgContext, 
        } from '../../hooks/loginFlgContext';

describe('LoginFlgContext', ()=>{
  test(`子コンポーネント内で、setLoginFlg(value)が実行された時にloginFlgが同期する`, () => {
    const ChildComponent =()=>{
      `LoginFlgContextProviderの子コンポーネントとしてレンダーする`
      const loginFlg = UseLoginFlgContext()
      const setLoginFlg = UseSetLoginFlgContext()
      return { loginFlg, setLoginFlg}
    }
    //レンダー
    const hook = renderHook(() => ChildComponent(), {wrapper:LoginFlgContextProvider})
    //子コンポーネントからテストする値の取り出し
    const { loginFlg, setLoginFlg } = hook.result.current
    expect(loginFlg).toBe(false);
    //loginFlgをtrueに更新して再レンダー
    act(() => {
      setLoginFlg(true)
    })
    let nextLoginFlg = hook.result.current.loginFlg
    expect(nextLoginFlg).toBe(true);
  });
})