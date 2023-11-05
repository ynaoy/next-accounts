import { render, screen, fireEvent} from "@testing-library/react";
import SignupComponent from "../../components/SignupComponent"

//コンテキストのモック
let loginFlgMock = false
let setLoginFlgMock = jest.fn(()=>{ loginFlgMock=!loginFlgMock })
jest.mock("../../hooks/loginFlgContext",
  ()=>({...jest.requireActual("../../hooks/loginFlgContext"),
        UseLoginFlgContext : ()=>loginFlgMock,
        UseSetLoginFlgContext : ()=>setLoginFlgMock 
      }));

//useRouterのモック
let routerPushMock = jest.fn()
jest.mock("next/router", () => {
  return {
    ...jest.requireActual("next/router"),
    useRouter: ()=> {return { push: routerPushMock,
                              isReady:true}},
  }
})

describe('SignupComponent', ()=>{
  afterEach(() => {
    setLoginFlgMock.mockClear()
    routerPushMock.mockClear()
    loginFlgMock = false
  });

  test("サブミットボタンをクリックした時にログイン状態が変更される", () => {
    //レンダー
    render(<SignupComponent/>);
    //サブミットボタンがあるか確認
    const button = screen.getByRole('button', {name: '登録'})
    expect(button).toBeTruthy()
    //サブミットボタンをクリック
    fireEvent.click(button)
    //setloginFlg(value)が呼び出されている
    expect(setLoginFlgMock).toHaveBeenCalled()
    //userRouter().push()が呼び出されている
    expect(routerPushMock).toHaveBeenCalled()
  });

  test("ログイン中だったらuseRouter().push()が呼び出されリダイレクトされる",()=>{
    //ログインする
    setLoginFlgMock()
    //レンダー
    render(<SignupComponent/>);
    //userRouter().push()が呼び出されている
    expect(routerPushMock).toHaveBeenCalled()
  })
})