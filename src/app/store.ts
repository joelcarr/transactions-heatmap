import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import transactionsReducers from '../features/transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducers,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
