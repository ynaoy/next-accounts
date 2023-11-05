import { useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import { UseLoginFlgContext, UseSetLoginFlgContext } from '../hooks/loginFlgContext';
import { initialState, userReducer } from '../hooks/userReducer';
import Form from './forms/Form';
import FormItem from './forms/FormItem';


export default function UpdateComponent(){
  const router = useRouter()
  const loginFlg = UseLoginFlgContext();
  const [state, dispatch] = useReducer(userReducer, initialState)

  const redirectToLoginPage =()=>{
    `loginページにリダイレクトする`
    if(router.isReady) router.push("/login")
  }
  useEffect(() => {
    if(!loginFlg) redirectToLoginPage()
  },[loginFlg]);

  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900 w-full y-full">
      <div className="flex flex-col items-center justify-center px-60 mx-auto md:h-screen lg:py-0">
        <div className="w-full y-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 
                        dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                ユーザー更新
            </h1>
            <Form onClick={()=> router.push("/")}
                  buttonText = "更新">
              <FormItem onChange={(e)=>dispatch({type: 'edited_userName',userName: e.target.value})} 
                id="userName" type="text" labelText="ユーザーネーム"/>
              <FormItem onChange={(e)=>dispatch({type: 'edited_email',email: e.target.value})} 
                id="email" type="email" labelText="メールアドレス"/>
            </Form>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}