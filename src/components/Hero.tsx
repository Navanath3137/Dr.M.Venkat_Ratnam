import { ExternalLink, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-900 dark:text-white">MVR</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Dr. M Venkat Ratnam
          </h1>

          <div className="mb-6">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2">
              Senior Scientist
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              National Atmospheric Research Laboratory
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-full mb-8 shadow-lg">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Shanti Swarup Bhatnagar Award Recipient</span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Leading researcher in atmospheric science, specializing in radar meteorology,
            atmospheric dynamics, and climate studies with groundbreaking contributions
            to the field.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://en.wikipedia.org/wiki/M._Venkat_Ratnam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Wikipedia
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Google Scholar
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
