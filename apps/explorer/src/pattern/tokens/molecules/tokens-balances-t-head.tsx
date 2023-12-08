import { joinClasses } from "@emtech/utils";

const styles = {
  th: `bg-surfaceColor text-primaryText text-sm font-extrabold font-sans whitespace-nowrap py-4`,
};

const TokenBalanceTHead = () => {
  return (
    <tr className="w-full flex items-start justify-between text-black">
      {/* Amount ID */}
      <th
        scope='col'
        className={joinClasses(
          styles.th,
          "pl-0 font-[800] text-base text-left"
        )}
      >
        Amount ID
      </th>
      {/* Amount ID End */}

      {/* Balance */}
      <th
        scope='col'
        className={joinClasses(
          styles.th,
          "pl-0 font-[800] text-base text-right"
        )}
      >
        Balance
      </th>
      {/* Balance End */}
    </tr>
  );
};

export default TokenBalanceTHead;
