import React from 'react';

export default function WorldMap() {
  const locations = [
    { name: 'India (NARL)', x: 675, y: 310 },
    { name: 'Japan (Kyoto)', x: 795, y: 245 },
    { name: 'USA (NASA/UCAR)', x: 180, y: 230 },
    { name: 'Germany (Leipzig)', x: 495, y: 205 },
    { name: 'France (CNRS)', x: 475, y: 215 },
    { name: 'Taiwan (NCU)', x: 755, y: 280 },
    { name: 'Saudi Arabia (KAUST)', x: 585, y: 285 },
    { name: 'South Korea', x: 785, y: 235 },
  ];

  return (
    <div className="relative w-full aspect-[2/1] bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 p-4">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full fill-gray-300 dark:fill-gray-700 transition-colors duration-500"
      >
        {/* Simplified World Map Path */}
        <path d="M157.3,139.7c-5.1-0.9-10.3,0.1-14,4.2c-3,3.3-4.1,8-2.9,12.4c1.2,4.4,4.8,7.7,9.3,8.7c4.5,1,9.2-0.5,12.2-4
          c2.4-2.8,3.5-6.5,2.9-10.2C164.2,146.5,161.4,142,157.3,139.7z M214.2,217.1c-15.6-24.3-42.9-42.4-71.8-42.4
          c-11.8,0-23.2,3-33.3,8.7c-10.1,5.6-18.4,13.8-24.1,23.8c-11.4,20-11.4,44.7,0,64.7c5.7,10,14,18.2,24.1,23.8
          c10.1,5.6,21.5,8.7,33.3,8.7c28.9,0,56.2-18.1,71.8-42.4C221.7,249.7,221.7,229.4,214.2,217.1z M528.1,124.7
          c-37.5,0-71.5,15.1-96.5,40.1c-25,25-40.1,59-40.1,96.5s15.1,71.5,40.1,96.5c25,25,59,40.1,96.5,40.1s71.5-15.1,96.5-40.1
          c25-25,40.1-59,40.1-96.5S649.6,149.7,624.6,124.7C599.6,139.8,565.6,124.7,528.1,124.7z M828.1,224.7c-37.5,0-71.5,15.1-96.5,40.1
          c-25,25-40.1,59-40.1,96.5s15.1,71.5,40.1,96.5c25,25,59,40.1,96.5,40.1s71.5-15.1,96.5-40.1c25-25,40.1-59,40.1-96.5
          S865.6,224.7,828.1,224.7z" 
          className="opacity-20"
        />
        {/* More realistic but simplified continents */}
        <path d="M180,120 L220,130 L250,180 L230,250 L180,300 L120,280 L100,220 L130,150 Z" /> {/* North America */}
        <path d="M200,320 L250,350 L230,450 L180,480 L150,420 Z" /> {/* South America */}
        <path d="M450,120 L550,110 L600,150 L580,250 L500,280 L440,250 Z" /> {/* Europe & Africa Part */}
        <path d="M480,280 L580,300 L600,450 L520,480 L450,420 Z" /> {/* Africa */}
        <path d="M600,150 L850,120 L950,250 L850,400 L700,350 L600,250 Z" /> {/* Asia */}
        <path d="M800,380 L900,400 L880,480 L820,470 Z" /> {/* Australia */}

        {/* Highlighted Points */}
        {locations.map((loc, i) => (
          <g key={i} className="group cursor-pointer">
            <circle
              cx={loc.x}
              cy={loc.y}
              r="6"
              className="fill-yellow-400 animate-pulse"
            />
            <circle
              cx={loc.x}
              cy={loc.y}
              r="12"
              className="fill-yellow-400/30 scale-0 group-hover:scale-100 transition-transform duration-300"
            />
            <text
              x={loc.x + 10}
              y={loc.y + 5}
              className="hidden group-hover:block fill-gray-900 dark:fill-white text-[12px] font-bold pointer-events-none"
            >
              {loc.name}
            </text>
          </g>
        ))}
      </svg>
      <div className="absolute bottom-4 left-4 flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Research Collaboration</span>
        </div>
      </div>
    </div>
  );
}
