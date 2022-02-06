import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Transaction {
  transactionType: 'success' | 'failed';
  date: string;
  amount: number;
}

export interface TransactionsState {
  transactions: Transaction[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TransactionsState = {
  transactions: [],
  status: 'idle',
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
});

export const selectTransactions = (state: RootState) =>
  state.transactions.transactions;

export default transactionsSlice.reducer;
