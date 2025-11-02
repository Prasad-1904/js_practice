// generate random color // random hex values

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let inter;

const startChangeColor = function () {
    function changeColor() {
        document.body.style.backgroundColor = randomColor()
    }
    if(!inter){
        inter = setInterval(changeColor, 1000)
    }
    
}

const stopChangeColor = function () {
    clearInterval(inter);
    inter = null;
}

document.querySelector('#start').addEventListener('click', startChangeColor)

document.querySelector('#stop').addEventListener('click', stopChangeColor)