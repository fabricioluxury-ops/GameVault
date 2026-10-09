import React from 'react';
import { LucideIcon, Ghost } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  actionText?: string;
  actionHref?: string;
  onActionClick?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon: Icon = Ghost,
  actionText,
  actionHref,
  onActionClick,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center rounded-2xl bg-dark-900/50 border border-white/5 backdrop-blur-md max-w-lg mx-auto my-8">
      <div className="w-16 h-16 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 shadow-neon">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 mb-6 leading-relaxed">{description}</p>
      {actionText && (
        actionHref ? (
          <Link
            to={actionHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all shadow-neon hover:shadow-neon-hover active:scale-95"
          >
            {actionText}
          </Link>
        ) : onActionClick ? (
          <button
            type="button"
            onClick={onActionClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all shadow-neon hover:shadow-neon-hover active:scale-95"
          >
            {actionText}
          </button>
        ) : null
      )}
    </div>
  );
};
