import { useState, useEffect } from 'react'
import { Outlet, ScrollRestoration, useSearchParams } from 'react-router-dom'
import Header from './components/Header'
import Drawer from '../components/Drawer/Drawer'
import { motion, AnimatePresence } from 'framer-motion'
import MobileNavigation from './components/MobileNavigation'

export default function DefaultLayout () {
  const [searchParams, setSearchParams] = useSearchParams()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const token = searchParams.get('token')
  if (token) {
    localStorage.setItem('TOKEN', token)
  }

  useEffect(() => {
    if (token) {
      searchParams.delete('token')
      setSearchParams(searchParams)
    }
  }, [])

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  return (
    <>
      <Header onMobileMenuClick={toggleDrawer} />
      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer}>
        <MobileNavigation onSelectMenu={closeDrawer} />
      </Drawer>
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 250 }}
            exit={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div
              className="absolute inset-0 bg-black opacity-5"
              onClick={closeDrawer}></div>
            <Outlet />
          </motion.div>
        )}
        {!drawerOpen && <Outlet />}
      </AnimatePresence>
      <ScrollRestoration />
    </>
  )
}
