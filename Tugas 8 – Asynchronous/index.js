// di index.js
var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini

function start(i, time) {
    if(i<books.length){
        readBooks(time, books[i], function(check){
            if(check){
                time=time-books[i].timeSpent
                i++
                return start(i, time)
            }            
        })        
    }        
}

start(0, 10000)

/*
var p
var time

function coba(p,time){
    readBooks(time, books[p], function(){ 
        console.log(sisaWaktu)           
        //return coba(p++, time)
    })
     
}

coba(0, 10000)


var timeout = books[0].timeSpent

while(p<books.length){
    readBooks(10000, books[p], function(check){})
    p++
}



for(p=0; p<books.length;p++){
     
        //console.log(timeout)             
    //readBooks(time, books[p], function(check){}) 
    
    setTimeout(function(){     
        
        time = time - timeout
        console.log(time)
    },books[p].timeSpent)       
        
}



switch(p=0){
    case 0:
        readBooks(time,books[p],function(check){})
        console.log(time)
        console.log(books[p].timeSpent)
    default:
        setTimeout(function(){
            time=time-books[p].timeSpent
            console.log(time)
        },3000)
        //console.log(time)
        break
}


readBooks(time, books[p], function(check){
    if(check){
        console.log(time)
    }else{
        console.log(time)
    }    
})




*/