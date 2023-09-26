import React from 'react';
import ListIcon from '../atoms/icons/ListIcon';
import DashboardIcon from '../atoms/icons/DashboardIcon';

interface Props {
    listFocus: boolean;
    // eslint-disable-next-line no-unused-vars
    setListFocus: (state: boolean) => void;
}
const SelectEnduserView = ({listFocus, setListFocus}: Props) => {

  return (
    <div className="flex items-center gap-4 ">
        <button className="" onClick={() => setListFocus(true)}>
          {listFocus ? <ListIcon /> : <ListIcon color="#1e252d33" />}
        </button>
        <button className="" onClick={() => setListFocus(false)}>
          {listFocus ? <DashboardIcon /> : <DashboardIcon color="#1e252d" />}
        </button>
      </div>
  )
}

export default SelectEnduserView
