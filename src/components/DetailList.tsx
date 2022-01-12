import styled from 'styled-components';

interface DetailListItem {
  label: string;
  value: string;
}

const StyledList = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 24px;
  grid-column-gap: 4em;
  align-items: center;

  dt {
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.primary.darkgrey};
    font-size: 14px;
  }
  dd {
    margin: 0;
    color: ${({ theme }) => theme.colors.primary.black};
    font-size: 16px;
    font-weight: 600;
  }
`;

const DetailList = ({ items }: { items: DetailListItem[] }): JSX.Element => (
  <StyledList>
    {items.map((item) => (
      <>
        <dt>{item.label}</dt>
        <dd>{item.value}</dd>
      </>
    ))}
  </StyledList>
);

export { DetailList };
