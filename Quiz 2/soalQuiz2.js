/**
 * Berikut soal quiz kali ini, terdiri dari 3 Soal
 * Kerjakan dengan sebaik mungkin, dengan menggunakan metode yang telah dipelajari,
 * Tidak diperkenankan untuk menjawab hanya dengan console.log('teks jawaban');
 * maupun dengan terlebih dahulu memasukkannya ke dalam variabel, misal var a = 'teks jawaban'; console.log(a);
 * 
 * Terdapat tambahan poin pada setiap soal yang dikerjakan menggunakan sintaks ES6 (+5 poin)
 * Jika total nilai Anda melebihi 100 (nilai pilihan ganda + coding), tetap akan memiliki nilai akhir yaitu 100
 * 
 * Selamat mengerjakan
*/

/*========================================== 
  1. SOAL CLASS SCORE (10 poin + 5 Poin ES6)
  ==========================================
  Buatlah sebuah class dengan nama Score. class Score tersebut memiliki properti "subject", "points", dan "email". 
  "points" dapat di input berupa number (1 nilai) atau array of number (banyak nilai).
  tambahkan method average untuk menghitung rata-rata dari parameter points ketika yang di input berupa array (lebih dari 1 nilai)
*/

class Score {
  // Code disini
  constructor(subject, points, email){
    this._subject = subject
    this._points = points
    this._email = email
  }
  average(){
    var total = 0
    let i = 0
    for(i=0; i<this._points.length;i++){
      total = total + this._points[i]
    }
    let average = total/this._points.length
    return average
  }
}

//check = new Score('Matematika', [78, 89, 90], "abduh@mail.com")
//console.log(check.average())

/*=========================================== 
  2. SOAL Create Score (10 Poin + 5 Poin ES6)
  ===========================================
  Membuat function viewScores yang menerima parameter data berupa array multidimensi dan subject berupa string
  Function viewScores mengolah data email dan nilai skor pada parameter array 
  lalu mengembalikan data array yang berisi object yang dibuat dari class Score.
  Contoh: 

  Input
   
  data : 
  [
    ["email", "quiz-1", "quiz-2", "quiz-3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88]
  ]
  subject: "quiz-1"

  Output 
  [
    {email: "abduh@mail.com", subject: "quiz-1", points: 78},
    {email: "khairun@mail.com", subject: "quiz-1", points: 95},
  ]
*/

const data = [
  ["email", "quiz - 1", "quiz - 2", "quiz - 3"],
  ["abduh@mail.com", 78, 89, 90],
  ["khairun@mail.com", 95, 85, 88],
  ["bondra@mail.com", 70, 75, 78],
  ["regi@mail.com", 91, 89, 93]
]

function viewScores(data, subject) {
  // code kamu di sini
  let arr = []
  for(i2=0;subject===data[0][i2];i2++){
    var quiz = i2
    console.log(quiz)
  }
  console.log(data[0][0])
  
}

// TEST CASE
viewScores(data, "quiz - 1")
//viewScores(data, "quiz-2")
//viewScores(data, "quiz-3")

/*==========================================
  3. SOAL Recap Score (15 Poin + 5 Poin ES6)
  ==========================================
    Buatlah fungsi recapScore yang menampilkan perolehan nilai semua student. 
    Data yang ditampilkan adalah email user, nilai rata-rata, dan predikat kelulusan. 
    predikat kelulusan ditentukan dari aturan berikut:
    nilai > 70 "participant"
    nilai > 80 "graduate"
    nilai > 90 "honour"

    output:
    1. Email: abduh@mail.com
    Rata-rata: 85.7
    Predikat: graduate

    2. Email: khairun@mail.com
    Rata-rata: 89.3
    Predikat: graduate

    3. Email: bondra@mail.com
    Rata-rata: 74.3
    Predikat: participant

    4. Email: regi@mail.com
    Rata-rata: 91
    Predikat: honour

*/

function recapScores(data) {
  // code kamu di sini
  let arr2 = {}  
  var no = 1
  for(i1=1; i1 < data.length; i1++){    
    arr2.Email = data[i1][0]   

    // rata-rata
    var nilai = []
    for(i2=1;i2<4;i2++){
      add = data[i1][i2]
      nilai.push(add)
    }
    var total = 0    
    for(add=0;add<nilai.length;add++){      
      total = total + nilai[add]      
    }
    let rata2 = String(total/nilai.length)
    arr2[`Rata-rata`] = `${rata2.substr(0,3)}${rata2.substr(16)}`

    if (rata2>90){
      arr2.Predikat = 'honour'
    }else{
      if(rata2>80){
        arr2.Predikat = 'graduate'
      }else{
        arr2.Predikat = 'participant'
      }
    }

    let teks = `${no}.`
    console.log(teks, arr2)
    no++
  }
  return 
}


recapScores(data);
