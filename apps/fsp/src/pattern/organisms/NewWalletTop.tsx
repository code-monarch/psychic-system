import React from 'react'
import NewWalletId from '../molecules/NewWalletId'
import NewWalletBalance from '../molecules/NewWalletBalance'

const NewWalletTop = () => {
  return (
    <div className='flex justify-between items-center'>
      <NewWalletId />
      <NewWalletBalance />
    </div>
  )
}

export default NewWalletTop
