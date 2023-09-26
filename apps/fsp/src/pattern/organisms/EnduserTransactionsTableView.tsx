import React from 'react'
import EnduserTransactionsTable from '../molecules/EnduserTransactionsTable'
import EnduserTransactionsTableTop from '../molecules/EnduserTransactionsTableTop'

const EnduserTransactionsTableView = () => {
  return (
    <div>
      <EnduserTransactionsTableTop />
      <EnduserTransactionsTable />
    </div>
  )
}

export default EnduserTransactionsTableView
