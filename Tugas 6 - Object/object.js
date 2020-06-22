//Soal No. 1
console.log('No. 1')

var now = new Date()
var thisYear = now.getFullYear() //2020

function arrayToObject(arr){
    var panjang = arr.length
    if(arr.length == 0){
        return ''
    }else{
        var obj = {}
        var p = 0
        var r = 1
        while(p<panjang){
            switch(q=0){
                case 0:
                    obj.firstName = arr[p][q]
                    q++
                case 1:
                    obj.lasttName = arr[p][q]
                    q++
                case 2:
                    obj.gender = arr[p][q]
                    q++
                case 3:
                    var year = arr[p][q]
                    if(year===undefined){
                        obj.age = 'Invalid Birth Year'
                    }else{
                        var age = thisYear - year
                        if(age<0){
                            obj.age = 'Invalid Birth Year'
                        }else{
                            obj.age = age
                        }
                    }                
                    q=0
            }
            console.log(r,'.', arr[p][q], arr[p][q+1], ':', obj)
            r++
            p++
        }
        console.log('')    
    }
    return ''
}

var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people)
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 
arrayToObject([])

/*
// Error case 
arrayToObject([]) // ""
*/

//Soal No. 2
console.log('No. 2')

var sale = {
    1500000: 'Sepatu Stacattu',
    500000: 'Baju Zoro',
    250000: 'Baju H&N',
    175000: 'Sweater Uniklooh',
    50000: 'Casing Handphone'
}

function shoppingTime(memberId, money){
    switch(true){
        case(memberId===undefined||money===undefined):
            return 'Mohon maaf, toko X hanya berlaku untuk member saja'
        case(memberId==''):
            return 'Mohon maaf, toko X hanya berlaku untuk member saja'
        case(money===''||money<50000):
            return 'Mohon maaf, uang anda tidak cukup'
        default:
            var resi = {}
            resi.memberId = memberId
            resi.money = money
            var listPurchased = []
            switch(true){
                case(money>1500000):
                    listPurchased.push(sale[1500000])
                    money = money-1500000
                case(money>500000):
                    listPurchased.push(sale[500000])
                    money = money-500000
                case(money>250000):
                    listPurchased.push(sale[250000])
                    money = money-250000
                case(money>175000):
                    listPurchased.push(sale[175000])
                    money = money-175000
                case(money>50000):
                    listPurchased.push(sale[50000])
                    money = money-50000
                default:
                    resi.listPurchased = listPurchased
                    resi.changeMoney = money                    
            }
    }
    return resi
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

console.log('')
//Soal No. 3
console.log('No. 3')

function naikAngkot(listPenumpang){
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var arr = []
    if(listPenumpang.length==0){
        return listPenumpang
    }else{        
        for(p=0; p<listPenumpang.length;p++){
            var obj = {}
            switch(q = 0){
                case 0: //penumpang
                    obj.penumpang = listPenumpang[p][q]
                    q++
                case 1: //naikdari
                    var naikDari = listPenumpang[p][q]
                    obj.naikDari = listPenumpang[p][q]
                    q++
                case 2: //tujuan
                    var tujuan = listPenumpang[p][q]
                    obj.tujuan = listPenumpang[p][q]                    
                default: //bayar   
                    var r = 0
                    if(naikDari===tujuan){
                        obj.bayar = 'Anda mau kemana?'                        
                    } else{                        
                        while(naikDari!==rute[r]){
                            r++
                            }
                            var awal = r
                            r == 0
                        while(tujuan!==rute[r]){
                            r++
                        }
                        var akhir = r
                        r == 0
                        var bayar = (akhir - awal)*2000
                        obj.bayar = bayar
                    }                                                     
            } 
            arr.push(obj)                    
        }        
    }
    return arr
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
    // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
    //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([])); //[]