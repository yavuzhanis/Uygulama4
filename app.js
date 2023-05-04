//Kelime Sayısı Bulma Uygulaması:

//Kullanıcıdan Harfleri girmesini istedik.
let metin = "Şu anda  javascript eğitimi yapmaktayım";
let harf = prompt("Harfi Giriniz:");

// let sonuc = bul(harf);
// alert("Harf Sayısı: " + sonuc);
bul("a");
bul("e");//farklı sonuc alma şekilleri.
bul("s");
function bul(harf) { //fonksiyonu tanımladık
    let toplam = 0;
    for (let i = 0; i < metin.length; i++) { //for döngüsü tanımladık
        if (metin.charAt(i) == harf) { //charAt() kullanarak harf değerlerini döndürdük
            toplam += 1;
        }
    }
    console.log("Harf Sayisi:" + toplam);
    // return toplam
}

