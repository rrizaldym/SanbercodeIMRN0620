var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 

function start(time, i){
    if(i<books.length){
       readBooksPromise(time, books[i])
        .then(function(fulfilled){
            time=time-books[i].timeSpent
            //console.log(time)
            i++            
            return start(time, i)
        })
        .catch(function(error){}) 
    }
            
}

start(10000, 0)