// import vinyl from "../assets/vinyl.svg"

export default function SideBar() {
  return (
    <div className="w-[35%] relative sm:block hidden">
    <img
    className="h-screen w-full object-cover*"
    src="/images/gramophone.jpg"
    alt="vinyl picture"
    />
    <div className="absolute bottom-2 left-2 right-2 backdrop-blur-sm backdrop-brightness-125 py-2 rounded-lg shadow-xl">
      <p className="text-slate-50 text-xl font-barlow italic tracking-wider text-center drop-shadow-lg">
        <span className="block text-indigo-100">Easily generate tracks</span>
        <span className="block text-indigo-100">inspired by your words.</span>
      </p>
    </div>
    {/* <img className="w-14 h-14 absolute top-64 -left-7 z-40 hover:animate-spin" src={vinyl} alt="vinyl icon" /> */}
  </div>
  )
}
