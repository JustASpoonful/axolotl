 const productionLogo = document.getElementById('productionLogo');
    const vanityCard = document.getElementById('vanityCard');
    const vanityPlate = document.getElementById('vanityPlate');
    const anotherLogo = document.getElementById('anotherLogo');

    setTimeout(() => {
        productionLogo.classList.add('fade-in');
        setTimeout(() => {
            productionLogo.classList.add('fade-out');
            setTimeout(() => {
                productionLogo.style.display = 'none';

                vanityCard.style.display = 'block';
                vanityCard.classList.add('fade-in');
                setTimeout(() => {
                    vanityCard.classList.add('fade-out');
                    setTimeout(() => {
                        vanityCard.style.display = 'none';

                        vanityPlate.style.display = 'block';
                        vanityPlate.classList.add('fade-in');
                        setTimeout(() => {
                            vanityPlate.classList.add('fade-out');
                            setTimeout(() => {
                                vanityPlate.style.display = 'none';

                                anotherLogo.style.display = 'block';
                                anotherLogo.classList.add('fade-in');
                                setTimeout(() => {
                                    anotherLogo.classList.add('fade-out');
                                    setTimeout(() => {
                                        anotherLogo.style.display = 'none';
                                    }, 2000);
                                }, 5000);
                            }, 2000);
                        }, 5000);
                    }, 2000);
                }, 5000);
            }, 2000);
        }, 5000);
    }, 1000);
