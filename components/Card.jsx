'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Card({ children, className, delay = 0, hover = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={clsx(
        'bg-[#141414] border border-[#262626] rounded-xl p-6',
        hover && 'hover:border-indigo-500/50 hover:bg-[#1a1a1a] transition-all duration-200',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
