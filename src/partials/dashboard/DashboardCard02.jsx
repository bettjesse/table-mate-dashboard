import React from 'react';
import { useGetAllUsersQuery } from '../../slices/userApiSlice'; // Import the hook
import Icon from '../../images/icon-02.svg';
import EditMenu from '../../components/DropdownEditMenu';

function DashboardCard02() {
  const { data: users, isLoading, error } = useGetAllUsersQuery(); // Fetch all users
console.log("USERS", users);
  const userCount = users ? users.length : 0; // Calculate the number of users

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 02" />
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <a
                className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3"
                href="#0"
              >
                Option 1
              </a>
            </li>
            <li>
              <a
                className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3"
                href="#0"
              >
                Option 2
              </a>
            </li>
            <li>
              <a
                className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
                href="#0"
              >
                Remove
              </a>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Total Users</h2>
        <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">
          {isLoading ? 'Loading...' : error ? 'Error' : userCount}
        </div>
      </div>
    </div>
  );
}

export default DashboardCard02;
