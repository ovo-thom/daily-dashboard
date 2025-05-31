import getRandomQuote from "@/lib/getRandomQuote";

export default function QuotesOfTheDay() {
  const quote = getRandomQuote();
  return (
    <div className="col-span-1 md:col-span-3 md:col-start-2 bg-black/10 backdrop-blur-xl text-black rounded-2xl">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex  items-baseline">
        <h3 className="mr-1 text-gray-50 text-lg font-semibold">Citation du jour :</h3>
        <p className="text-gray-200">{quote.text}</p>
      </div>
      <p className="text-green-300 italic ">{quote.author}</p>
    </div>
    </div>
  );
}
