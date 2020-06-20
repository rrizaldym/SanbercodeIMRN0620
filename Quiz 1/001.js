/*
  A. Balik String (10 poin)
    Diketahui sebuah function balikString yang menerima satu buah parameter berupa tipe data string. Function balikString akan mengembalikan sebuah string baru yang merupakan string kebalikan dari parameter yang diberikan. contoh: balikString("Javascript") akan me-return string "tpircsavaJ", balikString("satu") akan me-return string "utas", dst.

    NB: TIDAK DIPERBOLEHKAN menggunakan built-in function Javascript seperti .split(), .join(), .reverse() . 
    Hanya boleh gunakan looping. 

  B. Palindrome (10 poin)
    Buatlah sebuah function dengan nama palindrome() yang menerima sebuah parameter berupa String. 
    Function tersebut mengecek apakah string tersebut merupakan sebuah palindrome atau bukan. 
    Palindrome yaitu sebuah kata atau kalimat yang jika dibalik akan memberikan kata atau kalimat yang sama. 
    Function akan me-return tipe data boolean:  true jika string merupakan palindrome, dan false jika string bukan palindrome. 

  
    NB: TIDAK DIPERBOLEHKAN menggunakan built-in function Javascript seperti .split(), .join(), .reverse() . 
    Hanya boleh gunakan looping. 
  
  C. Bandingkan Angka (10 poin)
    Buatlah sebuah function dengan nama bandingkan() yang menerima sebuah parameter berupa number 
    dan bilangan asli (positif). Jika salah satu atau kedua paramater merupakan bilangan negatif 
    maka function akan mereturn -1. Function tersebut membandingkan kedua parameter 
    dan mereturn angka yang lebih besar di antara keduanya. Jika kedua parameter sama besar 
    maka function akan mereturn nilai -1. 
    
*/

function balikString(variabel) {
  // Silakan tulis code kamu di sini
  var panjang = variabel.length -1 //10
    var arr = []
    var p = 1               
        while(panjang >= 0 ){
          var kata = variabel[panjang]
          var kataStr = kata.toString()
          arr.push(kataStr)
          panjang--        
        }    
    
    var balik = arr[0]
    var panjang = variabel.length -1 //10
        while(p <= panjang){
          balik = balik + arr [p]   
          p++
        }    
    return balik
}

function palindrome(variabel) {
  // Silakan tulis code kamu di sini
  var panjang = variabel.length -1 //10
  var arr = []                
        while(panjang >= 0 ){
          var kata = variabel[panjang]
          var kataStr = kata.toString()
          arr.push(kataStr)
          panjang--        
        }    
    
  var balik = arr[0]
  var p = 1 
  var panjang = variabel.length -1 //10
        while(p <= panjang){
          balik = balik + arr [p]   
          p++
        }    

  var arr2 = []
  var q = 0
    while(q  <= panjang ){
      var kata2 = variabel[q]
      var kata2Str = kata2.toString()
      arr2.push(kata2Str)
      q ++
    }
  var balik2 = arr2[0]
  var r=1
    while(r<= panjang){
        balik2 = balik2 + arr2[r]
        r++
    }
    if(balik==balik2){
        return 'true'
    }else{
        return 'false'
    }      
}

function bandingkan(num1, num2) {
  // code di sini
  if(num1==undefined&&num2==undefined){
      return -1
  }else{
      if(num1==undefined||num2==undefined){
          return num1||num2
      }else{
          var newnum1 = Number(num1)
          var newnum2 = Number(num2)
              switch(true){           
                  case(newnum1<0||newnum2<0):
                      return -1
                  case(newnum1==newnum2):
                      return -1
                  case(newnum1>newnum2):
                      return newnum1
                  default:
                      return newnum2
              }
      }    
  }
}

// TEST CASES BalikString
console.log('A. Balik Sring')
console.log(balikString("abcde")) // edcba
console.log(balikString("rusak")) // kasur
console.log(balikString("racecar")) // racecar
console.log(balikString("haji")) // ijah
console.log('')

// TEST CASES Palindrome
console.log('B. Palindrome')
console.log(palindrome("kasur rusak")) // true
console.log(palindrome("haji ijah")) // true
console.log(palindrome("nabasan")) // false
console.log(palindrome("nababan")) // true
console.log(palindrome("jakarta")) // false
console.log('')

// TEST CASES Bandingkan Angka
console.log('C. Bandingkan Angka')
console.log(bandingkan(10, 15)); // 15
console.log(bandingkan(12, 12)); // -1
console.log(bandingkan(-1, 10)); // -1 
console.log(bandingkan(112, 121));// 121
console.log(bandingkan(1)); // 1
console.log(bandingkan()); // -1
console.log(bandingkan("15", "18")) // 18