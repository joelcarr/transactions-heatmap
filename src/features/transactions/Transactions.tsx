import React from 'react';

import { useAppSelector } from '../../app/hooks';
import { selectTransactions } from './transactionsSlice';

export function Transactions() {
  const transactions = useAppSelector(selectTransactions);

  return <div>Transactions lengths: {transactions.length}</div>;
}
