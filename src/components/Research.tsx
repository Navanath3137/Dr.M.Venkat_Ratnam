import { Cloud, Wind, Waves, Thermometer, Radio, Globe, GraduationCap, Handshake } from 'lucide-react';
import WorldMap from './WorldMap';

export default function Research() {
  const researchAreas = [
    {
      icon: Radio,
      title: 'Radar Meteorology',
      description: 'Advanced radar techniques for atmospheric observations and weather monitoring.',
    },
    {
      icon: Wind,
      title: 'Atmospheric Dynamics',
      description: 'Study of atmospheric motions and the forces that drive weather patterns.',
    },
    {
      icon: Waves,
      title: 'Gravity Waves',
      description: 'Investigation of atmospheric gravity waves and their role in energy transfer.',
    },
    {
      icon: Cloud,
      title: 'Tropical Meteorology',
      description: 'Research on tropical weather systems, monsoons, and convective processes.',
    },
    {
      icon: Thermometer,
      title: 'Boundary Layer Studies',
      description: 'Analysis of atmospheric boundary layer dynamics and surface interactions.',
    },
    {
      icon: Globe,
      title: 'Climate Variability',
      description: 'Understanding climate patterns, trends, and their long-term implications.',
    },
  ];

  const collaborators = [
    { name: 'Kyoto University', country: 'Japan' },
    { name: 'Leibniz Institute of Atmospheric Physics', country: 'Germany' },
    { name: 'NASA', country: 'USA' },
    { name: 'CNRS', country: 'France' },
    { name: 'UCAR', country: 'USA' },
    { name: 'KAUST', country: 'Saudi Arabia' },
  ];

  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Research Impact
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Pioneering research across multiple domains of atmospheric science
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-800"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-yellow-500" />
              Mentorship & Guidance
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-1">16</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ph.D. Awarded</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-1">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Current Ph.D.</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-1">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Post-Docs</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-1">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Guided</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Handshake className="text-yellow-500" />
              Global Collaborations
            </h3>
            <div className="space-y-4">
              {collaborators.map((collab, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{collab.name}</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-yellow-400 text-gray-900 rounded-full">{collab.country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-yellow-500" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Global Research Footprint
            </h3>
          </div>
          <WorldMap />
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Research Metrics & Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">300+</div>
              <div className="text-gray-600 dark:text-gray-400">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">10,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Citations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">120+</div>
              <div className="text-gray-600 dark:text-gray-400">Invited Talks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Collaborations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
