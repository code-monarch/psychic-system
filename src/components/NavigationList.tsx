import styled from 'styled-components'

type ItemProps = {
    text: string
    icon?: string
    // TODO: Add click nav
}

type NavigationListProps = {
    className?: string
    isHorizontal?: boolean
    itemSpacing?: number
    items: Array<ItemProps>
}

const getMarginString = (isHorizontal?: boolean, spacing?: number) : string => {
    const marginValue = spacing ? (spacing + 'px') : 0;
    return isHorizontal ? ('0 ' + marginValue) : (marginValue + ' 0');
}

const Item = styled.li<{ icon?: string }> `
    ${props => props.icon && `
        padding-left: 2em;
        background: transparent url(${props.icon}) no-repeat center left;
    `}
`

const List = styled.ul<{isHorizontal?: boolean, itemSpacing?: number}> `
    padding: 0;
    margin: 0;
    list-style: none;

    ${props => `
        ${Item} {
            display: ${props.isHorizontal ? 'inline' : 'block'};
            margin: ${getMarginString(props.isHorizontal, props.itemSpacing)};
        }
    `}
`

export default function NavigationList( { className, items, isHorizontal, itemSpacing } : NavigationListProps) {
    return (
        <List className = {className} isHorizontal = {isHorizontal || false} itemSpacing = {itemSpacing}>
            {items.map((item, i) => <Item key={i} icon={item.icon}>{item.text}</Item>)}
        </List>
    )
}
