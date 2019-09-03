import React, { useState, useCallback } from 'react';
import { Menu, MenuItemProps, Responsive, Icon } from 'semantic-ui-react';
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
  { key: '', name: 'One' },
  { key: '', name: 'Two' },
  { key: '', name: 'Three' },
  { key: '', name: 'Four' },
  { key: '', name: 'Five' },
  { key: '', name: 'Six' },
  { key: '', name: 'Seven' },
  { key: '', name: 'Eight' },
  { key: '', name: 'Nine' },
  { key: '', name: 'Ten' },
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
  const [menuOpen, setMenuOpen] = useState(false);

  const onClickMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);
  const menuTogglerContainer = (
    <div className="menu-toggler-container">
      <ToggleMenuButton onClickMenu={onClickMenu} />
    </div>
  );

  const menuItems = items.map((item, i) => {
    const path = `/${item.key}`;
    return item.hide && item.hide() === true ? null : (
      <NavLink
        onClick={onClickMenu}
        key={i}
        to={item.key === undefined || item.key === null || item.key === '' ? REDIRECT_PATH : path}
      >
        <Item active={pathname === path}>{item.name}</Item>
      </NavLink>
    );
  });

  const collapsibleMenu = menuOpen ? (
    <>
      {menuTogglerContainer}
      {menuItems}
    </>
  ) : (
    menuTogglerContainer
  );
  return (
    <>
      <Responsive
        maxWidth={1200}
        as={() => (
          <Menu style={{ width: '100%' }} vertical>
            {collapsibleMenu}
          </Menu>
        )}
      ></Responsive>
      <Responsive minWidth={1201} as={() => <Menu>{menuItems}</Menu>}></Responsive>
    </>
  );
};

const ToggleMenuButton = (props: { onClickMenu: () => void }) => {
  return (
    <div className="menu-toggler" onClick={props.onClickMenu}>
      <Icon name="bars" /> Menu
    </div>
  );
};

export default withRouter(MenuComponent);
