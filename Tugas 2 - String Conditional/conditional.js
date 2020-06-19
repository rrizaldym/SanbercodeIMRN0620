const awal = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

awal.question('Ketik 1 untuk soal If-Else atau 2 untuk Switch Case, Jawabanmu? ', function(jawaban){
    if(jawaban=='1'){
//Soal If-Else
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("nama =  ", function(nama) {
    if(nama==''){
        console.log('Nama harus diisi')
        rl.close()
    }else {
        console.log(`Halo ${nama}, Pilihlah peranmu untuk memulai game!`)
    }
    rl.question("peran (penyihir, guard, werewolf)= ", function(peran) {
        if(peran=='penyihir'){
            console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
            console.log(`Halo ${peran} ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`)
        }else{if(peran=='guard'){
            console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
            console.log(`Halo ${peran} ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`)
        }else{if(peran=='werewolf'){
            console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
            console.log(`Halo ${peran} ${nama}, kamu akan memangsa warga setiap malam!`)
        }else {
            console.log(`Halo ${nama}, pilihlah salah satu dari peran yang ada untuk memulai game!`)
            rl.close
        }

        }

        }
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nMaafin belum tau looping, ulangin aja ya!");
    process.exit(0);
});
    }else{
        if(jawaban=='2'){
//Soal Switch Case
const { futimesSync } = require("fs");

const r = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

r.question('Hari (1-31) = ', function(tanggal){
    r.question('Bulan (1-12) = ', function(bulan){
        r.question('Tahun (1900-2200) = ', function(tahun){
            var tgl=Number(tanggal);
            var bln=Number(bulan);
            var thn=Number(tahun);           

            
            switch (true){
                case(tgl < 1 || tgl > 31):
                    console.log('Input Tanggal Salah')
                    break;
                case(bln < 1 || bln > 12):
                    console.log('Input Bulan Salah')
                    break;
                case(thn < 1900 || thn > 2200):
                    console.log('Input Tahun Salah')
                    break;                
                default:
                    switch(bln){
                        case 1:
                            p='Januari';
                            console.log(tgl, p, thn);
                            break;
                        case 2:
                            switch(true){
                                case(thn%4==0):
                                    if(tgl>29){
                                        console.log("Februari sampai tanggal 29");
                                        break;
                                    }else{
                                        p='Februari';
                                        console.log(tgl, p, thn);
                                        break;
                                    }
                                default:
                                    if(tgl>28){
                                        console.log('Bukan Tahun Kabisat, Februari sampai tanggal 28');
                                        break;
                                    }else{
                                        p='Februari';
                                        console.log(tgl, p, thn);
                                        break;
                                    }
                            } 
                            break;                                                           
                        case 3:
                            p='Maret';
                            console.log(tgl, p, thn);
                            break;
                        case 4:
                            if(tgl=31){console.log('Input Tangga Salah'); break}
                            else{
                                p='April';
                                console.log(tgl, p, thn);
                                break;
                            }   
                        case 5:
                            p='Mei';
                            console.log(tgl, p, thn);
                            break;
                        case 6:
                            if(tgl=31){console.log('Input Tangga Salah'); break}
                            else{                            
                                p='Juni';
                                console.log(tgl, p, thn);
                                break;
                            }
                        case 7:
                            p='Juli';
                            console.log(tgl, p, thn);
                            break;
                        case 8:
                            p='Agustus';
                            console.log(tgl, p, thn);
                            break;
                        case 9:
                            if(tgl=31){console.log('Input Tangga Salah'); break}
                            else{                            
                                p='September';
                                console.log(tgl, p, thn);
                                break;
                            }
                        case 10:
                            p='Oktober';
                            console.log(tgl, p, thn);
                            break;
                        case 11:
                            if(tgl=31){console.log('Input Tangga Salah'); break}
                                else{                            
                                p='November';
                                console.log(tgl, p, thn);
                                break;
                                }
                        case 12:
                            p='Desember';
                            console.log(tgl, p, thn);
                            break;
                    }
            }

            r.close();
        })
    })
})

r.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
        }else{awal.close()}
    }

})