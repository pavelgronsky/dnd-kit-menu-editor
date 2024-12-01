'use client';

import Link from 'next/link';
import Image from "next/image";
import { navItems } from '@/constants';
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";
import React from 'react';
import { TNaItem } from '@/types/navItems';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore // Todo: Add typing

const SidebarRecursiveComponent = ({ data }) => {
  const pathname = usePathname();
  console.log('data', data);

  return (
    <nav className='sidebar-nav'>
      <ul className='flex flex-1 flex-col gap-6'>
        {data.map((parent: TNaItem) => {
          const { name, url, icon, items } = parent;
          return (
            <React.Fragment key={name}>
              <Link href={url} className='lg:w-full'>
                <li className={
                  cn('sidebar-nav-item', pathname === url && 'shad-active')}>
                  <Image src={icon} alt={name} width={24} height={24} className={cn('nav-icon', pathname === url && 'nav-icon-active')} />
                  <p className='hidden lg:block'>{name}</p>
                </li>
              </Link>
              {items && <SidebarRecursiveComponent data={items} />}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

const Sidebar = () => {
  return <aside className='sidebar'>
    <Link href="/">
      <Image
        src={"/assets/icons/logo-full-brand.svg"}
        alt='logo'
        width={160}
        height={50}
        className='hidden h-auto lg:block'
      />
      <Image
        src={"/assets/icons/logo-brand.svg"}
        alt='logo'
        width={52}
        height={52}
        className='lg:hidden'
      />
    </Link>

    <nav className='sidebar-nav'>
      <ul className='flex flex-1 flex-col gap-6'>
        <SidebarRecursiveComponent data={navItems} />
      </ul>
    </nav>
  </aside>
}

export default Sidebar;