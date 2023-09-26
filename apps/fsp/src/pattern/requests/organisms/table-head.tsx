import React from 'react'
import { joinClasses } from '@emtech/utils';

const styles = {
  th: `bg-surfaceColor text-primaryText text-sm font-extrabold font-sans whitespace-nowrap py-4`,
};

const TableHead = () => {
  return (
    <thead className='bg-inherit'>
      <tr>
        {/* Entity */}
        <th
          scope='col'
          className={joinClasses(
            styles.th,
            "pr-[87px] pl-4 font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)] rounded-tl-lg"
          )}
        >
          Entity
        </th>
        {/* Entity End */}

        {/* Time */}
        <th
          scope='col'
          className={joinClasses(
            styles.th,
            "pr-[173px] font-[800] text-center border-b border-[rgba(132, 153, 177, 0.2)] rounded-tr-lg"
          )}
        >
          Request Time
        </th>
        {/* Time */}

        {/* Date */}
        <th
          scope='col'
          className={joinClasses(
            styles.th,
            "pr-[173px] font-[800] text-center border-b border-[rgba(132, 153, 177, 0.2)] rounded-tr-lg"
          )}
        >
          Request Date
        </th>
        {/* Date */}

        {/* Status */}
        <th
          scope='col'
          className={joinClasses(
            styles.th,
            "pr-[173px] font-[800] text-center border-b border-[rgba(132, 153, 177, 0.2)] rounded-tr-lg"
          )}
        >
          Status
        </th>
        {/* Status */}
      </tr>
    </thead>
  );
}

export default TableHead;