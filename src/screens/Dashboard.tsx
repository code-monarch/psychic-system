import { Component } from 'react';
import styled from 'styled-components'
import DashboardHeader from '../components/DashboardHeader';
import NavigationList from '../components/NavigationList';
import TransactionsView from '../components/TransactionsView'

type DashboardState = {
}

type DashboardProps = {
}

const Screen = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
`

const Header = styled(DashboardHeader) `
    border-bottom: 1px solid #F5F5F5;
`

const Body = styled.div `
    flex: 1;
    display: flex;
    flex-direction: row;
`

const SideNav = styled.div `
    color: #828282;
    font-size: 14px;
    line-height: 24px;
    border-right: 1px solid #F5F5F5;
    padding: 30px 0 0 40px;
    min-width: 200px;
`

const Content = styled.div `

`

// TODO: Add icons.
const navigationItems = [
    {text: "Dashboard"},
    {text: "Requests"},
    {text: "Wallets"},
    {text: "Manage Users"},
    {text: "Notifications"}
];

class Dashboard extends Component<DashboardProps, DashboardState> {
    render() {
        return (
            <Screen>
                <Header avatarUrl='https://placekitten.com/32/32'/>
                <Body>
                    <SideNav>
                        <NavigationList itemSpacing={20} items={navigationItems}/>
                    </SideNav>
                    <Content>
                        <TransactionsView></TransactionsView>
                    </Content>
                </Body>
            </Screen>
        )
    }
}

export default Dashboard;