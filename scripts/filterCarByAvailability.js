function filterCarByAvailability(cars) {
  //Disini kamu akan membuat sebuah fungsi yang berguna untuk menyaring daftar mobil,
  //yang mana dari daftar mobil tersebut ketika sudah disaring,
  //akan menyisakan daftar mobil yang mana dapat disewa.
  let arrcar = [...cars]
  // Sangat dianjurkan untuk console.log semua hal hehe
  let container = []
  let j = 0
  for(let i = 0; i < arrcar.length; i++){
    if(arrcar[i].available === true){
      container[j] = cars[i];
      j++
    }
  }
  // Tempat penampungan hasil
  const result = container;

  // Tulis code-mu disini

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
