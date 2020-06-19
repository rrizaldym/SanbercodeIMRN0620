//Soal 1
console.log('No. 1')
var p = 0
console.log('LOOPING PERTAMA')
while (p<20) {
    p+=2;
    console.log(p + ' - I love coding');
    
}
console.log('LOPPING KEDUA')
while(p>0){
    console.log(p + ' - I will become a mobile developer');
    p-=2;    
}
console.log('');

//Soal no 2
console.log('No. 2');
for (var r=1; r<21; r+=1){
    switch(true){
        case(r==1):
            console.log(r + ' - Santai');
            break;
        case(r%3==0 && r%2!=0):
            console.log(r + ' - I Love Coding');
            break;
        case(r%2==0):
            console.log(r + ' - Berkulaitas')
            break;
        default:
            console.log(r + ' - Santai')
            break;
            
    }    
}
console.log('');

//Soal no. 3
console.log('No. 3')
var no3 = 0
while( no3 < 4){
    console.log('########');
    no3++;
}
console.log('');

//Soal no. 4
console.log('No. 4');
var w = '#'
for (var x=w; x.length < 8; x+=w){
    console.log(x);
}
console.log('');

//Soal no. 5
console.log('No. 5');
var putih = ''
var hitam = '#'
var no5 = 1
while( no5 < 9){
    if (no5%2 != 0){
        console.log(putih, hitam, putih, hitam, putih, hitam, putih, hitam,)
    }else{
        console.log(hitam, putih, hitam, putih, hitam, putih, hitam, putih)
    }    
    no5++;
}
console.log('');


