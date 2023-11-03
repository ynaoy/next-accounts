/**
 * @jest-environment jsdom
 */
import { createContext, useContext} from 'react';
import { setLoginFlgType } from './types/useLoginFlg';
import { useLoginFlg } from './useLoginFlg';

export const loginFlgContext = createContext<boolean>(false);
export const setLoginFlgContext = createContext<setLoginFlgType>(
  () => undefined
);
export const LoginFlgContextProvider = ({children}:{children: React.ReactNode})=>{
  const [loginFlg, setLoginFlg] = useLoginFlg(false)
  return (
    <loginFlgContext.Provider value={loginFlg}>
      <setLoginFlgContext.Provider value={setLoginFlg}>
        {children}
      </setLoginFlgContext.Provider>
    </loginFlgContext.Provider>
  )
}
export const UseLoginFlgContext = ()=>useContext(loginFlgContext)
export const UseSetLoginFlgContext = ()=>useContext(setLoginFlgContext)