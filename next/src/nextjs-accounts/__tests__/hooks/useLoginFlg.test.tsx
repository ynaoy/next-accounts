/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import { useLoginFlg } from '../../hooks/useLoginFlg';

describe('useLoginFlg', ()=>{
  
  test('setLoginFlg(value)が実行された時、セットされた値でレンダーされる', () => {
    const hook = renderHook(() => useLoginFlg(false))
    const [loginFlg, setLoginFlg] = hook.result.current
    expect(loginFlg).toBe(false);
    act(() => {
      setLoginFlg(true)
    })
    let nextLoginFlg = hook.result.current[0]
    expect(nextLoginFlg).toBe(true);
  });
})