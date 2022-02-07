import React from 'react';
import { CalendarHeatmap } from 'reaviz';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getAll,
  selectTransactions,
  selectStatus,
  Transaction,
} from './transactionsSlice';

export function Transactions() {
  const transactions = useAppSelector(selectTransactions);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  function mapDataForChart({ transactionType, amount, date }: Transaction) {
    return {
      key: new Date(date),
      data: transactionType === 'success' ? amount : amount * -1,
    };
  }

  function handleClick() {
    dispatch(getAll());
  }

  return (
    <div>
      <button onClick={handleClick}>fetch transactions</button>
      {status === 'idle' && transactions.length > 0 && (
        <CalendarHeatmap
          data={transactions.map(mapDataForChart)}
          height={200}
          width={600}
        />
      )}
      {status === 'loading' && <p>Fetching transactions...</p>}
      {status === 'failed' && <p>Fetching transactions failed</p>}
    </div>
  );
}
