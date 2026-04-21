import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import scholarData from '../data/scholar.json';

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Publications
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Extensive research published in leading international journals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a 
            href="https://scholar.google.com/citations?user=eLx3sMcAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-yellow-400 transition-all duration-300 group"
          >
            <BookOpen className="w-12 h-12 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{scholarData.i10Index}</div>
            <div className="text-gray-600 dark:text-gray-400">i10-index</div>
          </a>

          <a 
            href="https://scholar.google.com/citations?user=eLx3sMcAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-yellow-400 transition-all duration-300 group"
          >
            <FileText className="w-12 h-12 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{scholarData.citations}</div>
            <div className="text-gray-600 dark:text-gray-400">Total Citations</div>
          </a>

          <a 
            href="https://scholar.google.com/citations?user=eLx3sMcAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-yellow-400 transition-all duration-300 group"
          >
            <ExternalLink className="w-12 h-12 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{scholarData.hIndex}</div>
            <div className="text-gray-600 dark:text-gray-400">h-index</div>
          </a>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Selected Publications
          </h3>
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-400 pl-6 py-2">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                High-impact research on atmospheric boundary layer dynamics and their role
                in tropical weather systems
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-6 py-2">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Pioneering studies on gravity wave propagation and their effects on
                atmospheric circulation
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-6 py-2">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Advanced radar meteorology techniques for improved weather prediction
                and climate modeling
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-6 py-2">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Comprehensive analysis of monsoon dynamics and tropical convection systems
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://scholar.google.com/citations?user=eLx3sMcAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
            >
              View Complete Publication List & Live Stats
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
