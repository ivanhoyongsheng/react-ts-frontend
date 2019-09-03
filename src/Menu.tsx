import React from 'react';
import { Menu, MenuItemProps, Responsive } from 'semantic-ui-react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { Location } from 'history';

const REDIRECT_PATH = '/market';

const items: MenuItemProps[] = [
  { key: 'account', active: true, name: 'My Account' },
  { key: 'market', name: 'Marketplace' },
  { key: '', name: 'Contact Us' },
  { key: '', name: 'Locations' },
  { key: '', name: 'Settings' },
  { key: '', name: 'Data' },
  {
    key: 'logout',
    name: 'Log Out',
    hide: () => {
      return window.localStorage.getItem('user') !== 'true';
    }
  }
];

const Item = Menu.Item;

interface IMenuProps extends RouteComponentProps {
  location: Location;
}
const MenuComponent: React.FC<IMenuProps> = ({ location: { pathname } }) => {
  const menu = (
    <>
      {items.map((item, i) => {
        const path = `/${item.key}`;
        return item.hide && item.hide() === true ? null : (
          <NavLink key={i} to={item.key === undefined || item.key === null || item.key === '' ? REDIRECT_PATH : path}>
            <Item active={pathname === path}>{item.name}</Item>
          </NavLink>
        );
      })}
    </>
  );
  const ResponsiveContainer = <Responsive as={() => <Menu stackable>{menu}</Menu>}></Responsive>;
  return ResponsiveContainer;
};

export default withRouter(MenuComponent);
