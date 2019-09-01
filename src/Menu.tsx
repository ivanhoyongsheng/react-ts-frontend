import React from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { Location } from 'history';

const items: MenuItemProps[] = [
  { key: 'account', active: true, name: 'My Account' },
  { key: 'market', name: 'Marketplace' },
  { key: 'events', name: 'Upcoming Events' }
];

const Item = Menu.Item;

interface IMenuProps extends RouteComponentProps {
  location: Location;
}
const MenuComponent: React.FC<IMenuProps> = ({ location: { pathname } }) => {
  return (
    <Menu>
      {items.map((item, i) => {
        const path = `/${item.key}`;
        return (
          <NavLink key={i} to={path}>
            <Item active={pathname === path}>{item.name}</Item>
          </NavLink>
        );
      })}
    </Menu>
  );
};

export default withRouter(MenuComponent);
