// DOKUMENTASI BUAT PELAJARIN SORTING

import bubbleSort from "./bubbleSort.js";
import selectionSort from "./selectionSort.js"
import {insertionSort}  from "./insertionSort.js";
import { mergeSort } from "./mergeSort.js";

const groupAnagrams = function(strs, sortFunction) {
  // Implementasi akan datang di sini
  if(strs.length < 2) return [strs]
  
    const anagram = {} // Menampung sebuah string anagram menjadi sebuah object
    let result = []

  for(let i = 0; i < strs.length; i++) {
    const str = strs[i].split("") // Membuat setiap string menjadi terpisah agar bisa menjadi sebuah anagram yang sama
    const sortedWord = sortFunction(str).join("") // Mengurutkan string yang anagram terpisah menjadi sesuai yang lain. Contoh yang "eat", "tea", dan "ate", itu akan diurutkan menjadi "tea", agar "tea" ini menjadi anagram yang sesuai dengan yang lain. 
    if(!anagram[sortedWord]) { // Membuat array kosong dari object dengan key dari sortedWord, contoh keynya akan (tea, tna, dan tba). Dan key ini (tea,tna dan tba) akan membuat sebuah array kosong. Dan array kosong ini yang akan menjadi value dari setiap keynya
        anagram[sortedWord] = []
    }
    anagram[sortedWord].push(strs[i]) // Dari setiap array kosong key ini, akan di isi valuenya. Menambahkan value dari setiap key sesuai anagram, misalnya key (tea), maka valuenya "eat", "ate", "tea". Jadi object anagram ini akan mencari pasangan key hasil dari sortedWord dan mencari value dari kata dari array/string mana yang sesuai. Intinya memasukan value sesuai dengan key yang sudah di jadikan sebuah object. Karena anagram ini yang akan menampung object key valuenya.
  }


  for(let word in anagram) { // Looping ini yang akan menjadi hasil akhir dimana memasukan array sesuai anagram dari keynya. Jadi array terbentuk sesuai dari object yang sudah tertanam key value, dan hasilnya di masukan dalam bentuk array bukan object.
    result.push(anagram[word]) // Push valuenya ke array result, buat menjadi array.
  }

  return result
};

// Test Case 1
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"], bubbleSort)); 
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Test Case 2
console.log(groupAnagrams([""], selectionSort)); 
// // Output: [[""]]

// Test Case 3
console.log(groupAnagrams(["a"], bubbleSort)); 
// Output: [["a"]]

// Test Case 4
console.log(groupAnagrams(["listen", "silent", "hello", "world"], insertionSort)); 
// Output: [["listen","silent"],["hello"],["world"]]

// Test Case 5
console.log(groupAnagrams(["rat", "tar", "art", "car"], mergeSort)); 
// Output: [["rat","tar","art"],["car"]]

// Test Case 6
console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"], mergeSort)); 
// Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// Test Case 7
console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"], insertionSort)); 
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]