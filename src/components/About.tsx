import { Building2, GraduationCap, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Institution
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              National Atmospheric Research Laboratory (NARL), Department of Space,
              Government of India, where cutting-edge atmospheric research drives
              innovation and discovery.
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
              Specialized in atmospheric dynamics, radar meteorology, tropical
              meteorology, and climate variability with extensive field experience
              and data analysis.
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
              research methodologies and contributing to climate science for the
              benefit of society.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Dr. M Venkat Ratnam is a distinguished scientist at the National Atmospheric
            Research Laboratory, known for his pioneering work in atmospheric science.
            His research encompasses a wide range of topics including atmospheric boundary
            layer studies, gravity waves, atmospheric turbulence, and the dynamics of the
            tropical atmosphere.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            With numerous high-impact publications and international collaborations,
            Dr. Ratnam has significantly contributed to our understanding of atmospheric
            processes and their implications for weather prediction and climate modeling.
            His work has been recognized through prestigious awards including the
            Shanti Swarup Bhatnagar Prize, India's highest science award.
          </p>
        </div>
      </div>
    </section>
  );
}
