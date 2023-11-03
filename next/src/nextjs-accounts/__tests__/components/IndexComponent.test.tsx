/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent, } from "@testing-library/react";
import IndexComponent from '../../components/IndexComponent'

// 関数のモック。
let loginFlgMock = false
let setLoginFlgMock = jest.fn(()=>{ loginFlgMock=!loginFlgMock })
jest.mock('../../hooks/loginFlgContext',
  ()=>({...jest.requireActual('../../hooks/loginFlgContext'),
        UseLoginFlgContext : ()=>loginFlgMock,
        UseSetLoginFlgContext : ()=>setLoginFlgMock 
      }));

describe('IndexComponent', ()=>{
  afterEach(() => {
    setLoginFlgMock.mockClear()
  });

  test('コンテンツが表示されている', () => {
    render(<IndexComponent/>)
    expect(screen.getByRole('button', {name: "change login"})).toBeTruthy()
    expect(screen.getByRole('button', {name: "Signup"})).toBeTruthy()
    expect(screen.getByRole('button', {name: "Login"})).toBeTruthy()
  });

  test(`change loginボタンをクリックした時、ログイン状態が変わり、
        表示されるコンテンツが変わる`, () => {
    //初期レンダー
    const { rerender } = render(<IndexComponent/>)
    expect(screen.getByRole('button', {name: "change login"})).toBeTruthy()
    //ボタンクリック
    fireEvent.click(screen.getByText("change login"))
    //モックが呼び出されて値が更新されている
    expect(setLoginFlgMock).toHaveBeenCalled()
    expect(loginFlgMock).toBeTruthy()
    //再レンダーしてDomが更新されている
    rerender(<IndexComponent/>)
    expect(screen.getByRole('button', {name: "Logout"})).toBeTruthy()
  });
})