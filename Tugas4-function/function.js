//No.1
console.log('No. 1');

function teriak(){
    return "Halo Sanbers!"
}

console.log(teriak())

console.log('');
//No. 2
console.log('No. 2');

function kalikan(num1, num2){
    return num1*num2
}

var hasilKali = kalikan(12, 4);
console.log(hasilKali);

console.log('');
//No. 3
console.log('No. 3');

function introduce(name, age, address, hobby){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`
}

var perkenalan = introduce('Agus', 30, 'Jln. Malioboro, Yoyakarta', 'Gaming!');
console.log(perkenalan);