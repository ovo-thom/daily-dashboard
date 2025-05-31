import FocusOfTheDay from "@/components/FocusOfTheDay";
import TodoList from "@/components/TodoList";
import Weather from "@/components/Weather";
import QuotesOfTheDay from "@/components/QuotesOfTheDay";
import TimeManager from "@/components/TimeManager/TimeManager";

export default function Home() {
  return (
    <div className="h-screen bg-[url('/sky.jpg')] bg-top bg-cover bg-no-repeat  grid grid-cols-1 grid-rows-[auto,1fr,auto] md:grid-cols-5 md:grid-rows-[1fr,1fr,auto] gap-4 p-6">
      {/* Gestion du temps */}
      <TimeManager />
      {/* Focus du jour */}
      <FocusOfTheDay />
      {/* Todo List */}
      <TodoList />
      {/* Météo */}
      <Weather />
      {/* Citation du jour  */}
      <QuotesOfTheDay />
    </div>
  );
}
