const menus = document.querySelectorAll('.header-nav a');

menus.forEach(menu => {
    menu.addEventListener('click', function(e){
        const img = e.target.firstElementChild;
        
        if (img.classList.contains('rotated')) {
            img.classList.remove('rotated');
        } else {
            menus.forEach(item => {
                const otherImg = item.firstElementChild;
                if (otherImg.classList.contains('rotated')) {
                    otherImg.classList.remove('rotated');
                }
            });
            img.classList.add('rotated');
        }
    });
});
