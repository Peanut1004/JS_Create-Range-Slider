const body = document.querySelector('body');
const range = document.querySelector('.range');
const rangeBar = document.querySelector('.range-bar');

function setRangeBar(percent) {
    rangeBar.style.width = `${percent}%`;
    rangeBar.querySelector('span').innerHTML = `${percent}%`;
    body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`;
}

range.addEventListener('mousemove', function(e) {
    const process = e.pageX - this.offsetLeft;

    let percent = (process / this.offsetWidth) * 100;

    console.log(e.pageX)

    percent = Math.ceil(percent)
    
    setRangeBar(percent)
})

setRangeBar(55)