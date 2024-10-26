import Sidebar from '@/Components/Admin/Sidebar';
import TopBar from '@/Components/Admin/Topbar';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ children }) {


    return (
        <>
        <div className="min-h-screen bg-red-100">
            <Sidebar />
            <TopBar />


        </div>
        </>
    );
}
