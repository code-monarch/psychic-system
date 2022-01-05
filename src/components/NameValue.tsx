import styled from 'styled-components'

const Container = styled.div `
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `

const Name = styled.div `
    color: #828282;
    text-overflow: ellipsis;
    margin-right: 2em;
`

const Value = styled.div `
    color: #2E2E2E;
    font-weight: 600;
`

export function NameValue({ className, name, value }: { className?: string, name: string, value: string }) {
    return (
        <Container className={className}>
            <Name>{name}</Name>
            <Value>{value}</Value>
        </Container>
    )
}