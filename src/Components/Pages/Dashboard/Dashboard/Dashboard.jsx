import React from 'react';
import { TfiMenu } from "react-icons/tfi";
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const sidebar = <>
        <li><NavLink to="profile">Profile</NavLink></li>
        <li><NavLink to='additem'>Add Item</NavLink></li>

    </>



    return (
        <div className='flex flex-col md:flex-row '>
            <div>
                <div className='hidden md:flex'>
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu gap-5 p-4 w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                {
                                    sidebar
                                }
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='flex md:hidden'>
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn btn-primary drawer-button"> < TfiMenu /></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu gap-5 p-4 w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                {
                                    sidebar
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
               <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;