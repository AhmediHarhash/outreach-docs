'use client';

import { motion } from 'framer-motion';

export default function ProgressCard({ title, current, total, items }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">{title}</h3>
        <span className="text-sm text-gray-400">
          {current}/{total} complete
        </span>
      </div>

      <div className="progress-bar mb-4">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>

      <p className="text-2xl font-bold gradient-text">{percentage}%</p>

      {items && (
        <ul className="mt-4 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <span
                className={clsx(
                  'w-2 h-2 rounded-full',
                  item.done ? 'bg-green-500' : 'bg-gray-600'
                )}
              />
              <span className={item.done ? 'text-gray-400 line-through' : 'text-gray-300'}>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
