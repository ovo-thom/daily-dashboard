import Clock from "./Clock"

export default function TimeManager() {
  return (
    <div className="col-span-1 md:col-span-2 bg-black/10 backdrop-blur-xl text-gray-200 font-bold p-3 rounded-lg">
        <Clock />
    </div>
  )
}