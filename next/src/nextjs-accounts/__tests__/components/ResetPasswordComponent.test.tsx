import { render, screen, fireEvent} from "@testing-library/react";
import ResetPasswordComponent from "../../components/ResetPasswordComponent"

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

  test("サブミットボタンをクリックした時に画面が遷移する", () => {
    //ログインする
    setLoginFlgMock()
    //レンダー
    render(<ResetPasswordComponent/>);
    //サブミットボタンがあるか確認
    const button = screen.getByRole('button', {name: '変更'})
    expect(button).toBeTruthy()
    //サブミットボタンをクリック
    fireEvent.click(button)
    //userRouter().push()が呼び出されている
    expect(routerPushMock).toHaveBeenCalled()
  });

  test("ログイン中でないならuseRouter().push()が呼び出されリダイレクトされる",()=>{
    //レンダー
    render(<ResetPasswordComponent/>);
    //userRouter().push()が呼び出されている
    expect(routerPushMock).toHaveBeenCalled()
  })
})