import React from 'react'
import TransactionsTableTop from '../molecules/TransactionsTableTop'
import TransactionsTable from '../molecules/TransactionsTable'

const TransactionsTableView = () => {
  return (
    <div>
      <TransactionsTableTop />
      <TransactionsTable />
    </div>
  )
}

export default TransactionsTableView
