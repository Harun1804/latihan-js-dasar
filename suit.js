var tanya = true;

while (tanya) {
  // Menangkap Pilihan Player
  var player = prompt('Pilih : gajah, semut, orang');

  // Menangkap Pilihan Komputer
  // Membangkitkan Bilangan Random
  var comp = Math.random();
  if (comp < 0.34) {
    comp = 'gajah';
  }else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
  }else{
    comp = 'semut';
  }

  // Menentukan Rules
  var hasil = '';
  if(player == comp){
    hasil = 'SERI!';
  }else if(player == 'gajah'){
    hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
  }else if (player == 'orang') {
    hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
  }else if (player == 'semut') {
    hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
  }else{
    hasil = 'Tidak Ada Pilihan';
  }

  // Tampilkan Hasilnya
  alert('Kamu Memilih : '+player+ ' dan Komputer Memilih : '+comp+'\nMaka Hasilnya : Kamu '+hasil);
  tanya = confirm('Lagi?');
}

alert('Terima Kasih Sudah Bermain');
