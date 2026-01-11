'use client';

import { useState } from 'react';
import { Plus, MoreHorizontal, Calendar, Building2, ExternalLink } from 'lucide-react';

// Mock data - will be replaced with API calls
const initialApplications = {
  saved: [
    { id: 1, title: 'Senior Developer', company: 'TechCorp', match: 94, applied: null },
    { id: 2, title: 'Full Stack Engineer', company: 'InnovateCo', match: 88, applied: null },
  ],
  applied: [
    { id: 3, title: 'Backend Engineer', company: 'DataFlow', match: 85, applied: '2 days ago' },
    { id: 4, title: 'Software Engineer', company: 'CloudTech', match: 82, applied: '3 days ago' },
    { id: 5, title: 'Platform Engineer', company: 'ScaleUp', match: 79, applied: '5 days ago' },
  ],
  screening: [
    { id: 6, title: 'Senior Backend', company: 'FinTech Ltd', match: 91, applied: '1 week ago' },
  ],
  interview: [
    { id: 7, title: 'Tech Lead', company: 'GrowthCo', match: 87, applied: '2 weeks ago', nextStep: 'Technical Interview - Jan 15' },
    { id: 8, title: 'Staff Engineer', company: 'Enterprise Inc', match: 83, applied: '2 weeks ago', nextStep: 'Final Round - Jan 18' },
  ],
  offer: [
    { id: 9, title: 'Senior SWE', company: 'DreamJob Inc', match: 96, applied: '3 weeks ago', salary: '£95,000' },
  ],
};

const columns = [
  { id: 'saved', title: 'Saved', color: 'bg-ocean-600' },
  { id: 'applied', title: 'Applied', color: 'bg-accent-500/50' },
  { id: 'screening', title: 'Screening', color: 'bg-warning-500/50' },
  { id: 'interview', title: 'Interview', color: 'bg-success-500/50' },
  { id: 'offer', title: 'Offer', color: 'bg-success-500' },
];

export default function ApplicationsPage() {
  const [applications, setApplications] = useState(initialApplications);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, item, sourceColumn) => {
    setDraggedItem({ item, sourceColumn });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    if (!draggedItem || draggedItem.sourceColumn === targetColumn) {
      setDraggedItem(null);
      return;
    }

    setApplications(prev => {
      const newApps = { ...prev };
      // Remove from source
      newApps[draggedItem.sourceColumn] = newApps[draggedItem.sourceColumn].filter(
        app => app.id !== draggedItem.item.id
      );
      // Add to target
      newApps[targetColumn] = [...newApps[targetColumn], draggedItem.item];
      return newApps;
    });
    setDraggedItem(null);
  };

  const totalCount = Object.values(applications).flat().length;

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Applications</h1>
          <p className="text-text-secondary mt-1">
            Track and manage your {totalCount} job applications
          </p>
        </div>
        <button className="btn-primary">
          <Plus className="w-4 h-4" />
          Add Application
        </button>
      </div>

      {/* Stats Bar */}
      <div className="flex gap-4 mb-6">
        {columns.map((col) => (
          <div key={col.id} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${col.color}`} />
            <span className="text-sm text-text-secondary">
              {col.title}: <span className="text-text-primary font-medium">{applications[col.id].length}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Kanban Board */}
      <div className="flex-1 flex gap-4 overflow-x-auto pb-4">
        {columns.map((column) => (
          <div
            key={column.id}
            className="kanban-column"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            {/* Column Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${column.color}`} />
                <h3 className="font-medium text-text-primary">{column.title}</h3>
              </div>
              <span className="text-sm text-text-muted">{applications[column.id].length}</span>
            </div>

            {/* Cards */}
            <div className="space-y-3">
              {applications[column.id].length === 0 ? (
                <p className="text-sm text-text-muted text-center py-8">
                  No applications
                </p>
              ) : (
                applications[column.id].map((app) => (
                  <div
                    key={app.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, app, column.id)}
                    className="kanban-card"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-text-primary text-sm">{app.title}</h4>
                      <button className="p-1 text-text-muted hover:text-text-primary hover:bg-ocean-700 rounded">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-text-muted flex items-center gap-1 mb-2">
                      <Building2 className="w-3 h-3" />
                      {app.company}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className={`match-badge text-xs ${
                        app.match >= 90 ? 'match-excellent' : app.match >= 80 ? 'match-good' : 'match-fair'
                      }`}>
                        {app.match}% match
                      </span>

                      {app.applied && (
                        <span className="text-xs text-text-muted">{app.applied}</span>
                      )}
                    </div>

                    {/* Next Step for Interview stage */}
                    {app.nextStep && (
                      <div className="mt-2 pt-2 border-t border-ocean-600">
                        <p className="text-xs text-warning-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {app.nextStep}
                        </p>
                      </div>
                    )}

                    {/* Salary for Offer stage */}
                    {app.salary && (
                      <div className="mt-2 pt-2 border-t border-ocean-600">
                        <p className="text-sm text-success-400 font-medium">{app.salary}</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
