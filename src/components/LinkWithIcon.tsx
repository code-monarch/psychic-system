import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface Icon {
  default: string;
  active: string;
}

const StyledNavLink = styled(NavLink)<{ $icon: Icon }>`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.grey};
  font-size: 14px;
  font-weight: normal;

  background: transparent url(${({ $icon }) => $icon.default}) no-repeat center left;
  background-size: 1.5em;
  padding-left: 2em;

  transition: color, background-image 0.2s ease-out;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.primary.green};
    background-image: url(${({ $icon }) => $icon.active});
    font-weight: 600;
  }
`;

function LinkWithIcon({ className, to, text, icon }: { className?: string; to: string; text: string; icon: Icon }) {
  return (
    <StyledNavLink to={to} className={className} $icon={icon}>
      {text}
    </StyledNavLink>
  );
}

export { LinkWithIcon };
