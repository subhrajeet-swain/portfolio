

import { motion } from 'framer-motion';
import React from 'react'

const MenuItem = ({ children, index, href, active }:
  {
    children: React.ReactNode;
    index: number;
    href: string;
    active: boolean;
  }) => {
  return (
    <motion.a
      href={href}
      aria-current={active ? 'location' : undefined}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}

      transition={{
        delay: index * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }}
      className='relative overflow-hidden px-2 py-1'
    >

      <span className={`${active ? 'text-primary' : 'text-content/80'} hover:text-primary transition-colors`}>{children}</span>
    </motion.a>
  )
}

export default MenuItem
