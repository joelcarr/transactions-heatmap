import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAll, selectTransactions, selectStatus } from './transactionsSlice';

export function Transactions() {
  const transactions = useAppSelector(selectTransactions);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(getAll());
  }

  return (
    <div>
      <button onClick={handleClick}>fetch transactions</button>
      {status === 'idle' && <p>Transactions lengths: {transactions.length}</p>}
      {status === 'loading' && <p>Fetching transactions...</p>}
      {status === 'failed' && <p>Fetching transactions failed</p>}
    </div>
  );
}
