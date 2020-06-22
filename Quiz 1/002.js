/*
  A. Ascending Ten (10 poin)

    Buatlah sebuah function dengan nama AscendingTen yang menerima sebuah parameter berupa Number, 
    function AscendingTen tersebut akan mengembalikan deretan angka yang ditampilkan 
    dalam satu baris (ke samping). Deret angka yang ditampilkan adalah deretan angka 
    mulai dari angka yang menjadi parameter input function hingga 10 angka setelahnya yang dipisah dengan karakter spasi. 
    Function akan mengembalikan nilai -1 jika tidak ada parameter yang diberikan.
    contoh: 
    console.log(AscendingTen(1)) akan menampilkan 1 2 3 4 5 6 7 8 9 10  
    console.log(Ascending(101)) akan menampilkan 101 102 103 104 105 106 107 108 109 110

    Hint: Deretan angka yang menjadi output adalah dalam tipe data String, bukan Number.

  B. Descending Ten (10 poin)
    Function DescendingTen adalah kebalikan dari function AscendingTen. 
    Output yang diharapkan adalah deretan angka dimulai dari angka parameter hingga 10 angka di bawahnya. 
    Function akan mengembalikan nilai -1 jika tidak ada parameter yang diberikan.

    contoh: 
    console.log(DescendingTen(10)) akan menampilkan 10 9 8 7 6 5 4 3 2 1
    console.log(DescendingTen(20)) akan menampilkan 20 19 18 17 16 15 14 13 12 11

    Hint: Deretan angka yang menjadi output adalah dalam tipe data String, bukan Number.

  C. Conditional Ascending Descending (15)

    Tulislah sebuah function ConditionalAscDesc yang menerima dua buah parameter dengan tipe Number. 
    Parameter number pertama diberi nama reference, dan parameter number kedua diberi nama check. 
    Function ini mirip seperti kedua function sebelumnya yaitu AscendingTen 
    dan DescendingTen yaitu akan menampilkan 10 angka berderet dimulai atau diakhiri dari reference. 
    Function ConditionalAscDesc mengecek jika parameter check merupakan ganjil 
    maka output yang ditampilkan yaitu deretan angka ascending, 
    jika parameter check merupakan angka genap maka output yang ditampilkan yaitu deretan angka descending. 
    Function akan mengembalikan nilai -1 jika tidak ada parameter yang diberikan atau hanya satu saja parameter yang diberikan.

    Contoh: 
    console.log(ConditionalAscDesc(1, 1)) akan menampilkan 1 2 3 4 5 6 7 8 9 10
    console.log(ConditionalAscDesc(100, 4)) akan menampilkan 100 99 98 97 96 95 94 93 92 91

  D. Papan Ular Tangga (35)
    Buatlah sebuah function ularTangga yang ketika function tersebut dipanggil akan menampilkan papan ular tangga ukuran 10 x 10. 

    Output: 
    100 99 98 97 96 95 94 93 92 91
    81 82 83 84 85 86 87 88 89 90
    80 79 78 77 76 75 74 73 72 71
    61 62 63 64 65 66 67 68 69 70
    60 59 58 57 56 55 54 53 52 51
    41 42 43 44 45 46 47 48 49 50
    40 39 38 37 36 35 34 33 32 31
    21 22 23 24 25 26 27 28 29 30
    20 19 18 17 16 15 14 13 12 11
    1 2 3 4 5 6 7 8 9 10

*/

function AscendingTen(num) {
  // Tulis code kamu di sini
  if(num==undefined){
      return -1
  }else{
      var arr = []
      var end = num+10
      for(num; num < end; num++){
          arr.push(num)
      }        
      return arr.join(' ')
  }
}

function DescendingTen(num) {
  // Tulis code kamu di sini
  if(num==undefined){
      return -1
  }else{
      var arr = []
      var end = num-10
      for(num; num > end; num--){
          arr.push(num)
      }        
      return arr.join(' ')
  }
}

function ConditionalAscDesc(reference, check) {
  // Tulis code kamu di sini
  
  if(reference==undefined||check==undefined){
      return -1        
  }else{
      switch(true){
          case(check%2==0):
              var arr = []
              var end = reference-10
              for(reference; reference > end; reference--){
                  arr.push(reference)
              }        
              return arr.join(' ')
          default:
              var arr = []
              var end = reference+10
              for(reference; reference < end; reference++){
                  arr.push(reference)
              }        
              return arr.join(' ')
      }
  }
}

function ularTangga() {
  // Tulis code kamu di sini
  var arr = []
  var start = 100
  var end = start-10
  while(start!=0){
      switch(true){
          case(true):
              for(start; start > end; start--){
                  arr.push(start)                
              }            
              console.log(arr.join(' '))            
              arr.splice(0,10)
              newstart = end - 9
          case(true):
              for(newstart; newstart <= end; newstart++){
                  arr.push(newstart)
              }
              console.log(arr.join(' '))
              arr.splice(0,10)
          default:
              start = end - 10
              end = start - 10 
      }
  }    
  return ''
}

// TEST CASES Ascending Ten
console.log('A. Ascending')
console.log(AscendingTen(11)) // 11 12 13 14 15 16 17 18 19 20
console.log(AscendingTen(21)) // 21 22 23 24 25 26 27 28 29 30
console.log(AscendingTen()) // -1
console.log('')

// TEST CASES Descending Ten
console.log('B. Descending Ten')
console.log(DescendingTen(100)) // 100 99 98 97 96 95 94 93 92 91
console.log(DescendingTen(10)) // 10 9 8 7 6 5 4 3 2 1
console.log(DescendingTen()) // -1
console.log('')

// TEST CASES Conditional Ascending Descending
console.log('C. Conditional Ascending Descending')
console.log(ConditionalAscDesc(20, 8)) // 20 19 18 17 16 15 14 13 12 11
console.log(ConditionalAscDesc(81, 1)) // 81 82 83 84 85 86 87 88 89 90
console.log(ConditionalAscDesc(31)) // -1
console.log(ConditionalAscDesc()) // -1
console.log('')

// TEST CASE Ular Tangga
console.log('D. Papan Ular Tangga')
console.log(ularTangga()) 
/* 
Output : 
  100 99 98 97 96 95 94 93 92 91
  81 82 83 84 85 86 87 88 89 90
  80 79 78 77 76 75 74 73 72 71
  61 62 63 64 65 66 67 68 69 70
  60 59 58 57 56 55 54 53 52 51
  41 42 43 44 45 46 47 48 49 50
  40 39 38 37 36 35 34 33 32 31
  21 22 23 24 25 26 27 28 29 30
  20 19 18 17 16 15 14 13 12 11
  1 2 3 4 5 6 7 8 9 10
*/