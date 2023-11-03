import { useState } from 'react';
import { useLoginFlgType } from '../hooks/types/useLoginFlg';

export const useLoginFlg = (defaultState:boolean = false):useLoginFlgType =>{
  const [loginFlg, setLoginFlg] = useState(defaultState);

  return [
    loginFlg,
    setLoginFlg,
  ];
};