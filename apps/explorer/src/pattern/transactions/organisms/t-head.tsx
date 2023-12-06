import { joinClasses } from "@emtech/utils";

const styles = {
  th: `bg-surfaceColor text-primaryText text-sm font-extrabold font-sans whitespace-nowrap py-4`,
};

const Thead = () => {
  return (
    <tr>
      {/* Transaction ID */}
      <th
        scope='col'
        className={joinClasses(
          styles.th,
          "pr-[204px] pl-[44px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)] rounded-tl-lg"
        )}
      >
        Transaction ID
      </th>
      {/* Transaction ID End */}

      {/* Transaction Type */}
      <th
        scope='col'
        className={joinClasses(
          styles.th,
          "pr-[328px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)]"
        )}
      >
        Transaction Type
      </th>
      {/* Transaction Type End */}

      {/* Status */}
      <th
        scope='col'
        className={joinClasses(
          styles.th,
          "pr-[260px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)]"
        )}
      >
        Status
      </th>
      {/* Status End */}

      {/*Time */}
      <th
        scope='col'
        className={joinClasses(
          styles.th,
          "pr-[172px] font-[800] text-center border-b border-[rgba(132, 153, 177, 0.2)] rounded-tr-lg"
        )}
      >
       Time
      </th>
      {/*Time */}
    </tr>
  );
};

export default Thead;
