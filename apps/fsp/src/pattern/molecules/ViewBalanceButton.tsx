import React from 'react'
import ChevronRightIcon from '../atoms/icons/ChevronRightIcon'

const ViewBalanceButton = () => {
  return (
    <div>
      <button className="flex items-center justify-between bg-[#174cff] text-white py-[6px] px-6 gap-2 rounded text-sm">
        View <ChevronRightIcon />
      </button>
    </div>
  )
}

export default ViewBalanceButton
