import { joinClasses } from "@emtech/utils";

const styles = {
  th: `bg-surfaceColor text-primaryText text-sm font-extrabold font-sans whitespace-nowrap py-4`,
};

const Thead = () => {
  return (
    <tr>
      {/* Tokens */}
      <th
        scope='col'
        className={joinClasses(
          styles.th,
          "pr-[728px] pl-[44px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)] rounded-tl-lg"
        )}
      >
        Tokens
      </th>
      {/* Tokens End */}

      {/* Symbol */}
      <th
        scope='col'
        className={joinClasses(
          styles.th,
          "pr-[356px] font-[800] text-center border-b border-[rgba(132, 153, 177, 0.2)] rounded-tr-lg"
        )}
      >
        Symbol
      </th>
      {/* Symbol */}
    </tr>
  );
};

export default Thead;
