import React, { Component, SyntheticEvent } from 'react';
import styled from 'styled-components'
import emtechLogo from '../assets/images/emtech-logo.svg';

type DashboardHeaderState = {
}

type DashboardHeaderProps = {
    className?: string
    avatarUrl: string
}

const Header = styled.div `
    display: flex;
    flex-direction: row;
    padding: 24px 40px;
    > div {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`

const HeaderLeft = styled.div `
    justify-content: flex-start;
`

const HeaderRight = styled.div `
    justify-content: flex-end;
`

const Logo = styled.img `
    height: 18px;
`

const Avatar = styled.img `
    width: 32px;
    height: 32px;
    border-radius: 50%;
    line-height: 32px;
`

class DashboardHeader extends Component<DashboardHeaderProps, DashboardHeaderState> {
    render() {
        return (
            <Header className={this.props.className}>
                <HeaderLeft>
                    <Logo src = {emtechLogo}/>
                </HeaderLeft>
                <HeaderRight>
                    <Avatar src = {this.props.avatarUrl}/>
                </HeaderRight>
            </Header>
        )
    }
}

export default DashboardHeader;