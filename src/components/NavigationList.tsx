import React, { Component } from 'react';
import styled from 'styled-components'

type ItemProps = {
    text: string
    icon?: string
    // TODO: Add click nav
}

type NavigationListState = {
}

type NavigationListProps = {
    className?: string
    isRow?: boolean
    itemSpacing?: number
    items: Array<ItemProps>
}

const getMarginString = (isRow?: boolean, spacing?: number) : string => {
    const marginValue = spacing ? (spacing + 'px') : 0;
    return isRow ? ('0 ' + marginValue) : (marginValue + ' 0');
}

const Item = styled.li `
    // TODO: icon CSS
`

const List = styled.ul<{isRow?: boolean, itemSpacing?: number}> `
    padding: 0;
    margin: 0;
    list-style: none;

    ${props => `
        ${Item} {
            display: ${props.isRow ? 'inline' : 'block'};
            margin: ${getMarginString(props.isRow, props.itemSpacing)}
        }
    `}
`

class NavigationList extends Component<NavigationListProps, NavigationListState> {
    render() {
        return (
            <List className = {this.props.className} isRow = {this.props.isRow || false} itemSpacing = {this.props.itemSpacing}>
                {this.props.items.map((item) => <Item>{item.text}</Item>)}
            </List>
        )
    }
}

export default NavigationList;