
import { ArrowDown, Zap, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-black rotate-45 opacity-60 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white rounded-full opacity-50 animate-ping"></div>
        <div className="absolute top-60 left-1/4 w-8 h-8 bg-black rotate-12 opacity-40"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white rounded-full opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <Zap className="text-black w-8 h-8 mr-2 animate-bounce" />
              <span className="bg-black text-yellow-400 px-4 py-1 rounded-full font-bold text-sm transform -rotate-2">
                FINGER LICKIN' GOOD!
              </span>
            </div>
            
            <h1 className="text-7xl lg:text-8xl font-black text-white mb-6 leading-none">
              <span className="block transform -rotate-2 bg-black text-yellow-400 px-4 py-2 inline-block mb-2">CRISPY</span>
              <span className="block text-black drop-shadow-lg">CHICKEN</span>
              <span className="block text-white transform rotate-1">MADNESS!</span>
            </h1>
            
            <p className="text-xl text-black mb-8 max-w-md mx-auto lg:mx-0 font-semibold">
              🔥 The WILDEST chicken experience in town! Get ready for flavor explosions! 🔥
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-black hover:bg-gray-800 text-yellow-400 px-8 py-4 rounded-full font-black text-lg shadow-2xl transform hover:scale-110 transition-all duration-300 hover:rotate-2">
                🍗 EXPLORE MENU
              </button>
              <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-black text-lg shadow-2xl transform hover:scale-110 transition-all duration-300 hover:-rotate-2 border-4 border-black">
                ⚡ ORDER NOW!
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-black fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
              ))}
              <span className="text-black font-bold ml-2">5.0 INSANE RATING!</span>
            </div>
          </div>

          {/* Right side - Image with blob background */}
          <div className="relative flex justify-center items-center">
            {/* Blob-like background shapes - bigger than the image */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[450px] h-[450px] bg-black rounded-[50%_40%_60%_30%] opacity-80 animate-pulse transform rotate-12"></div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[420px] h-[420px] bg-white rounded-[40%_60%_30%_50%] opacity-60 animate-ping transform -rotate-6"></div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[390px] h-[390px] bg-yellow-300 rounded-[60%_30%_50%_40%] opacity-70 animate-bounce transform rotate-3"></div>
            </div>
            
            {/* Main image container - bigger and full image */}
            <div className="relative z-10 transform hover:rotate-6 transition-transform duration-500">
              <img 
                src="/lovable-uploads/509b5713-a7a7-4162-b76e-59ee9acb0581.png" 
                alt="Delicious Chicken Wings" 
                className="w-96 h-96 object-contain shadow-2xl"
              />
            </div>

            {/* Floating elements around the image */}
            <div className="absolute -top-4 -right-4 bg-black text-yellow-400 p-3 rounded-full font-black text-sm animate-bounce z-20">
              HOT!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-black p-3 rounded-full font-black text-sm animate-pulse z-20">
              FRESH!
            </div>
            <div className="absolute top-1/2 -right-8 bg-black text-yellow-400 p-2 rounded-full font-black text-xs transform rotate-12 z-20">
              YUM!
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom banner with infinite scroll */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="bg-black text-yellow-400 py-4 transform -rotate-1 origin-left">
          <div className="flex items-center font-black text-xl whitespace-nowrap animate-[scroll_20s_linear_infinite]">
            <span className="mx-8">🔥 CRISPY GOODNESS!</span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mx-4"></span>
            <span className="mx-8">🍗 CHICKEN PARADISE!</span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mx-4"></span>
            <span className="mx-8">⚡ FLAVOR EXPLOSION!</span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mx-4"></span>
            <span className="mx-8">🔥 CRISPY GOODNESS!</span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mx-4"></span>
            <span className="mx-8">🍗 CHICKEN PARADISE!</span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mx-4"></span>
            <span className="mx-8">⚡ FLAVOR EXPLOSION!</span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mx-4"></span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
