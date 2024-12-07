import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>
        <div className="bg-gray-50 p-4 rounded-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Welcome, {user?.username}!</h2>
          <p className="text-gray-600">
            This is your personal dashboard. Here you can manage your account and access various features.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Profile</h3>
            <p className="text-gray-600">Manage your profile information and settings</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Activity</h3>
            <p className="text-gray-600">View your recent activity and statistics</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">Settings</h3>
            <p className="text-gray-600">Configure your account preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
