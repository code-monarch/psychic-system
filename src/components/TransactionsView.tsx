import styled from 'styled-components'
import PaginatedTable from './PaginatedTable';


const View = styled.div `
    display: flex;
    flex-direction: column;
    flex: 1; // TODO: Figure out how to determine this from parent
`

const TransactionsTable = styled(PaginatedTable) `

`

export default function TransactionsView() {
    return (
        <View>
            <TransactionsTable/>
        </View>
    )
}