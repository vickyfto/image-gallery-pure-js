const mainImg = document.querySelector('.main-img');
const containerSmallImg = document.querySelector('.container-small-img');
const thumbs = document.querySelectorAll('.thumbs');

    containerSmallImg.addEventListener('click', function(e) {
            mainImg.src = e.target.src;
            mainImg.classList.add('fade')
            setTimeout(function() {
                mainImg.classList.remove('fade')
            }, 500)

            thumbs.forEach(thumb => {
                thumb.className = 'thumb'
            })
            e.target.className = 'active'
            e.preventDefault()
    })



