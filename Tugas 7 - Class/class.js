//Soal no 1
console.log('No. 1')
console.log('Release 0')

class Animal {
    constructor(name){        
        this.nama = name
        this._legs = 4
        this._cold_blooded = false
    }
    get name(){     
           
        return this.nama
    }

    get legs(){
        return this._legs
    }

    get cold_blooded(){
        return this._cold_blooded
    }
}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

console.log('')
console.log('Release 1')
class Frog extends Animal{    
    jump(){
        console.log("hop hop")
    }
}

class Ape extends Animal{    
    yell(){
        console.log( 'Auooo')
    }
}

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo";

console.log('')
//Soal no 2
console.log('No. 2')

class Clock{
    constructor({template}){
        this.template = template
        
        this.stop = function() {
            clearInterval(this.timer);
        };
    
        this.start = function() {
            //render()
            this.timer = setInterval(this.render.bind(this), 1000)
        }
    }
    render(){
        this.date = new Date();

        this.hours = this.date.getHours();
        if (this.hours < 10) this.hours = '0' + this.hours;

        this.mins = this.date.getMinutes();
        if (this.mins < 10) this.mins = '0' + this.mins;

        this.secs = this.date.getSeconds();
        if (this.secs < 10) this.secs = '0' + this.secs;

        this.output = this.template
        .replace('h', this.hours)
        .replace('m', this.mins)
        .replace('s', this.secs);

        console.log(this.output);
    }    
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 
