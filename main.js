//console.log('funziona');
//definisco la variabile per il container dove andranno le card
let containerEl = document.querySelector('.container > #play_game');
//definisco le card da inserire
let fizz = `<div class="col"><div class="p-3 border bg-light">FIZZ</div></div>`
let buzz = `<div class="col"><div class="p-3 border bg-light">BUZZ</div></div>`
let fizz_buzz = `<div class="col"><div class="p-3 border bg-light">FIZZBUZZ</div></div>`
let nothing = `<div class="col"><div class="p-3 border bg-light"></div></div>`
for (let i = 0 ; i <= 100 ; i++) {
    console.log(i);
    if ( i / 3 == 0 && i / 5 == 0) {
        containerEl.innerHTML(fizz_buzz).anchor
        } elseif (i / 3 == 0) {
            containerEl.innerHTML(fizz).anchor    
            } elseif (i / 5 == 0) {
                containerEl.innerHTML(fizz).anchor
                } else {
                    containerEl.innerHTML(nothing).anchor
                        }
                    }