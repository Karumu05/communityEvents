"use client"
import { CalendarIcon, HomeIcon, UserIcon, ArrowRightEndOnRectangleIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function SideNav() {
    const pathName = usePathname()

    return (
        <nav className="flex h-full justify-evenly items-center md:flex-col bg-red-400 p-4">
            <div className={clsx('buttonHover', {'opacity-50': pathName === "/home"})}>
                <Link href="/home">
                    <HomeIcon className='w-20 h-20'/>
                </Link>
            </div>

            <div className={clsx('buttonHover', {'opacity-50': pathName === "/home/calendar"})}>
                <Link href="/home/calendar">
                    <CalendarIcon className='w-20 h-20'/>
                </Link>
            </div>

            <div className={clsx('buttonHover', {'opacity-50': pathName === "/home/profile"})}>
                <Link href="/home/profile">
                    <UserIcon className='w-20 h-20'/>
                </Link>
            </div>

            <div className='hover:opacity-50'>
                <a href="/api/auth/logout">
                    <ArrowRightEndOnRectangleIcon className='w-20 h-20'/>
                </a>
            </div>

        </nav>
    )
}