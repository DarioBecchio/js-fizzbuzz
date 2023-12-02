//console.log('funziona');
//definisco la variabile per il container dove andranno le card
let containerEl = (document.querySelector('.container > #play_game'));
//definisco le card da inserire
/*



*/
for (let i = 1 ; i <= 100 ; i++) {
    console.log(i);
    if ( i % 3 === 0 && i % 5 === 0) {
        let fizz_buzz = `<div class="col"><div class="p-5 border bg-danger"> FIZZBUZZ </div></div>`;
        containerEl.innerHTML += fizz_buzz ;
        } else if (i % 3 === 0) {
            let fizz = `<div class="col"><div class="p-5 border bg-warning"> FIZZ </div></div>`;
            containerEl.innerHTML += fizz ;    
            } else if (i % 5 === 0) {
                let buzz = `<div class="col"><div class="p-5 border bg-success"> BUZZ </div></div>`;
                containerEl.innerHTML += buzz ;               
                } else {
                    let nothing = `<div class="col"><div class="p-5 border bg-light">${i}</div></div>`;
                    containerEl.innerHTML += nothing
                        }
    
                    }