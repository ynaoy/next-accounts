import { useEffect, useReducer } from 'react';
import { useRouter } from 'next/router'
import { UseLoginFlgContext, UseSetLoginFlgContext } from '../hooks/loginFlgContext';
import { initialState, userReducer } from '../hooks/userReducer';
import Form from './forms/Form';
import FormItem from './forms/FormItem';


export default function SignupComponent(){
  const router = useRouter()
  const loginFlg = UseLoginFlgContext();
  const setLoginFlg = UseSetLoginFlgContext()
  const [state, dispatch] = useReducer(userReducer, initialState)
  
  const redirectToIndexPage =()=>{
    `indexページにリダイレクトする`
    if(router.isReady) router.push("/")
  }
  useEffect(() => {
    if(!loginFlg) redirectToIndexPage()
  },[loginFlg]);

  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900 w-full y-full">
      <div className="flex flex-col items-center justify-center px-60 mx-auto md:h-screen lg:py-0">
        <div className="w-full y-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 
                        dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                パスワード変更
            </h1>
            <Form onClick={()=>{ redirectToIndexPage()}}
                  buttonText = "変更">
              <FormItem onChange={(e)=>dispatch({type: 'edited_password',password: e.target.value})} 
                id="password" type="password" labelText="新しいパスワード"/>
            </Form>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}