import FloatingNav from "@/components/FloatingNav"
import pawsoutLogo from "@/public/pawsout-logo.png"
import Image from "next/image"

export default function Home() {
  return <div></div>
}

// import FloatingNav from '@/components/FloatingNav';
// import { Apple, ArrowRight, Star } from 'lucide-react';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-stone-100">
//       <FloatingNav />

//       {/* Main Content */}
//       <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div>
//             {/* Badge */}
//             <p className="text-xs font-semibold text-gray-500 tracking-widest mb-8">
//               PAWSOUT · IOS & IPADOS 17+ · 33 LANGUAGES
//             </p>

//             {/* Headline */}
//             <h1 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
//               Is it safe to walk your <em className="not-italic">dog</em> right now?
//             </h1>

//             {/* Description */}
//             <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
//               PawsOut fuses live weather, air quality, pollen, UV, and pavement temperature into a single 0–100 walk score — tuned to your dog's breed, size, age, and coat.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-12">
//               <a
//                 href="https://apps.apple.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
//               >
//                 <Apple className="w-5 h-5" />
//                 Download on App Store
//               </a>
//               <a
//                 href="#how-it-works"
//                 className="inline-flex items-center justify-center gap-2 border-2 border-gray-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:border-gray-600 hover:bg-gray-50 transition-colors"
//               >
//                 See the engine
//                 <ArrowRight className="w-5 h-5" />
//               </a>
//             </div>

//             {/* Footer Stats */}
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-gray-600">
//               <div className="flex items-center gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
//                 ))}
//                 <span className="ml-2 font-semibold">4.9 · 2,841 ratings</span>
//               </div>
//               <span>33 languages</span>
//               <span className="font-semibold">Editor's Pick · Pets</span>
//             </div>
//           </div>

//           {/* Right Side - Phone Mockup */}
//           <div className="flex justify-center md:justify-end">
//             <div className="w-full max-w-xs">
//               {/* iPhone Frame */}
//               <div className="bg-black rounded-3xl p-3 shadow-2xl" style={{ aspectRatio: '9/19' }}>
//                 <div className="bg-stone-100 rounded-2xl w-full h-full p-6 flex flex-col justify-between">
//                   {/* Status Bar */}
//                   <div className="text-xs font-semibold text-gray-600 mb-4">
//                     <div className="flex justify-between items-center mb-2">
//                       <span>9:41</span>
//                       <span>⚫</span>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1 flex flex-col items-center justify-center">
//                     <p className="text-xs text-gray-500 mb-2">TODAY · BROOKLYN, NY</p>
//                     <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Walk score</h2>

//                     {/* Circular Score */}
//                     <div className="relative w-32 h-32 mb-8">
//                       <svg className="w-full h-full transform -rotate-90">
//                         <circle cx="64" cy="64" r="60" fill="none" stroke="#e5e7eb" strokeWidth="8" />
//                         <circle
//                           cx="64"
//                           cy="64"
//                           r="60"
//                           fill="none"
//                           stroke="#5EA280"
//                           strokeWidth="8"
//                           strokeDasharray={`${(82 / 100) * 377} 377`}
//                         />
//                       </svg>
//                       <div className="absolute inset-0 flex flex-col items-center justify-center">
//                         <span className="text-4xl font-bold text-gray-900">82</span>
//                         <span className="text-xs text-gray-600">OF 100</span>
//                       </div>
//                     </div>

//                     {/* Status Text */}
//                     <p className="text-xs font-semibold text-brand mb-6">● Good walk · cooler hour ahead</p>

//                     {/* Metrics */}
//                     <div className="space-y-3 w-full text-xs">
//                       <div className="flex items-center justify-between">
//                         <span className="text-gray-600">Heat</span>
//                         <div className="flex items-center gap-2 flex-1 ml-4">
//                           <div className="h-1.5 flex-1 bg-brand rounded-full"></div>
//                           <span className="text-gray-600">19°C</span>
//                         </div>
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span className="text-gray-600">Pavement</span>
//                         <div className="flex items-center gap-2 flex-1 ml-4">
//                           <div className="h-1.5 flex-1 bg-brand rounded-full"></div>
//                           <span className="text-gray-600">31°C</span>
//                         </div>
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span className="text-gray-600">Air (AQI)</span>
//                         <div className="flex items-center gap-2 flex-1 ml-4">
//                           <div className="h-1.5 flex-1 bg-brand rounded-full"></div>
//                           <span className="text-gray-600">42</span>
//                         </div>
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span className="text-gray-600">Pollen</span>
//                         <div className="flex items-center gap-2 flex-1 ml-4">
//                           <div className="h-1.5 flex-1 bg-amber-700 rounded-full"></div>
//                           <span className="text-gray-600">H1</span>
//                         </div>
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span className="text-gray-600">UV</span>
//                         <div className="flex items-center gap-2 flex-1 ml-4">
//                           <div className="h-1.5 flex-1 bg-brand rounded-full"></div>
//                           <span className="text-gray-600">3</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
