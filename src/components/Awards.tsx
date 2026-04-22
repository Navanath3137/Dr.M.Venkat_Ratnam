import { Award, Trophy, Medal, Star, Users, ClipboardCheck } from 'lucide-react';

export default function Awards() {
  const awards = [
    {
      icon: Trophy,
      title: 'Shanti Swarup Bhatnagar Prize',
      year: '2018',
      description: 'India\'s highest science award in Earth, Atmosphere, Ocean and Planetary Sciences, presented for outstanding contributions.',
      highlight: true,
    },
    {
      icon: Medal,
      title: 'NASA Group Achievement Award',
      year: '2019',
      description: 'For the Balloon measurement campaign of the Asian Tropopause Aerosol Layer (BATAL).',
      highlight: false,
    },
    {
      icon: Star,
      title: 'NASI-SCOPUS Young Scientist Award',
      year: '2010',
      description: 'Awarded under Earth and Oceanography category by National Academy of Sciences, India and Elsevier.',
      highlight: false,
    },
    {
      icon: Award,
      title: 'Fellow, AP Academy of Sciences',
      year: '2012',
      description: 'In recognition of significant contributions made to Science and Technology.',
      highlight: false,
    },
  ];

  const recognitions = [
    'Advisory Committee member - UNEP Ozone Secretariat',
    'Chair - SCOSTEP award nomination committee',
    'Advisory panel member - South Asian Meteorological Association (SAMA)',
    'Expert Member - DST Inspire Fellow selections',
    'Editorial Board member of several prestigious journals',
    'Scientific Discipline Representatives (SDR) of SCOSTEP from India',
  ];

  return (
    <section id="awards" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Awards & Recognition
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Honored for excellence and groundbreaking contributions to atmospheric science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  award.highlight
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-2xl'
                    : 'bg-gray-50 dark:bg-gray-800 hover:shadow-xl border border-transparent dark:hover:border-yellow-400/30'
                }`}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${
                      award.highlight
                        ? 'bg-white/20 backdrop-blur-sm'
                        : 'bg-yellow-400'
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        award.highlight ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div
                      className={`text-sm font-semibold mb-2 ${
                        award.highlight
                          ? 'text-gray-900/80'
                          : 'text-yellow-500'
                      }`}
                    >
                      {award.year}
                    </div>
                    <h3
                      className={`text-xl font-bold mb-3 ${
                        award.highlight
                          ? 'text-gray-900'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {award.title}
                    </h3>
                    <p
                      className={`leading-relaxed ${
                        award.highlight
                          ? 'text-gray-900'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <ClipboardCheck className="text-yellow-500" />
                Professional Recognitions
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {recognitions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2.5 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/3 flex flex-col justify-center items-center p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
              <Users className="w-12 h-12 text-yellow-500 mb-4" />
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Scientific Societies</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Life Member of IMS, IASTA, Indian Science Congress Association, and Member of AGU.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

