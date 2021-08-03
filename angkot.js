var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if(noAngkot <= 6 && noAngkot !== 5){
    console.log("Angkot No. "+noAngkot+" Sedang Beroperasi");
  }else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
    console.log("Angkot No. "+noAngkot+" Sedang Lembur");
  }else{
    console.log("Angkot No. "+noAngkot+" Sedang Tidak Beroperasi");
  }
}

var penumpang = [];

var tambahPenumbang = function (nama,penumpang) {

  if (penumpang.length == 0) {
    penumpang.push(nama);
  }else{
    for (var i = 0; i < penumpang.length; i++) {
      if(penumpang[i] == undefined){
        penumpang[i] = nama;
      }else if (penumpang[i] == nama) {
        console.log(nama + " Sudah Ada Didalam Angkot");
      }else if(i == penumpang.length - 1){
        penumpang.push(nama);
      }
    }
  }

  return penumpang;
}
