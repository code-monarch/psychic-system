import { joinClasses } from "@emtech/utils";

const styles = {
  th: `bg-surfaceColor text-primaryText text-sm font-extrabold font-sans whitespace-nowrap py-4`,
};


const Thead = () => {
  return (
      <tr>
        {/* Request Number */}
        <th
          scope='col'
          className={joinClasses(
            styles.th,
            "pr-[87px] pl-4 font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)] rounded-tl-lg"
          )}
        >
          Request Number
        </th>
        {/* Request Number End */}

        {/* Entity */}
        <th
          scope='col'
          className={joinClasses(
            styles.th,
            "pr-[134px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)]"
          )}
        >
          Entity
        </th>
        {/* Entity End */}

        {/* Wallet Request Type */}
        <th
          scope='col'
          className={joinClasses(
            styles.th,
            "pr-[130px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)]"
          )}
        >
          Wallet Request Type
        </th>
        {/* Wallet Request Type End */}

        {/* Date & Time */}
        <th
          scope='col'
          className={joinClasses(
            styles.th,
            "pr-[173px] font-[800] text-center border-b border-[rgba(132, 153, 177, 0.2)] rounded-tr-lg"
          )}
        >
          Date &amp; Time
        </th>
        {/* Date & Time */}

        {/* Status */}
        <th
          scope='col'
          className={joinClasses(
            styles.th,
            "pr-[66px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)] rounded-tr-lg"
          )}
        >
          Status
        </th>
        {/* Status */}

        {/* View request Details */}
        <th
          scope='col'
          className={joinClasses(
            styles.th,
            "px-[16px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)] rounded-tr-lg"
          )}
        ></th>
        {/* View request Details */}
      </tr>
  );
}

export default Thead