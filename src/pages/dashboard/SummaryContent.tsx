import { InternationalMap } from 'src/components/InternationalMap';
import styled from 'styled-components';
import { RequestCards } from '../../components/RequestCards';

const Wrapper = styled.div``;

export const SummaryContent = (): JSX.Element => (
  <Wrapper>
    <InternationalMap width={650} />
    <RequestCards />
  </Wrapper>
);
