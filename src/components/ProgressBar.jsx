export default function ProgressBar({ popularity }) {

  const steps = [
    { value: 0, color: "bg-red-500" },
    { value: 10, color: "bg-red-400" },
    { value: 20, color: "bg-orange-300" },
    { value: 30, color: "bg-amber-300" },
    { value: 40, color: "bg-yellow-300" },
    { value: 50, color: "bg-lime-300" },
    { value: 60, color: "bg-green-300" },
    { value: 70, color: "bg-green-400" },
    { value: 80, color: "bg-green-500" },
    { value: 90, color: "bg-green-600" },
  ]

  return (
    <div className="mt-3 max-w-[10rem] flex items-center gap-x-1">
      {(popularity || popularity === 0) && steps.map((step, index) => {
        return <div key={index} className={`w-full h-3 transition duration-500 ${popularity > step.value ? step.color : "border border-slate-400/75"}`}></div>
      })
      }
    </div>
  )
}
