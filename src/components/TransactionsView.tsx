import { Component } from 'react';
import Table from './Table';

type TransactionsViewState = {
}

type TransactionsViewProps = {
    className?: string
}

class TransactionsView extends Component<TransactionsViewState, TransactionsViewProps> {
    render() {
        return (
            <Table></Table>
        )
    }
}

export default TransactionsView;