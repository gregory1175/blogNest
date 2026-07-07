'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react';

interface INavLink {
    href: string;
    children?: ReactNode;
    activeClassName?: 'active' | 'disable';
    style?: React.CSSProperties; 
}

export function NavLink({style, href, children, activeClassName = 'active', ...props }: INavLink) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link style={style} href={href} className={isActive ? activeClassName : ''} {...props}>
      {children}
    </Link>
  )
}
