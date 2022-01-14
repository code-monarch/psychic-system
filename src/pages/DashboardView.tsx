import styled from 'styled-components';
import { useState } from 'react';
import { Tabs } from '../components/Tabs';
import { Flex } from '../components/styled';
import { DepartmentsContent, ExchangeRatesContent, SummaryContent, SummarySidePanel, TokensContent } from './dashboard';

const Wrapper = styled.div`
  margin: 0 80px;
`;

const ContentView = styled.div``;

const Header = styled.h2`
  color: #2e2e2e;
  font-weight: bold;
  font-size: 28px;
`;

const Body = styled(Flex.Row)``;

const StyledTabs = styled(Tabs)`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  border-bottom: solid 1px #e2e2e2;
  margin-bottom: 40px;
`;

const TabView = styled.div``;

const SideView = styled.div`
  margin-left: 60px;
`;

export const DashboardView = ({ displayName }: { displayName: string }): JSX.Element => {
  const tabViews = [<SummaryContent />, <ExchangeRatesContent />, <TokensContent />, <DepartmentsContent />];
  const sideViews = [<SummarySidePanel />];
  const [selectedTabView, setSelectedTabView] = useState(tabViews[0]);

  const handleTabSelected = (tabIndex: number) => {
    setSelectedTabView(tabViews[tabIndex]);
  };

  return (
    <Wrapper>
      <Header>Welcome {displayName}!</Header>
      <Body>
        <ContentView>
          <StyledTabs onTabSelected={handleTabSelected} />
          <TabView>{selectedTabView}</TabView>
        </ContentView>
        <SideView>{sideViews[0]}</SideView>
      </Body>
    </Wrapper>
  );
};
