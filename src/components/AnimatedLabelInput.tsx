import React, { Component, SyntheticEvent } from 'react';
import styled from 'styled-components'

type InputState = {
    value: string
}

type InputProps = {
    className?: string
    label: string
}

type LabelProps = {
    hasText: boolean
}

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

const InputLabel = styled.label<LabelProps> `
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
            <InputContainer className={this.props.className}>
                <InputText type="text" value={this.state.value} onChange={(e) => {this.handleChange(e.target.value)}}/>
                <InputLabel hasText={Boolean(this.state.value)}>{this.props.label}</InputLabel>
            </InputContainer>
        )
    }
}

export default AnimatedLabelInput;