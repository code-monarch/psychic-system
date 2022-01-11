import styled from 'styled-components'
import ComparisonChart from './ComparisonChart'
import { Title } from './styled'
import { NameValue } from './NameValue';

const StyledNameValue = styled(NameValue) `
    margin: 8px 0;
    font-size: 0.75em;
    line-height: 1.5em;

    ${NameValue.Name} {
        color: #828282;
    }

    ${NameValue.Value} {
        color: #2E2E2E;
        font-weight: 600;
    }
`

const Divider = styled.hr `
    border: 0;
    height: 1px;
    background-color: #F5F5F5;
    margin: 18px 0;
`

function CirculationComponent() {
    // TODO: Replace with data from API
    const options = [
        {
            label: 'International',
            color: '#279F70',
            value: 86
        },
        {
            label: 'Domestic',
            color: '#015E5F',
            value: 14
        }
    ];
    return (
        <div>
            <Title>Tokens in Circulation</Title>
            <ComparisonChart options={options}/>
            <StyledNameValue name="Total Bitkob" value="200.1B (BTKB)"/>
            <StyledNameValue name="Total USDC Reserves" value="1.97B (USDC)"/>
            <Divider aria-hidden="true"/>
            <Title>Fiat in Circulation</Title>
            <StyledNameValue name="Total Gourdes (HTG)" value="G231.2B"/>
            <StyledNameValue name="Total USD Reserves" value="$2.37B"/>
        </div>
    )
}

export { CirculationComponent }
