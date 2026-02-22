import { Award, Trophy, Medal, Star } from 'lucide-react';

export default function Awards() {
  const awards = [
    {
      icon: Trophy,
      title: 'Shanti Swarup Bhatnagar Prize',
      year: 'Recent',
      description: 'India\'s highest science award, presented by the Prime Minister for outstanding contributions to atmospheric sciences.',
      highlight: true,
    },
    {
      icon: Medal,
      title: 'CSIR Young Scientist Award',
      year: 'Previous',
      description: 'Recognition for exceptional research contributions in the early career.',
      highlight: false,
    },
    {
      icon: Star,
      title: 'Best Paper Awards',
      year: 'Multiple Years',
      description: 'Several prestigious awards for outstanding research publications in top-tier journals.',
      highlight: false,
    },
    {
      icon: Award,
      title: 'International Recognition',
      year: 'Ongoing',
      description: 'Invited speaker at major international conferences and symposia worldwide.',
      highlight: false,
    },
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

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  award.highlight
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-2xl'
                    : 'bg-gray-50 dark:bg-gray-800 hover:shadow-xl'
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
                          ? 'text-gray-900'
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

        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-50 dark:bg-gray-800 rounded-2xl px-8 py-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              These accolades reflect a commitment to scientific excellence and innovation
              in understanding Earth's atmosphere
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

