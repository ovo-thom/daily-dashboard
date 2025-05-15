"use client";

const citations = [
  {
    text: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
    author: "Winston Churchill",
  },
  {
    text: "La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.",
    author: "Albert Einstein",
  },
  {
    text: "Fais de ta vie un rêve, et d’un rêve, une réalité.",
    author: "Antoine de Saint-Exupéry",
  },
  { text: "Il n’y a pas de réussite sans échec.", author: "Mickey Rooney" },
  {
    text: "Choisis un travail que tu aimes, et tu n’auras pas à travailler un seul jour de ta vie.",
    author: "Confucius",
  },
];

export default function QuotesOfTheDay() {
  const randomQuote = Math.floor(Math.random() * citations.length);
  const quote = citations[randomQuote];
  console.log("citation", quote);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex justify-evenly">
        <h3 className="mr-1">Citation du jour :</h3>
        <p>{quote.text}</p>
      </div>
      <p>{quote.author}</p>
    </div>
  );
}
