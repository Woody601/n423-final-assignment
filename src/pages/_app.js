import React from 'react';
import 'semantic-ui-css/semantic.css'
import '../styles/globals.css';
;
import { Menu, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import { AppProvider } from '@/useHooks/useAppState'

export default function App({ Component, pageProps }) {
  return (
    <>
    <AppProvider>
    <Menu fixed='top'>
    <Menu.Item as={Link} href='/'>
        <Icon name='home'/>
        Home
          </Menu.Item>
        <Menu.Item name='about' as={Link} href='/about' />
        <Menu.Item name='cats' as={Link} href='/cats' />
        <Menu.Item as={Link} href='/favorites'>
        <Icon name='heart'/>
        Favorites
        </Menu.Item>
        <Menu.Item as={Link} href='/contact'>
        <Icon name='phone'/>
        Contact
        </Menu.Item>
    </Menu>
    <Component {...pageProps} />
    </AppProvider>
      
    </>
  )
}
