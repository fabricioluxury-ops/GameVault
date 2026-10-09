import React, { useState } from 'react';
import { SystemRequirements as ISystemRequirements } from '../../types/game';
import { Cpu, HardDrive, Monitor, MemoryStick as Memory, Layers, Info } from 'lucide-react';

interface SystemRequirementsProps {
  requirements?: ISystemRequirements;
  gameTitle: string;
}

export const SystemRequirements: React.FC<SystemRequirementsProps> = ({ requirements, gameTitle }) => {
  const [activeTab, setActiveTab] = useState<'minimum' | 'recommended'>('minimum');

  if (!requirements) {
    return (
      <div className="p-6 rounded-2xl bg-dark-900 border border-white/10 text-slate-400 flex items-center gap-3">
        <Info className="w-5 h-5 text-violet-400 flex-shrink-0" />
        <p className="text-sm">
          Este videojuego está optimizado para su arquitectura de consola nativa o no requiere configuración de hardware para PC.
        </p>
      </div>
    );
  }

  const specs = requirements[activeTab];

  const items = [
    { label: 'Sistema Operativo', value: specs.os, icon: Layers },
    { label: 'Procesador (CPU)', value: specs.processor, icon: Cpu },
    { label: 'Memoria RAM', value: specs.memory, icon: Memory },
    { label: 'Tarjeta Gráfica (GPU)', value: specs.graphics, icon: Monitor },
    { label: 'Almacenamiento', value: specs.storage, icon: HardDrive },
    ...(specs.directX ? [{ label: 'DirectX', value: specs.directX, icon: Info }] : []),
  ];

  return (
    <div className="rounded-2xl bg-dark-900 border border-white/10 overflow-hidden">
      {/* Tab Switcher */}
      <div className="flex border-b border-white/10 bg-dark-850 p-1.5 gap-1.5">
        <button
          type="button"
          onClick={() => setActiveTab('minimum')}
          className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all ${
            activeTab === 'minimum'
              ? 'bg-violet-600 text-white shadow-neon'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          Requisitos Mínimos
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('recommended')}
          className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all ${
            activeTab === 'recommended'
              ? 'bg-violet-600 text-white shadow-neon'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          Requisitos Recomendados
        </button>
      </div>

      {/* Specifications list */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5"
            >
              <div className="p-2 rounded-lg bg-violet-600/10 text-violet-400 border border-violet-500/20 flex-shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-slate-200 block mt-0.5 break-words">
                  {item.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
