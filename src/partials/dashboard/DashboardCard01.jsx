import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../../components/DropdownEditMenu';
import { useGetAllReservationsQuery } from '../../slices/reservationApiSlice'; // Import the hook

function DashboardCard01() {
  const { data: reservations, isLoading, isError } = useGetAllReservationsQuery(); // Use the hook

  let totalReservations = 0;
  if (!isLoading && !isError && reservations) {
    totalReservations = reservations.reservations.length; // Calculate total reservations
  }
console.log("RESERVATIONS", reservations);
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link
                className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3"
                to="#0"
              >
                Option 1
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3"
                to="#0"
              >
                Option 2
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
                to="#0"
              >
                Remove
              </Link>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
          Total Reservations
        </h2>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">
          Value
        </div>
        <div className="flex items-start">
          {/* Display total reservations */}
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">
            {isLoading ? 'Loading...' : isError ? 'Error' : totalReservations}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;
