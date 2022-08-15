import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();

// TypedUseSelectorHook: 建立一個符合 store 的 root state 類型的 hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
