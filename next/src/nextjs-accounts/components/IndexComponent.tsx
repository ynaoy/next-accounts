import Link from 'next/link';
import { UseLoginFlgContext, UseSetLoginFlgContext } from '../hooks/loginFlgContext';
import PinkButton from './buttons/PinkButton';
import OrangeButton from './buttons/OrangeButton';
import BlueButton from './buttons/BlueButton';
import CyanButton from './buttons/CyanButton';

export default function IndexComponent(){
  const loginFlg = UseLoginFlgContext();
  const setLoginFlg = UseSetLoginFlgContext()
  return (
    <div className="flex flex-col justify-center items-center">
      <PinkButton onClick={()=>setLoginFlg(!loginFlg)} size="sm">
        change login
      </PinkButton>

      {loginFlg?(
      <>
        <Link href='/'>
          <OrangeButton size="lg">
            Logout
          </OrangeButton>
        </Link>
      </>
      ):(
      <>
        <Link href='/'>
          <BlueButton size="lg">
            Signup
          </BlueButton>
        </Link>
        <Link href='/'>
          <CyanButton size="lg">
            Login
          </CyanButton>
        </Link>
      </>)
      }
    </div>
    )
}
