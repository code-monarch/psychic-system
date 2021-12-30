import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  border-spacing: 0;
`;

export default function Table({ className, children, ...props }: { className? : string, children: React.ReactNode }) {
    return <StyledTable className={ className } { ...props }>{ children }</StyledTable>;
}

Table.Head = ({ className, children, ...props }: { className? : string, children: React.ReactNode }) => {
  return <thead className={ className } { ...props }>{ children }</thead>;
};

Table.Body = ({ className, children, ...props }: { className? : string, children: React.ReactNode }) => {
  return <tbody className={ className } { ...props }>{ children }</tbody>;
};

Table.Foot = ({ className, children, ...props }: { className? : string, children: React.ReactNode }) => {
  return <tfoot className={ className } { ...props }>{ children }</tfoot>;
};

Table.TH = ({ className, children, ...props }: { className? : string, children: React.ReactNode }) => {
  return <th className={ className } { ...props }>{ children }</th>;
};

Table.TR = ({ className, children, ...props }: { className? : string, children: React.ReactNode }) => {
  return <tr className={ className } { ...props }>{ children }</tr>;
};

Table.TD = ({ className, children, ...props }: { className? : string, children: React.ReactNode }) => {
  return <td className={ className } { ...props }>{ children }</td>;
};
