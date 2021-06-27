import React from 'react';
import { AdminLayout } from '../../HOC/AdminLayout';

export const Dashboard = props => {
  return (
    //  By wrapping the content into the AdminLayout, will pass this part as props.children into AdminLayout
    <AdminLayout title="Dashboard">
      <div className="user_dashboard">
        <div>This is the dashboard</div>
      </div>
    </AdminLayout>
  );
};
