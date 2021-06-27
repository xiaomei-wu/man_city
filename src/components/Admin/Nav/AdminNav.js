import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { ListItem } from '@material-ui/core';
import { handleLogout } from '../../utils/tools';

const AdminNav = props => {
  const links = [
    {
      title: 'Matches',
      linkTo: '/admin_matches',
    },
    {
      title: 'Players',
      linkTo: '/admin_players',
    },
  ];
  const renderItems = () =>
    links.map(link => (
      <Link to={link.linkTo} key={link.title}>
        <ListItem button className="admin_nav_link">
          {link.title}
        </ListItem>
      </Link>
    ));

  return (
    <div>
      {renderItems()}
      <ListItem
        button
        className="admin_nav_link"
        onClick={() => handleLogout()}
      >
        Log out
      </ListItem>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default withRouter(AdminNav);
// AdminNav is not a direct child of Route, so it will not inherit the props of route
// hence, needs the withRouter Hoc
