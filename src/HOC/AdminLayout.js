import React from 'react';
import AdminNav from '../components/Admin/Nav/AdminNav';

// {props.chidren} will receive the return value from the child component
export const AdminLayout = props => {
  return (
    <div className="admin_container">
      <div className="admin_left_nav">
        <AdminNav />
      </div>
      <div className="admin_right">
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
};
