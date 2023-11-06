import Link from 'next/link';
import { UseLoginFlgContext, UseSetLoginFlgContext } from '../hooks/loginFlgContext';
import PinkButton from './buttons/PinkButton';
import OrangeButton from './buttons/OrangeButton';
import BlueButton from './buttons/BlueButton';
import CyanButton from './buttons/CyanButton';
import GreenButton from './buttons/GreenButton'
import RedButton from './buttons/RedButton'

export default function IndexComponent(){
  const loginFlg = UseLoginFlgContext();
  const setLoginFlg = UseSetLoginFlgContext()
  const logout =()=>setLoginFlg(false)
  return (
    <div className="flex flex-col justify-center items-center">
      <PinkButton onClick={()=>setLoginFlg(!loginFlg)} size="sm">
        change login
      </PinkButton>

      {loginFlg?(
      <>
        <OrangeButton size="lg" onClick={()=>logout()}>
          Logout
        </OrangeButton>
        <Link href='/update'>
          <GreenButton size="lg">
            Update
          </GreenButton>
        </Link>
        <Link href='/resetPassword'>
          <RedButton size="lg">
            ResetPassword
          </RedButton>
        </Link>
      </>
      ):(
      <>
        <Link href='/signup'>
          <BlueButton size="lg">
            Signup
          </BlueButton>
        </Link>
        <Link href='/login'>
          <CyanButton size="lg">
            Login
          </CyanButton>
        </Link>
      </>)
      }
    </div>
    )
}
