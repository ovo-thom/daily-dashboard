import FocusOfTheDay from "@/components/FocusOfTheDay";
import TodoList from "@/components/TodoList";
import Weather from "@/components/Weather";

export default function Home() {
  return (
    <div className="h-screen bg-[url('/sky.jpg')] bg-top bg-cover bg-no-repeat  grid grid-cols-1 grid-rows-[auto,1fr,auto] md:grid-cols-2 md:grid-rows-[1fr,1fr,auto] gap-4 p-6">
      {/* Focus du jour */}
      <FocusOfTheDay />
      {/* Todo List */}
      <TodoList />
      {/* Météo */}
      <div className="col-span-1 md:-col-span-2  bg-black/10 rounded-xl backdrop-blur-xl text-gray-200 flex flex-col justify-center items-center">
        <Weather />
      </div>
      {/* Citation du jour  */}
      <div className="col-span-1 md:col-span-2  bg-black/10 backdrop-blur-xl text-black">
        <h1>Citation du jour</h1>
      </div>
    </div>
  );
}
