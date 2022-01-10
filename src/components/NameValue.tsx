import styled from 'styled-components'
import { Flex } from './styled'

const Container = styled(Flex.Row) `
    justify-content: space-between;
`

const Name = styled.div `
    text-overflow: ellipsis;
    margin-right: 2em;
`

const Value = styled.div `
`

function NameValue({ className, name, value }: { className?: string, name: string, value: string }) {
    return (
        <Container className={className}>
            <Name>{name}</Name>
            <Value>{value}</Value>
        </Container>
    )
}

NameValue.Name = Name;

NameValue.Value = Value;

export { NameValue }
