(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
console.log('hello cardio');


   const inventors = [
     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
   ];
   const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
   const fifteen = inventors.filter(inventor => inventor.year > 1499 && inventor.year < 1600);
   console.table(fifteen);

   const names = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
   console.table(names);

   const sorted = inventors.sort((a, b)=> a.year < b.year);
   console.log(sorted);
   const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

},{}]},{},[1]);