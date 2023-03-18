var btnNumber = document.querySelectorAll("#btnNumber");
// çok fazla oldugu için bir dizi şeklinde aldık
var screen = document.querySelector("#screen");
var btnOpt = document.querySelectorAll("#btnOpt");
var optState = false;
var opt="";
var final = 0;
var clear = document.querySelector("#clear");
var prev = document.querySelector("#prev");


// direkt olarak bir onclick olayı ekleyemeyiz çinki dizi şeklinde aldık o yüzdeen bu yapıyı kullanıyoruz
btnNumber.forEach(number => {
    number.addEventListener("click", showNumber);

    function showNumber() {
        this.style.fontSize = "50px";

        if(screen.textContent == "0" || optState ) {
            screen.textContent = "";
        }

        
        screen.textContent += this.textContent;
        optState = false;

        setTimeout(() => {
            this.style.fontSize = "20px";
        }, 500);
    }
});



btnOpt.forEach(operator => {
    operator.addEventListener("click" , calculator);
        
    function calculator() {
        optState = true;
        // yani optState true oldugunda screenin içini temizlenecek
        var newOpt = this.textContent;

        switch(opt) {
            case "+": 
            screen.textContent = final + Number(screen.textContent);
            break;
            case "-": 
            screen.textContent = final - Number(screen.textContent);
            break;
            case "*": 
            screen.textContent = final * Number(screen.textContent);
            break;
            case "/": 
            screen.textContent = final / Number(screen.textContent);
            break;
            case "=": 
            final = Number(screen.textContent);
            break;
        }

        final = Number(screen.textContent);
        opt = newOpt;
    }
});

clear.addEventListener("click" , () => {
    screen.textContent="0";
});

prev.addEventListener("click" , () => {
    let sayi = Number(screen.textContent);
    // bir sayının son basamağını silmek için genellikle Math.floor()
    let yeniSayi = Math.floor(sayi / 10);
    screen.textContent = yeniSayi;
});