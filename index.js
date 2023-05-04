

function processData(data, code) {
  let countryDetails = data
  console.log(code)
  console.log(countryDetails);
  let result;
  for (let i = 0; i < countryDetails.length; i++) {
    if (countryDetails[i].alpha2Code === code) {
      result = countryDetails[i];
      break;
    }
  }
  //   let result = countryDetails.filter(obj => {

  //       return obj.alpha2Code === code
  //   });
  console.log(result.name);
  if (!result) {
    return false;
  } else {
    return result.name;
  }
}

var obj = [{
  name: 'Afghanistan',
  nativeName: 'افغانستان',
  topLevelDomain: ['.af'],
  alpha2Code: 'AF',
  numericCode: '004',
  alpha3Code: 'AFG',
  currencies: ['AFN'],
  callingCodes: ['93'],
  capital: 'Kabul',
  altSpellings: ['AF', 'Afġānistān'],
  relevance: '0',
  region: 'Asia',
  subregion: 'Southern Asia',
  language: ['Pashto', 'Dari'],
  languages: ['ps', 'uz', 'tk'],
  translations:
  {
    de: 'Afghanistan',
    es: 'Afganistán',
    fr: 'Afghanistan',
    it: 'Afghanistan',
    ja: 'アフガニスタン',
    nl: 'Afghanistan',
    hr: 'Afganistan'
  },
  population: 26023100,
  latlng: [33, 65],
  demonym: 'Afghan',
  borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
  area: 652230,
  gini: 27.8,
  timezones: ['UTC+04:30']
},
{
  name: 'Åland Islands',
  nativeName: 'Åland',
  topLevelDomain: ['.ax'],
  alpha2Code: 'AX',
  numericCode: '248',
  alpha3Code: 'ALA',
  currencies: ['EUR'],
  callingCodes: ['358'],
  capital: 'Mariehamn',
  altSpellings: ['AX', 'Aaland', 'Aland', 'Ahvenanmaa'],
  relevance: '0',
  region: 'Europe',
  subregion: 'Northern Europe',
  language: ['Swedish'],
  languages: ['sv'],
  translations:
  {
    de: 'Åland',
    es: 'Alandia',
    fr: 'Åland',
    it: 'Isole Aland',
    ja: 'オーランド諸島',
    nl: 'Ålandeilanden',
    hr: 'Ålandski otoci'
  },
  population: 28875,
  latlng: [60.116667, 19.9],
  demonym: 'Ålandish',
  borders: [],
  area: 1580,
  timezones: ['UTC+02:00']
},
{
  name: 'Albania',
  nativeName: 'Shqipëria',
  topLevelDomain: ['.al'],
  alpha2Code: 'AL',
  numericCode: '008',
  alpha3Code: 'ALB',
  currencies: ['ALL'],
  callingCodes: ['355'],
  capital: 'Tirana',
  altSpellings: ['AL', 'Shqipëri', 'Shqipëria', 'Shqipnia'],
  relevance: '0',
  region: 'Europe',
  subregion: 'Southern Europe',
  language: ['Albanian'],
  languages: ['sq'],
  translations:
  {
    de: 'Albanien',
    es: 'Albania',
    fr: 'Albanie',
    it: 'Albania',
    ja: 'アルバニア',
    nl: 'Albanië',
    hr: 'Albanija'
  },
  population: 2893005,
  latlng: [41, 20],
  demonym: 'Albanian',
  borders: ['MNE', 'GRC', 'MKD', 'KOS'],
  area: 28748,
  gini: 34.5,
  timezones: ['UTC+01:00']
},
{
  name: 'Algeria',
  nativeName: 'الجزائر',
  topLevelDomain: ['.dz'],
  alpha2Code: 'DZ',
  numericCode: '012',
  alpha3Code: 'DZA',
  currencies: ['DZD'],
  callingCodes: ['213'],
  capital: 'Algiers',
  altSpellings: ['DZ', 'Dzayer', 'Algérie'],
  relevance: '0',
  region: 'Africa',
  subregion: 'Northern Africa',
  language: ['Arabic'],
  languages: ['ar'],
  translations:
  {
    de: 'Algerien',
    es: 'Argelia',
    fr: 'Algérie',
    it: 'Algeria',
    ja: 'アルジェリア',
    nl: 'Algerije',
    hr: 'Alžir'
  },
  population: 39500000,
  latlng: [28, 3],
  demonym: 'Algerian',
  borders: ['TUN', 'LBY', 'NER', 'ESH', 'MRT', 'MLI', 'MAR'],
  area: 2381741,
  gini: 35.3,
  timezones: ['UTC+01:00']
},
{
  name: 'American Samoa',
  nativeName: 'American Samoa',
  topLevelDomain: ['.as'],
  alpha2Code: 'AS',
  numericCode: '016',
  alpha3Code: 'ASM',
  currencies: ['USD'],
  callingCodes: ['1684'],
  capital: 'Pago Pago',
  altSpellings: ['AS', 'Amerika Sāmoa', 'Amelika Sāmoa', 'Sāmoa Amelika'],
  relevance: '0.5',
  region: 'Oceania',
  subregion: 'Polynesia',
  language: ['English', 'Samoan'],
  languages: ['en', 'sm'],
  translations:
  {
    de: 'Amerikanisch-Samoa',
    es: 'Samoa Americana',
    fr: 'Samoa américaines',
    it: 'Samoa Americane',
    ja: 'アメリカ領サモア',
    nl: 'Amerikaans Samoa',
    hr: 'Američka Samoa'
  },
  population: 55519,
  latlng: [-14.33333333, -170],
  demonym: 'American Samoan',
  borders: [],
  area: 199,
  timezones: ['UTC-11:00']
},
{
  name: 'Andorra',
  nativeName: 'Andorra',
  topLevelDomain: ['.ad'],
  alpha2Code: 'AD',
  numericCode: '020',
  alpha3Code: 'AND',
  currencies: ['EUR'],
  callingCodes: ['376'],
  capital: 'Andorra la Vella',
  altSpellings: ['AD', 'Principality of Andorra', 'Principat d\'Andorra'],
  relevance: '0.5',
  region: 'Europe',
  subregion: 'Southern Europe',
  language: ['Catalan'],
  languages: ['ca'],
  translations:
  {
    de: 'Andorra',
    es: 'Andorra',
    fr: 'Andorre',
    it: 'Andorra',
    ja: 'アンドラ',
    nl: 'Andorra',
    hr: 'Andora'
  },
  population: 76949,
  latlng: [42.5, 1.5],
  demonym: 'Andorran',
  borders: ['FRA', 'ESP'],
  area: 468,
  timezones: ['UTC+01:00']
}]

//processData(obj, 'AF')


// function solution (s) {
//   // Type your solution here
//   var outputString = "";
//   var outputLengthArray = [];
//   for(var i=0; i<= s.length -1; i++){
//       if(i==0) { outputString = s[i]; }
//       else {
//          if( outputString.indexOf(s[i]) == -1) {
//               outputString += s[i];   
//          }
//           else{
//               outputLengthArray.push(outputString.length);
//               outputString = s[i];
//           }
//       }
//   }
//   outputLengthArray.push(outputString.length);
//   var outputLength = 0;
//   for(var i =0; i< outputLengthArray.length; i++){
//       if(outputLengthArray[i] > outputLength) outputLength = outputLengthArray[i];
//   }
//   return outputLength;
// };


// solution("nndNfdfdf")

// var cache = [];
// var calculationsPerformed = 0;
// var f =[];

// function factorial(value) {
//     if (value <= 1) {
//         return value
//     }

//     const cached = cache[value];
//     if (cached != null) {
//         return cached;
//     }

//    cache[value] = value * factorial(value - 1);
//     calculationsPerformed ++;
//     return cache[value];
// };

// const solution = (numbersToCalculate) => {
//     var results = [];
//     for (var i = 0; i< numbersToCalculate.length; i++) {
//         calculationsPerformed = 0;
//         const result = factorial(numbersToCalculate[i]);
//         results.push([result, calculationsPerformed]);

//     }

//     //cache = {};
//     return results;
// }


// solution([5,6,3]);


// const solution = (values, n, k) => {
//   var seenValues = {};
//   var currentN = 0;
//   var filteredValues = values.filter((x) => { return x % k == 0 });
//   filteredValues.sort((x, y) => { return y - x });
//   filteredValues = filteredValues.filter((item, 
//     index) => filteredValues.indexOf(item) === index);

//   for (value of filteredValues) {
//       if (seenValues[value] == true) {
//           continue;
//       }

//       currentN++;
//       if (currentN == n) {
//           return value;
//       }

//   }

//   return 0;
// }

// solution([4,6,8,6], 3, 2)


// function vendingItem(arr) {
// return {
// column: arr[0],
// row: arr[1],
// costCents: arr[2],
// remainingQuantity: arr[3]
// };
// }

// const solution = (inventory, purchaseAttempts) => {
// const items = inventory.map(vendingItem).filter(x => x);
// const columnCount = items.reduce((acc, item) => { return Math.max(acc, item.row) }, 0) + 1;
// const rowCount = items.reduce((acc, item) => { return Math.max(acc, item.column) }, 0) + 1;

// var grid = Array(items.length).fill(Array(rowCount).fill(null));
// for (item of items) {
// grid[item.column][item.row] = item;
// }

// for (purchaseCoordinate of purchaseAttempts) {
// if (purchaseCoordinate.length != 2) {
// continue;
// }

// const purchaseColumn = purchaseCoordinate[0];
// const purchaseRow = purchaseCoordinate[1];
// if (grid.count <= purchaseColumn) {
// continue;
// }

// const column = grid[purchaseColumn];
// if (column == null || column.length <= purchaseRow) {
// continue;
// }

// var item = column[purchaseRow];
// if(item) item.remainingQuantity--;
// }

// return items.reduce((acc, item) => { return acc + (item.remainingQuantity * item.costCents) }, 0);
// }

// solution([[0, 1, 100, 2], [0, 2, 50, 1]], [[0, 1], [0, 1], [0, 0]])


//function testing(input) {

// const url = 'https://fundraise.givesmart.com/api/v2/fundraisers.json?';

// const response = await fetch(url, {
// 	headers: {
// 		'Authorization': 'Token token="EWJVAsZsno8q6TWZQm8r"',
// 		'Accept': 'application/json',
// 		'Content-type': 'application/json',
// 	},
// });

// const text = await response.text();

// console.log(text);
//   var longest ="";
//   var max = 0;
//   for(var i=0; i< input.length; i++){
//     var pos = longest.indexOf(input[i]);
//     if(pos > -1){
//       longest = longest.substring(pos + 1);
//     }
//     longest += input[i];
//     max = Math.max(max, longest.length);

//   }
//   return max;
// }

// testing("qwertyuiokjlmnhgbvfdcsxazqwertyuioplkjhgfdsazxcvbnm");

// function lengthOfLongestSubstring(string) {
//   var max = 0, current_string = "", i, char, pos;

//   for (i = 0; i < string.length; i += 1) {
//       char = string.charAt(i);
//       pos = current_string.indexOf(char);
//       if (pos !== -1) {
//           // cut "dv" to "v" when you see another "d"
//           current_string = current_string.substr(pos + 1);
//       }
//       current_string += char;
//       max = Math.max(max, current_string.length);
//   }
//   return max;
// }

// lengthOfLongestSubstring("helloeh");


// function testing(input, words){
//   var result = [];
//   var output = [];

//   var findWordinsentence = function(result, input){
//     for(var i=0; i< words.length; i++){
//       if(input.length === 0){
//         output.push(result.join(' '));
//         return;
//       }
//       if(input.indexOf(words[i]) === 0){
//         result.push(words[i]);
//         findWordinsentence(result, input.slice(words[i].length));
//         result = [];
//       }
//     }
//   }

//   findWordinsentence(result, input)
//   return output;
// }

// testing('catsandog', ["cats","dog","sand","and","cat"]);

// function isPalindrome(str){
//   var rev = str.split("").reverse().join("");
//   return rev == str;
// }
// function LongestPalindrome(s) {
//   var max = 0;
//   var pstring="";
//   for(var i =0; i< s.length; i++){
//     var substr = s.substr(i, s.length);

//     for(var j=substr.length ; j>=0 ; j--){
//         var revSubstr = substr.substr(0,j);
//         if(revSubstr.length <= 1)
//           continue;
//         if(isPalindrome(revSubstr)){
//           if(revSubstr.length > max){
//             max = revSubstr.length;
//             pstring = revSubstr;
//           }
//           //max = Math.max(max, revSubstr.length);
//         }
//     }

//   }
//   return pstring;
// }

// console.log(LongestPalindrome("abracadabra"));
// console.log(LongestPalindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"))


// function isValid(input) {
//   if (input.length % 2 !== 0) return false;
//   var stack = [];
//   for (var i = 0; i < input.length; i++) {
//     switch (input[i]) {
//       case '{':
//         stack.push('}');
//         break;
//       case '(':
//         stack.push(')');
//         break;
//       case '[':
//         stack.push(']');
//         break;
//       default:
//         var cur = stack.pop();
//         if (input[i] !== cur) return false;
//     }
//   }
//   return stack.length === 0;
// }

// isValid('{}[]()');

// var totalNQueens = function(N) {
//   let ans = 0

//   const place = (i, vert, ldiag, rdiag) => {
//       if (i === N) ans++
//       else for (let j = 0; j < N; j++) {
//           let vmask = 1 << j, lmask = 1 << (i+j), rmask = 1 << (N-i-1+j)
//           if (vert & vmask || ldiag & lmask || rdiag & rmask) continue
//           place(i+1, vert | vmask, ldiag | lmask, rdiag | rmask)
//       }
//   }

//   place(0,0,0,0)
//   return ans
// };

// totalNQueens(4);

// function solution(n) {
//   var seperatedNumber = n.toString().split('');
//   return seperatedNumber.reduce((total, num)=> Number(total) + Number(num))
//  }

//  console.log(solution(291));

// function solution(nCols, nRows, col, row) {
//   var total = nCols * nRows;
//   var remainingcolsseat = (col -1) * nRows;
//   var remaingrowSeat = row * (nCols);
//   return total - (remaingrowSeat + remainingcolsseat - ((col-1)*row));
// }

// solution(16,11,5,3)

// function solution(n, firstNumber) {
//   var straight = Array.from(Array(n).keys());
//   var reverse = [...straight].reverse();
  
//   var index = straight.indexOf(firstNumber);
//   return reverse[index]
// }

// solution(10,7)

// function solution(n) {
//   var hour = Math.floor(n/60);
//   var minute = n%60;
//   var total = hour.toString() + minute.toString();

//   return total.split('').reduce((a,b) => Number(a)+Number(b))

// }

// console.log(solution(808));

function solution(min1, min2_10, min11, s) {

}

solution(3,1,2,20);
 