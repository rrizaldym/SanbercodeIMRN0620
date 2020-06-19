//No.1
console.log('No. 1');

function range(startNum, finishNum){
    var q = []
    switch(true){
        case(startNum==undefined||finishNum==undefined):
            return -1
            break
        case(startNum > finishNum):            
            for (startNum; startNum >= finishNum; startNum--){
                q.push(startNum)
            }
            return q
            break
        default:
            for (startNum; startNum <= finishNum; startNum++){               
                q.push(startNum)
            } 
            return q
            break
    }        
}

console.log('a. ' + range(1, 10));
console.log('b. ' + range());
console.log('c. ' + range(11,18));
console.log('d. ' + range(54, 50));
console.log('e. ' + range());

console.log('');
//No. 2
console.log('No. 2');

function rangeWithStep(startNum, finishNum, step){
    var q = []
    if (startNum > finishNum){
        for(startNum; startNum >= finishNum; startNum-=step){
            q.push(startNum)
        }
    }else{
        for(startNum; startNum <= finishNum; startNum+=step){
            q.push(startNum)
        }
    }
    return q
}

console.log('a. ' + rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log('b. ' + rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log('c. ' + rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log('d. ' + rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

console.log('');
//No. 3
console.log('No. 3');

function sum(p, q, r){
    var x = []
    var y = 0
    var z = 0 
    switch(true){
        case(p===undefined):
            return 0
            break
        case(q===undefined):
            return 1
            break
        case(r==undefined):
            if(p>q){
                for(p; p >= q; p--){
                    x.push(p)
                    z = x[y] + z                    
                    y++                                               
                }             
            }else{
                for(p; p <=q; p++){
                    x.push(p)
                    z = x[y] + z                    
                    y++ 
                }
            }             
            return z
        default:
            if(p>q){
                for(p; p >= q; p-=r){
                    x.push(p)
                    z = x[y] + z                    
                    y++ 
                }             
            }else{
                for(p; p <=q; p+=r){
                    x.push(p)
                    z = x[y] + z                    
                    y++ 
                }
            }
            return z
    }
}

console.log('a. ' + sum(1,10)) // 55
console.log('b. ' + sum(5, 50, 2)) // 621
console.log('c. ' + sum(15,10)) // 75
console.log('d. ' + sum(20, 10, 2)) // 90
console.log('e. ' + sum(1)) // 1
console.log('f. ' + sum()) // 0 

console.log('');
//No. 4
console.log('No. 4');

function dataHandling(){
    var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ] 
        
    for(p=0; p<=3; p++){
        switch(q=0){
            case(q=0):                  
                console.log('Nomor ID: ' + input[p][q]);
                q++;
            case(q=1):                
                console.log('Nama Lengkap: ' + input[p][q]);
                q++;
            case(q=2):                
                console.log('TTL: ' + input[p][q] + ", " + input[p][q+1]);
                q+=2;
            default:                
                console.log('Hobi: ' + input[p][q]);
                console.log("");                                                
        }
    }
return `` //masih enggak ngerti cara pakainya    
}

console.log(dataHandling())

console.log('');
//No. 5
console.log('No. 5');

function balikKata(variabel){
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
    
        //balik = balik + arr [p]
        while(p <= panjang){
            balik = balik + arr [p]   
            p++
        }   
    
    return balik

}

console.log('a. ' + balikKata("Kasur Rusak")) // kasuR rusaK
console.log('b. ' + balikKata("SanberCode")) // edoCrebnaS
console.log('c. ' + balikKata("Haji Ijah")) // hajI ijaH
console.log('d. ' + balikKata("racecar")) // racecar
console.log('e. ' + balikKata("I am Sanbers")) // srebnaS ma I 

console.log('');
//No. 6
console.log('No. 6');


function dataHandling2 (input){
    var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
    input.splice(1,4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", 'Pria', 'SMA Internasional Metro')
    console.log('a. ')
    console.log(input)    

    var tanggal = input[3]    
    var bulan = tanggal.split('/')
    switch(true){
        case(bulan[1]==="01"):
            console.log('b. Januari')
            break
        case(bulan[1]==="02"):
            console.log('b. Februari')
            break
        case(bulan[1]==="03"):
            console.log('b. Maret')
            break
        case(bulan[1]==="04"):
            console.log('b. April')
            break
        case(bulan[1]==="05"):
            console.log('b. Mei')
            break
        case(bulan[1]==="06"):
            console.log('b. Juni')
            break
        case(bulan[1]==="07"):
            console.log('b. Juli')
            break
        case(bulan[1]==="08"):
            console.log('b. Agustus')
            break
        case(bulan[1]==="09"):
            console.log('b. September')
            break
        case(bulan[1]==="10"):
            console.log('b. Oktober')
            break
        case(bulan[1]==="11"):
            console.log('b. November')
            break
        case(bulan[1]==="12"):
            console.log('b. Desember')
            break
        default:
            break        
    }
    
    console.log('c. ')
    console.log(bulan.sort(function(a, b){return b - a }))
    bulan.sort(function(a, b){return a - b})    
    console.log('d. ' + bulan.join('-'))

    var nama = input[1]
    var namasplit = nama.split('')
    var namaslice = namasplit.slice(0,15)
    var namajoin = namaslice.join('')
    console.log('e. ' + namajoin)


    return ''
}

console.log(dataHandling2())