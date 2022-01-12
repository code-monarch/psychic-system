import styled from 'styled-components';

const Content = styled.div<{ $icon: string }>`
  background: transparent url(${({ $icon }) => $icon}) no-repeat center left;
  padding-left: 48px;
  background-size: contain;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: normal;
  margin-top: 0.5em;
`;

const Value = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const LabeledValueWithIcon = ({
  className,
  label,
  value,
  icon,
}: {
  className?: string;
  label: string;
  value: string;
  icon: string;
}): JSX.Element => (
  <Content className={className} $icon={icon}>
    <Value>{value}</Value>
    <Label>{label}</Label>
  </Content>
);

export { LabeledValueWithIcon };
