import { render, screen, fireEvent} from "@testing-library/react";
import Form from "../../components/forms/Form"

const onClickMock = jest.fn()
describe("FormComponent", ()=>{
  test("サブミットボタンが存在するかと子コンポーネントが表示されているテスト", () => {
    //レンダー
    render(<Form onClick={onClickMock}>
            <div> チルドレン </div>
           </Form>);
    //サブミットボタンがあるか確認
    expect(screen.getByRole("button", {name: "登録"})).toBeTruthy()
    //子コンポーネントが表示されているか確認
    expect(screen.getByText("チルドレン")).toBeTruthy()
  });

  test("サブミットボタンをクリックした時にonSubmitが呼び出される",()=>{
    //レンダー
    render(<Form onClick={onClickMock}/>);
    //サブミットボタンがあるか確認
    const button = screen.getByRole("button", {name: "登録"})
    expect(button).toBeTruthy()
    //サブミットボタンをクリック
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalled()
  })
})