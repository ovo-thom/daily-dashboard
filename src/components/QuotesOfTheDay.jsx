import getRandomQuote from "@/lib/getRandomQuote";

export default function QuotesOfTheDay() {
  const quote = getRandomQuote();
  return (
    <div className="col-span-1 md:col-span-3 md:col-start-2 flex justify-center bg-black/10 backdrop-blur-xl text-black rounded-2xl w-full">
      <div className="flex flex-col p-4 justify-center items-center w-full">
        <div className="flex w-full">
          <h3 className="text-gray-50 text-lg font-semibold whitespace-nowrap min-w-[140px] text-center">
            Citation du jour&nbsp;:
          </h3>
          <p className="text-gray-200 pl-3 text-base break-words flex-1 text-center">{quote.text}</p>
        </div>
        <p className="mt-2 text-green-300 italic">{quote.author}</p>
      </div>
    </div>
  );
}