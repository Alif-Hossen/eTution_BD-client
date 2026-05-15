import { Link, Outlet } from "react-router-dom";
import { HiOutlineHome, HiOutlineUserGroup, HiOutlineBookOpen, HiOutlineCog, HiMenuAlt2 } from "react-icons/hi";

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open bg-slate-50 dark:bg-[#020617] min-h-screen">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            
            {/* Main Content */}
            <div className="drawer-content flex flex-col">
                {/* Dashboard Navbar */}
                <header className="navbar w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10 px-4">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost text-slate-600 dark:text-slate-300">
                            <HiMenuAlt2 className="text-2xl" />
                        </label>
                    </div>
                    <div className="flex-1 px-2 font-bold text-xl text-slate-800 dark:text-white">
                        Overview
                    </div>
                    <div className="flex-none gap-2">
                        {/* User Profile Dropdown */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ring ring-[#BCE955] ring-offset-base-100 ring-offset-2">
                                    <img src="https://via.placeholder.com/150" alt="Profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                {/* Page Content Rendering */}
                <main className="p-6 md:p-10">
                    <Outlet />
                </main>


            </div>

            {/* Sidebar Section */}
            <div className="drawer-side z-20">
                <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                
                <aside className="flex flex-col min-h-full w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800">
                    {/* Logo Area */}
                    <div className="p-8 flex items-center gap-3">
                        <div className="size-10 bg-[#BCE955] rounded-xl flex items-center justify-center font-black text-black">
                            eT
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-slate-800 dark:text-white">
                            eTuition<span className="text-[#BCE955]">BD</span>
                        </span>
                    </div>

                    {/* Navigation Menu */}
                    <ul className="menu px-4 py-0 space-y-2 grow">
                        <li className="menu-title text-slate-400 dark:text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-2 px-4">
                            Main Menu
                        </li>
                        <li>
                            <Link to="/" className="flex items-center gap-4 px-4 py-3 rounded-2xl active:bg-[#BCE955] active:text-black transition-all group">
                                <HiOutlineHome className="text-xl group-hover:text-[#BCE955]" />
                                <span className="font-semibold">Home Page</span>
                            </Link>
                        </li>

                        {/* OUR DASHBOARD LINKS GO HERE --> */}

                        <li>
                            <Link to="/dashboard/my-tuitions" className="flex items-center gap-4 px-4 py-3 rounded-2xl transition-all group">
                                <HiOutlineBookOpen className="text-xl group-hover:text-[#BCE955]" />
                                <span className="font-semibold">My Tuitions</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/students" className="flex items-center gap-4 px-4 py-3 rounded-2xl transition-all group">
                                <HiOutlineUserGroup className="text-xl group-hover:text-[#BCE955]" />
                                <span className="font-semibold">Manage Students</span>
                            </Link>
                        </li>
                        
                        <div className="divider opacity-10"></div>
                        
                        <li className="menu-title text-slate-400 dark:text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-2 px-4">
                            Preferences
                        </li>
                        <li>
                            <Link to="/dashboard/settings" className="flex items-center gap-4 px-4 py-3 rounded-2xl transition-all group">
                                <HiOutlineCog className="text-xl group-hover:text-[#BCE955]" />
                                <span className="font-semibold">Settings</span>
                            </Link>
                        </li>
                    </ul>

                    {/* Footer Area of Sidebar */}
                    <div className="p-4 mt-auto">
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                            <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                                Powered by <br /> <strong>Smart Edu Systems</strong>
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default DashboardLayout;