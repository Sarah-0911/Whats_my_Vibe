export default function ProgressBar({ popularity }) {

  const steps = [
    { value: 10, color: "bg-red-500" },
    { value: 20, color: "bg-red-400" },
    { value: 30, color: "bg-orange-300" },
    { value: 40, color: "bg-amber-300" },
    { value: 50, color: "bg-yellow-300" },
    { value: 60, color: "bg-lime-300" },
    { value: 70, color: "bg-green-300" },
    { value: 80, color: "bg-green-400" },
    { value: 90, color: "bg-green-500" },
    { value: 100, color: "bg-green-600" },
  ]

  return (
    <div className="mt-3 max-w-[8.5rem] flex items-center gap-x-1">
      {popularity && steps.map((step, index) => {
        return <div key={index} className={`w-full h-2.5 transition duration-500 ${popularity >= step.value ? step.color : "border border-slate-400/75"}`}></div>
      })
      }
    </div>
  )
}
