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

var tambahPenumpang = function (nama,penumpang) {

  if (penumpang.length == 0) {
    penumpang.push(nama);
    return penumpang;
  }else{
    for (var i = 0; i < penumpang.length; i++) {
      if(penumpang[i] == undefined){
        penumpang[i] = nama;
        return penumpang;
      }else if (penumpang[i] == nama) {
        console.log(nama + " Sudah Ada Didalam Angkot");
        return penumpang;
      }else if(i == penumpang.length - 1){
        penumpang.push(nama);
        return penumpang;
      }
    }
  }
}

var hapusPenumpang = function (nama,penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot Kosong");
    return penumpang;
  }else{
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == nama) {
        penumpang[i] = undefined;
        return penumpang;
      }else if(i == penumpang.length - 1){
        console.log("Tidak Ada "+nama+" Dalam Angkot");
        return penumpang;
      }
    }
  }
}

function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  }

  this.penumpangTurun = function(namaPenumpang, bayar){
    if (this.penumpang.length === 0) {
      alert('Angkot Masih Kosong');
      return false;
    }

    for (var i = 0; i < this.penumpang.length; i++) {
      if(this.penumpang[i] == namaPenumpang){
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang
      }
    }
  }
}

var angkot1 = new Angkot('Luna',['Cicaheum','Cibiru'],[],0);
