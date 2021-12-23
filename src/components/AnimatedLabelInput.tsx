import React, { Component, SyntheticEvent } from 'react';
import styled from 'styled-components'

type InputState = {
    value: string
}

type InputProps = {
    label: string
}

type LabelProps = {
    hasText: boolean
}

const InputContainer = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
`

const InputText = styled.input `
    padding: 24px 14px 14px 14px;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
    line-height: 28px;
`

const InputLabel = styled.label<LabelProps> `
    position: absolute;
    pointer-events: none;
    transform: translate(0, 24px) scale(1);
    transform-origin: top left;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    color: #71706F;
    font-size: 14px;
    left: 14px;

    ${InputContainer}:focus-within & {
        transform: translate(0, 12px) scale(0.8);
    }

    ${props => props.hasText && `
        transform: translate(0, 12px) scale(0.8);
    `}
`

class AnimatedLabelInput extends Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value: string) {
        this.setState({value: value});
    }

    render() {
        return (
            <InputContainer>
                <InputText type="text" value={this.state.value} onChange={(e) => {this.handleChange(e.target.value)}}/>
                <InputLabel hasText={Boolean(this.state.value)}>{this.props.label}</InputLabel>
            </InputContainer>
        )
    }
}

export default AnimatedLabelInput;