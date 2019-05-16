const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

console.log("Entrepreneurs nés dans les 70's")
  const result = entrepreneurs.filter(entrepreneurs => entrepreneurs.year >= 1970 && entrepreneurs.year <= 1979);
  console.log(result);
console.log("---------------------------------------------------------")


console.log("Noms et prénoms des entrepreneurs")
  entrepreneurs.forEach(element => {
  console.log(element.first + " " + element.last)
  });
console.log("---------------------------------------------------------")


console.log("Âge des entrepreneurs, aujourd'hui")
  entrepreneurs.forEach(element => {
  console.log(element.first + " " + element.last + " " + (2019 - element.year));
  });
console.log("---------------------------------------------------------")


console.log("Tri des entrepreneurs par ordre alphabétique du nom de famille")
  entrepreneurs.sort((a, b) => (a.last > b.last ? 1 : -1));
  console.log(entrepreneurs);
console.log("---------------------------------------------------------")