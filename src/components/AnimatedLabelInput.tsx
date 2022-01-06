import { useState } from 'react'
import styled from 'styled-components'

const InputContainer = styled.div `
    display: flex;
    flex: 1;
`

const InputText = styled.input `
    padding: 20px 0px 0px 0px;
    box-sizing: border-box;
    border: none;
    font-size: 16px;
    line-height: 24px;
    outline: none;
    flex: 1;
`

const InputLabel = styled.label<{hasText: boolean}> `
    position: absolute;
    pointer-events: none;
    transform: translate(0, 20px) scale(1);
    transform-origin: top left;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    color: #999999;
    font-size: 14px;

    ${InputContainer}:focus-within & {
        transform: translate(0, 0) scale(0.9);
        color: #828282;
    }

    ${props => props.hasText && `
        transform: translate(0, 0) scale(0.9);
        color: #828282;
    `}
`

export default function AnimatedLabelInput( { className, label, isPassword } : {className?: string, label: string, isPassword?: boolean } ) {
    const [inputValue, setValue] = useState('');
    const type = isPassword ? "password" : "text";

    return (
        <InputContainer className={className}>
            <InputText type={type} value={inputValue} onChange={(e) => {setValue(e.target.value)}}/>
            <InputLabel hasText={Boolean(inputValue)}>{label}</InputLabel>
        </InputContainer>
    )
}
