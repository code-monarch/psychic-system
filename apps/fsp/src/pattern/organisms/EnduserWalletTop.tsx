import React from 'react'
import EnduserWalletId from '../molecules/EnduserWalletId'
import EnduserWalletBalance from '../molecules/EnduserWalletBalance'

const EnduserWalletTop = () => {
  return (
    <div className='flex justify-between items-center'>
      <EnduserWalletId />
      <EnduserWalletBalance />
    </div>
  )
}

export default EnduserWalletTop
