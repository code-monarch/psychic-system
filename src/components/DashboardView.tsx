import styled from 'styled-components'
import Tabs from './Tabs'

const View = styled.div `
    display: flex;
    flex-direction: column;
    flex: 1; // TODO: Figure out how to determine this from parent
    margin: 0 80px;
`

const Header = styled.h2 `
    color: #2E2E2E;
    font-weight: bold;
    font-size: 28px;
`

const DashTabs = styled(Tabs) `
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    border-bottom: solid 1px #E2E2E2;
`

const TabView = styled.div `
    flex: 1;
`

export default function DashboardView({ displayName }: { displayName: string }) {
    const tabItems = [ 'Summary', 'Live Exchange Rates', 'Local Tokens in Circulation', 'Departments' ];

    const handleTabSelected = (tabIndex: number) => {
        // TODO: Change here to select appropriate tabbed view
    }

    return (
        <View>
            <Header>Welcome {displayName}!</Header>
            <DashTabs onTabSelected={handleTabSelected} items={tabItems}></DashTabs>
            <TabView>
                {/* TODO: Organize tabbed views by route */}
            </TabView>
        </View>
    )
}