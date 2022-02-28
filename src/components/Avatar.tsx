import styled from 'styled-components';
import profileIcon from '../assets/images/icons/profile.svg';

const AvatarImage = styled.img`
  max-width: 40px;
`;

export const UserAvatar = (): JSX.Element => <AvatarImage src={profileIcon} alt="Profile" />;
