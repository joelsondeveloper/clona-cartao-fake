
function flipCard() {
    const inputCvv = document.getElementById('cvv');
    const card3d = document.querySelector('.card-2');


    // card3d.style.setProperty('--transform', 'rotateY(10deg)');

    inputCvv.addEventListener('blur', () => {
        card3d.querySelector('.card-back').style.transform = 'rotateY(180deg)';
        card3d.querySelector('.card-front').style.transform = 'rotateY(0deg)';
    });
    
    inputCvv.addEventListener('focus', () => {
        card3d.querySelector('.card-back').style.transform = 'rotateY(0deg)';
        card3d.querySelector('.card-front').style.transform = 'rotateY(180deg)';
    });

    
}