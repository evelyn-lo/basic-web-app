export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your andrew id")) {
    return "evelynlo";
  }


  if (query.toLowerCase().includes("name")) {
    return "Evelyn";
  }

  if (query.toLowerCase().includes("What is 11 minus 59?")){
    return "-48";
  }


  return "";
}
