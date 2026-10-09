import React from 'react';
import { Game } from '../../types/game';
import { GameCard } from './GameCard';
import { EmptyState } from '../common/EmptyState';
import { Gamepad2 } from 'lucide-react';

interface GameGridProps {
  games: Game[];
  emptyTitle?: string;
  emptyDescription?: string;
  emptyActionText?: string;
  emptyActionHref?: string;
  onEmptyAction?: () => void;
}

export const GameGrid: React.FC<GameGridProps> = ({
  games,
  emptyTitle = 'No encontramos videojuegos',
  emptyDescription = 'Intenta ajustar los filtros de búsqueda para encontrar lo que buscas.',
  emptyActionText,
  emptyActionHref,
  onEmptyAction,
}) => {
  if (games.length === 0) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        icon={Gamepad2}
        actionText={emptyActionText}
        actionHref={emptyActionHref}
        onActionClick={onEmptyAction}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};
