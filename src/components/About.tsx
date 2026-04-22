import { Building2, GraduationCap, Target, Calendar } from 'lucide-react';

export default function About() {
  const experiences = [
    {
      period: 'Jan. 2021 - Present',
      role: 'Scientist - SG',
      institution: 'National Atmospheric Research Laboratory (NARL), DOS, Govt. of India',
    },
    {
      period: '2006 - 2020',
      role: 'Scientist - SD to SF',
      institution: 'National Atmospheric Research Laboratory (NARL), DOS, Govt. of India',
    },
    {
      period: '2004 - 2006',
      role: 'JSPS Fellow / Visiting Scientist',
      institution: 'Kyoto University, Japan',
    },
    {
      period: '2002 - 2003',
      role: 'Scientist',
      institution: 'University of Leipzig, Germany',
    },
    {
      period: '2001 - 2002',
      role: 'Post-Doctoral Fellow',
      institution: 'National Central University, Taiwan',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Institution
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              National Atmospheric Research Laboratory (NARL), Department of Space,
              Government of India, Gadanki, Tirupati.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              UTLS structure and dynamics, STE processes, MLT dynamics, atmospheric 
              boundary layer studies, and radar meteorology.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Advancing the understanding of atmospheric processes through innovative
              research methodologies and international collaborations.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Building2 className="text-yellow-500" />
              Professional Journey
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-yellow-400 last:border-0 pb-8 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-400" />
                  <div className="text-sm font-semibold text-yellow-500 mb-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {exp.role}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Dr. M Venkat Ratnam is a distinguished Scientist - SG at the National Atmospheric
              Research Laboratory (NARL). His research encompasses a wide range of topics 
              including atmospheric boundary layer studies, gravity waves, and the dynamics of the
              tropical atmosphere.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With over 300 high-impact publications and extensive international collaborations 
              with institutions like Kyoto University and NASA, Dr. Ratnam has significantly 
              contributed to our understanding of atmospheric processes.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              His work has been recognized through prestigious awards including the
              Shanti Swarup Bhatnagar Prize (2018) and the NASA Group Achievement Award (2019).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
