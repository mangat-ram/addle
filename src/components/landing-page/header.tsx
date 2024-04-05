'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/cypresslogo.svg'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';


const routes = [
  {
    title: 'Features', // Components
    href: '#features',
  },
  {
    title: 'Resources', //Getting Started
    href: '/',
  },
  {
    title: 'Pricing',
    href: '#pricing',
  },

  {
    title: 'Testimonials',
    href: '#testimonials',
  },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '#',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '#',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '#',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '#',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '#',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '#',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

const Header = () => {

  const [path, setPath] = useState('#products')

  return (
    <header
      className='p-4 flex justify-center items-center'
    >
      <Link
        href={'/'}
        className='w-full flex justify-left items-center gap-2'
      >
        <Image
          src={logo}
          alt='logo'
          width={25}
          height={25}
        />
        <span
          className='font-semibold dark:text-white'
        >
          addle.co
        </span>
      </Link>
      <NavigationMenu
        className='hidden md:block'
      >
        <NavigationMenuList
          className='gap-6'
        >
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath('#resources')}
              className={cn({
                'dark:text-white' : path === '#resources',
                'dark:text-white/40': path !== '#resources',
                'font-normal': true,
                'text-xl':true 
              })}
            >
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul
                className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'
              >
                <li
                  className='row-span-3'
                >
                  <span 
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'>
                      Welcome
                    </span>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

export default Header