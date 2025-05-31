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
  {
    text: "Ils ne savaient pas que c’était impossible, alors ils l’ont fait.",
    author: "Mark Twain",
  },
  {
    text: "Il faut viser la lune, parce qu’au moins, si vous échouez, vous finissez dans les étoiles.",
    author: "Oscar Wilde",
  },
  {
    text: "Rêve grand, commence petit. Mais surtout, commence.",
    author: "Simon Sinek",
  },
  {
    text: "Ce n’est pas parce que les choses sont difficiles que nous n’osons pas, c’est parce que nous n’osons pas qu’elles sont difficiles.",
    author: "Sénèque",
  },
  {
    text: "Tout ce que l’esprit de l’homme peut concevoir et croire, il peut l’accomplir.",
    author: "Napoleon Hill",
  },
  {
    text: "Agis comme s’il était impossible d’échouer.",
    author: "Winston Churchill",
  },
  {
    text: "La plus grande gloire n’est pas de ne jamais tomber, mais de se relever à chaque chute.",
    author: "Confucius",
  },
  {
    text: "Sois toi-même, tous les autres sont déjà pris.",
    author: "Oscar Wilde",
  },
  {
    text: "Ne regarde pas l’horloge ; fais ce qu’elle fait, continue d’avancer.",
    author: "Sam Levenson",
  },
];

export default function getRandomQuote() {
  const randomQuote = Math.floor(Math.random() * citations.length);
  return citations[randomQuote];
}
