import styled from 'styled-components';
import { Flex } from './styled';

const Container = styled(Flex.Row)`
  margin: 8px 0;
  font-size: 0.75em;
  line-height: 1.5em;
  align-items: center;
`;

const Name = styled.div`
  font-size: 12px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.primary.black};
`;

const Value = styled.div`
  color: ${({ color }) => color};
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 6px;
`;

export const AssetCard = ({
  className,
  name,
  value,
  color,
  symbol,
}: {
  className?: string;
  name: string;
  value: string;
  color: string;
  symbol: string;
}) => (
  <Container className={className}>
    <AssetIcon color={color}>
      <div>
        <p>{symbol}</p>
      </div>
    </AssetIcon>
    <div>
      <Value color={color}>{value}</Value>
      <Name>{name}</Name>
    </div>
  </Container>
);

AssetCard.Value = Value;
AssetCard.Name = Name;

const AssetIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  background-color: ${({ color }) => `${color}33`};

  div {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border: 1px solid ${({ color }) => `${color}`};
    color: ${({ color }) => `${color}`};
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      text-align: center;
      font-size: 10px;
      font-family: 'ProximaNovaBold', sans-serif;
    }
  }
`;
