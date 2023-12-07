import { joinClasses } from "@emtech/utils";

const styles = {
  th: `bg-surfaceColor text-primaryText text-sm font-extrabold font-sans whitespace-nowrap py-4`,
};

const Thead = () => {
  return (
    <tr>
      {/* Account */}
      <th
        scope='col'
        className={joinClasses(
          styles.th,
          "pr-[238px] pl-[44px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)] rounded-tl-lg"
        )}
      >
        Account
      </th>
      {/* Account End */}

      {/* Expiry */}
      <th
        scope='col'
        className={joinClasses(
          styles.th,
          "pr-[386px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)]"
        )}
      >
        Expiry
      </th>
      {/* Expiry End */}

      {/* Tokens */}
      <th
        scope='col'
        className={joinClasses(
          styles.th,
          "pr-[260px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)]"
        )}
      >
        Tokens
      </th>
      {/* Tokens End */}

      {/* Balance */}
      <th
        scope='col'
        className={joinClasses(
          styles.th,
          "pr-[172px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)] rounded-tr-lg"
        )}
      >
        Balance
      </th>
      {/* Balance */}
    </tr>
  );
};

export default Thead;
