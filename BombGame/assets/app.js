let bombInput = document.querySelector("#bombCount");
let startGame = document.querySelector("#start");
let bombArea = document.querySelector(".bomb-area-wrapper");
startGame.addEventListener("click",function(){
    let bombCount = Number(bombInput.value) * Number(bombInput.value    );
    this.setAttribute("disabled","");
    var newLineBomb;
    for (let i = 0; i < bombCount; i++) {
        if (i%Number(bombInput.value)==0) {
            console.log("wjingw");
            newLineBomb = document.createElement("div");
            newLineBomb.classList.add("bomb-area");
        }
        let btn = document.createElement("button");
        btn.classList.add("myBtn");
        newLineBomb.append(btn);
        bombArea.append(newLineBomb);
    }
});
    
    
    
    
    
    
    
    
    //Ekrana bir adet input ve bir adet buton koy. Butona tıkladığımda inputtaki sayının karesi kadar buton oluşturup, ekrana koysun. Oluşturulan butonun %10 u kadar mayın olacak. Her butona tıkladığımda eğer butonda mayın yoksa buton arka plan rengi mavi olacak ve +10 puan kazanacak, eğer mayın varsa tüm mayınlar kırmızı, mayın olmayanlar mavi olacak ve oyun bitecek. Oyuncunun en yüksek skorunu tutmak zorundayım!!


    // document.getElementById("start").addEventListener("click", function () {

        //Start butonuna bastığında inputtaki değerin karesi kadar olan butonu ekrana yazdırıyorum. ŞEKİL KARE OLACAK!!! yani eğer kullanıcı 5 girdiyse 5 satır 5 sütun olacak. 5 column 5 row!!

        // let userCount = document.getElementById('mayinAdet').value;

        //kullanıcı number bir değer girmediyse onu alert ile uyaralım!!
        // let mayinCount = Number(userCount) * Number(userCount);


        // for(let i = 1; i <= mayinCount; i++){

            //burada her for içerisinde bir buton oluşturacağım ve butonu ekrana basacağım. Ekrana basarken satır bitiş veya başlangıcına dikkat edilecek.

            //Toplam mayın adedinin %10 u kadar mayın olacak ve bunu RANDOM mayınların arkasında saklamam gerekli!!!
        // }

    // })
