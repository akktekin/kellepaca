// Burada hayvanların listesini oluşturuyoruz. Ardından her hayvana bir ayak sayısı atıyoruz.

const AnimalList = ["chicken", "sheep", "cow", "pig", "chicken", "cow", "pig", "sheep", "cow", "sheep"];
const chickenLeg = 2;
const sheepLeg = 4;
const cowLeg = 4;
const pigLeg = 4;

// Her zaman olduğu gibi, değerleri sıfırlıyoruz.

let numberOfCow = 0,
    numberOfShepp = 0,
    numberOfChicken = 0,
    numberOfPig = 0;

// i, Animal list in uzunluğundan küçükse her seferinde bir ekliyoruz.
// eğer animal list cow içeriyorsa cow sayısını bir artır(aynı işlem diğer hayvanlar için de uygulanıyor.)

for (i = 0; i < AnimalList.length; i++) {
    if (AnimalList[i].includes("cow")) {
        numberOfCow++
    }
    else if (AnimalList[i].includes("sheep")) {
        numberOfShepp++
    }
    else if (AnimalList[i].includes("pig")) {
        numberOfPig++
    }
    else if (AnimalList[i].includes("chicken")) {
        numberOfChicken++
    }

// helalBacakSayisi ismindeki değerimiz: inek sayısı ve inek ayalarının çarpımı + koyun sayısı ve koyun ayaklarının çarpımı'ndan... oluşuyor.
// konsola bu işlemin toplamını yazdırınca toplam helal hayvan bacak sayısını buluyoruz.

}
let helalBacakSayisi = numberOfCow * cowLeg + numberOfShepp * sheepLeg + numberOfChicken * chickenLeg;
console.log(`Helal bacak sayisi: ${helalBacakSayisi}`);