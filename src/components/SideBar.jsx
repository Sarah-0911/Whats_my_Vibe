import vinyl from "../assets/vinyl.svg"

export default function SideBar() {
  return (
    <div className="w-[35%] relative sm:block hidden">
    <img
    className="h-screen w-full object-cover object-left"
    src="/images/gramophone.jpg"
    alt="vinyl picture"
    />
    <div className="absolute top-60 -left-10 backdrop-blur-sm backdrop-brightness-125 pl-20 pr-8 py-4 rounded-lg shadow-xl">
      <p className="text-slate-50 text-xl font-barlow italic tracking-wider text-center drop-shadow-lg">
        <span className="block">Easily generate tracks</span>
        <span className="block">inspired by your words.</span>
      </p>
    </div>
    <img className="w-14 h-14 absolute top-64 -left-7 z-40 hover:animate-spin" src={vinyl} alt="vinyl icon" />
  </div>
  )
}
