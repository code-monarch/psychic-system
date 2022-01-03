import styled from 'styled-components'
import React, { useState } from 'react'

const Container = styled.div `
    display: flex;
`

// This component allows for text within to change from normal to bold without changing overall layout
const BoldItemContent = ({ className, text, onClick }: { className?: string, text: string, onClick?: React.MouseEventHandler<HTMLDivElement>}) => (
    <div className={className} onClick={onClick}>
        <span>{text}</span>
        <span aria-hidden="true">{text}</span>
    </div>
)

const BoldItem = styled(BoldItemContent) `
    display: inline-flex;
    flex-direction: column;

    span ~ span {
        height: 0;
        visibility: hidden;
        overflow: hidden;
        user-select: none;
        pointer-events: none;
        font-weight: 700;
    }
`

const Tab = styled(BoldItem)<{selected: boolean}> `
    font-weight: ${props => props.selected ? '700': '400'}
`

const SelectedIndicator = styled.hr `
    height: 2px;
    border: none;
    background-color: black;
    width: 32px;
    margin: 0;
    transition: .3s ease-in-out;
`

const TabsList = styled.div<{indicatorOffset: number}> `
    position: relative;

    ${Tab} {
        display: inline-flex;
        padding: 10px 0;
        padding-inline-end: 24px;
        white-space: nowrap;
        cursor: pointer;
    }

    ${SelectedIndicator} {
        position: relative;
        left: ${props => props.indicatorOffset}px;
    }
`

export default function Tabs({ className, items, onTabSelected }: { className?: string, items: string[], onTabSelected: (tabIndex: number) => void}) {

    const [selectedTab, setSelectedTab] = useState({index: 0, offset: 0})

    const handleClick = ({index, offset}: {index: number, offset: number}) => {
        setSelectedTab({index: index, offset: offset});
        onTabSelected(index);
    }

    return (
        <Container className={className}>
            <TabsList indicatorOffset={selectedTab.offset}>
                {items.map((item, i) => 
                    <Tab key={'tab-' + i} text={item} selected={i === selectedTab.index} onClick={(e) => handleClick({index: i, offset: e.currentTarget.offsetLeft})}/>
                )}
                <SelectedIndicator aria-hidden="true"/>
            </TabsList>
        </Container>
    )
}
