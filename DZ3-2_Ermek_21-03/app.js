//первоя часть dz

const miniBox = document.querySelector('.miniBox')

let posTop = 0;
let posLeft = 0;


step = () => {
    if (posLeft <= 380 && posTop === 0) {
        posLeft += 20;
        miniBox.style.left = `${posLeft}px`;
        setTimeout(step, 100);
    }
    else if(posLeft >= 380 && posTop <= 380 ){
        posTop += 20;
        miniBox.style.top = `${posTop}px`
        setTimeout(step, 100)

    }
    else if (posTop >= 380 && posLeft != 0) {
        posLeft -= 20;
        miniBox.style.left = `${posLeft}px`;
        setTimeout(step, 100);
    }
    else  if (posLeft == 0 && posTop != 0)
    {
        posTop -=20;
        miniBox.style.top = `${posTop}px`
        setTimeout(step,100)
    }


}
step()

//вторая часть dz


// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
//
// let timerId;
//
// start.addEventListener('click', function() {
//     let timerId = setInterval(function() {
//         let date = new Date;
//         console.log(date.getMinutes() + ' ' + date.getSeconds());
//     }, 1000);
// });
//
// stop.addEventListener('click', function() {
//     clearInterval(timerId);
// });

const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const time = document.querySelector(".time")


start.onclick = () => {
    const  startTime = setInterval(() => {

            time.innerHTML++
    },1000)

    stop.onclick = () => {
        clearInterval(startTime);
        time[0].innerHTML = 0;
    }

}






