import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

export const getAll = createAsyncThunk('transactions/getAll', async () => {
  const response = await fetch('http://localhost:3000/transactions.json').then(
    (response) => response.json()
  );
  return response;
});

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.status = 'idle';
        state.transactions = action.payload;
      })
      .addCase(getAll.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectTransactions = (state: RootState) =>
  state.transactions.transactions;
export const selectStatus = (state: RootState) => state.transactions.status;

export default transactionsSlice.reducer;
