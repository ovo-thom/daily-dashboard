import FocusOfTheDay from "@/components/FocusOfTheDay";

export default function Home() {
  return (
    <div className="h-screen grid grid-cols-1 grid-rows-[auto,1fr,auto] md:grid-cols-2 md:grid-rows-[1fr,1fr,auto] gap-4 p-6 bg-gray-100">
      {/* Focus du jour */}
      <FocusOfTheDay />
      {/* Todo List */}
      <div className="col-span-1 md:col-span-1 bg-green-500 text-white">
        <h1>Todo List</h1>
      </div>
      {/* Météo */}
      <div className="col-span-1 md:-col-span-2 bg-red-500 text-white">
        <h1>Météo</h1>
      </div>
      {/* Citation du jour  */}
      <div className="col-span-1 md:col-span-2 bg-yellow-500 text-white">
        <h1>Citation du jour</h1>
      </div>
    </div>
  );
}
