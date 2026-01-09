'use client';

import clsx from 'clsx';

const statusConfig = {
  pending: {
    label: 'Pending',
    className: 'badge-pending',
  },
  'in-progress': {
    label: 'In Progress',
    className: 'badge-in-progress',
  },
  done: {
    label: 'Done',
    className: 'badge-done',
  },
  blocked: {
    label: 'Blocked',
    className: 'badge-blocked',
  },
};

export default function StatusBadge({ status }) {
  const config = statusConfig[status] || statusConfig.pending;

  return (
    <span className={clsx('badge', config.className)}>
      {config.label}
    </span>
  );
}
