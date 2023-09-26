import React, { useState } from 'react';
import SelectEnduserView from '../molecules/SelectEnduserView';
import EnduserWalletCard from './EnduserWalletCard';
import EnduserWalletsTable from '../molecules/EnduserWalletsTable';

const EnduserWalletView = () => {
    const [listFocus, setListFocus] = useState<boolean>(true);
  return (
    <div>
        <SelectEnduserView listFocus={listFocus} setListFocus={setListFocus} />
        {listFocus ? (
        <div>
          <EnduserWalletsTable />
        </div>
      ) : (
        <div>
          <EnduserWalletCard />
        </div>
      )}
    </div>
  )
}

export default EnduserWalletView
