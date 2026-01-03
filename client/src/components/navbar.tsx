import inksy from "../assets/inksy.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-start h-[10%] fixed top-1 w-full px-6 py-2 rounded-3xl bg-white/60 backdrop-blur-md  border-y border-black/10 shadow-md z-50">
      <div className="flex items-center justify-between w-full">
        <img src={inksy} alt='inkspire logo' className="h-14 w-auto"/>
         <h1 className="text-emerald-700 text-3xl font-bold">InkSpire</h1>
      </div>
    </nav>
  )
}

export default Navbar