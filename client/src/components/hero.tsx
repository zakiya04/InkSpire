import Buttons from "./buttons"

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
  
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="absolute w-200 h-200 rounded-full bg-emerald-100/30 blur-3xl"></div>
    <div className="absolute w-150 h-150 rounded-full bg-emerald-200/40 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute w-100 h-100 rounded-full bg-emerald-300/50 blur-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
  </div>
  
  
  <div className="absolute inset-0 z-10 flex items-center justify-center flex-col text-center">
   <div>
    <h1 className="text-9xl font-extrabold text-emerald-700 mb-6">InkSpire - Let ink spark inspiration</h1>
    <p className="text-gray-600">Capture ideas instantly. Organize thoughts effortlessly.<br/> InkSpire helps you write, refine, and access your notes anywhere.</p>
   </div>
   <Buttons primaryText="Sign In" secondaryText="Sign Up"/>
  </div>
</div>

  )
}

export default Hero