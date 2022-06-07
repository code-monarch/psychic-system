import styled, { css, useTheme } from 'styled-components';
import { useState } from 'react';
import { TriangleDownIcon } from '@modulz/radix-icons';
import { useTranslation } from 'react-i18next';
import { Icon, LinkWithIcon } from './LinkWithIcon';

type LinkProps = {
  text: string;
  icon: { default: string; active: string };
  to: string;
  subNavigationItems?: {
    text: string;
    to: string;
  }[];
};

type NavigationListProps = {
  className?: string;
  link: LinkProps;
  hideNavigation?: () => void;
};

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const List = styled.ul<{ isHorizontal?: boolean; itemSpacing?: number }>`
  padding: 0;
  margin: 0;
  margin-top: 12px;
  list-style: none;

  li {
    display: block;
    margin: 0;

    a {
      font-size: 12px;
      line-height: 24px;
      margin-bottom: 10px;
      display: block;
    }
  }
`;

export const SubNavigationList = ({ className, link, hideNavigation }: NavigationListProps) => {
  const [isListVisible, setIsListVisible] = useState<boolean>(true);
  const toggleNavigation = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsListVisible(!isListVisible);
  };

  const theme: any = useTheme();
  const { green } = theme.colors.primary;
  return (
    <>
      <LinkWrapper onClick={toggleNavigation}>
        <LinkWithIcon to={link.to} text={link.text} icon={link.icon} onClick={toggleNavigation} />
        <TriangleDownIcon color={green} />
      </LinkWrapper>
      {isListVisible && (
        <List className={className}>
          {link.subNavigationItems.map((item, i) => (
            <li key={`listitem-${i}`} style={{ margin: 0 }}>
              <LinkWithIcon to={item.to} text={item.text} onClick={hideNavigation} />
            </li>
          ))}
          <LanguageNavigationList />
        </List>
      )}
    </>
  );
};

export const LanguageNavigationList = () => {
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const toggleNavigation = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsListVisible(!isListVisible);
  };

  const theme: any = useTheme();
  const { green } = theme.colors.primary;
  const { t, i18n } = useTranslation();

  const languageOptions = [
    { label: t('language.en'), value: 'en' },
    { label: t('language.fr'), value: 'fr' },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
    });
  };
  return (
    <>
      <LinkWrapper onClick={toggleNavigation}>
        <StyledLink onClick={toggleNavigation} style={{ margin: 0 }}>
          {t('language.title')}
        </StyledLink>
        <TriangleDownIcon color={green} />
      </LinkWrapper>
      {isListVisible && (
        <List>
          {languageOptions.map((item, i) => (
            <li key={`listitem-${i}`} style={{ paddingLeft: 20, margin: 0 }}>
              <StyledLink
                onClick={() => changeLanguage(item.value)}
                className={i18n.resolvedLanguage === item.value ? 'active' : ''}
              >
                {item.label}
              </StyledLink>
            </li>
          ))}
        </List>
      )}
    </>
  );
};

const StyledLink = styled.p<{ $icon?: Icon }>`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.grey};
  font-size: 12px;
  font-weight: normal;
  background-size: 1.5em;
  padding-left: 2em;
  cursor: pointer;

  transition: color, background-image 0.2s ease-out;

  ${(props: { $icon?: Icon }) => {
    if (props?.$icon) {
      return css`
        background: transparent url(${props.$icon.default}) no-repeat center left;
        &.active,
        &:hover {
          background-image: url(${props.$icon.active});
        }
      `;
    }
  }}

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.primary.green};
    font-weight: 600;
  }
`;
