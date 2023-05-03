import styled from 'styled-components';
import React, { useState } from 'react';
import { Transaction } from '../../services/wallet-service';
import { TransactionDetailsModal } from '../modals/TransactionDetailsModal';
import eyeIcon from '../../assets/images/eye.svg';

const CellWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`;

export const ViewTransactionTableCell = ({ data }: { data: Transaction }): JSX.Element => {
  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState<boolean>(false);
  return (
    <CellWrapper>
      {/* <EyeOpenIcon onClick={() => setIsDetailsModalVisible(true)} /> */}
      <Control src={eyeIcon} alt="View" onClick={() => setIsDetailsModalVisible(true)} />
      <TransactionDetailsModal
        data={data}
        isVisible={isDetailsModalVisible}
        setIsVisible={setIsDetailsModalVisible}
        callback={() => setIsDetailsModalVisible(false)}
      />
    </CellWrapper>
  );
};

const Control = styled.img`
  height: 12px;
  width: 16px;
`;
