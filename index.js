const yesbtn = document.querySelector('#yesbtn');

yesbtn.addEventListener('click', function() {
    alert('Ya sos mi novia')
});

const nobtn = document.querySelector('#nobtn');

nobtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobtn.style.setProperty('top', randomY+'%');
    nobtn.style.setProperty('left', randomX+'%');
    nobtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
