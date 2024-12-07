export const city = () => {
    if (document.querySelector('.city-name')) {
        const cityButton = document.querySelector('.city-name');
        const cityModal = document.querySelector('.city');
        const cityButtonsContainer = cityModal.querySelector('.city__buttons');
        const cityButtons = Array.from(cityButtonsContainer.querySelectorAll('.city__button'));
        const cityInput = cityModal.querySelector('.input');

        const toggleModal = (state) => {
            if (state) {
                cityModal.classList.add('active');
            } else {
                cityModal.classList.remove('active');
            }
        };

        cityButton.addEventListener('click', (e) => {
            e.preventDefault();
            const isActive = cityModal.classList.contains('active');
            toggleModal(!isActive);
        });

        cityButtons.forEach(button => {
            button.addEventListener('click', () => {
                const cityName = button.dataset.city;
                cityButton.innerHTML = `<img src="./img/tree.svg" alt="auto">${cityName}`;
                cityInput.value = ''; 
                cityButtons.forEach(btn => (btn.style.display = 'block')); 
                toggleModal(false); 
            });
        });

        document.addEventListener('click', (e) => {
            if (!cityModal.contains(e.target) && !cityButton.contains(e.target)) {
                toggleModal(false);
            }
        });

        cityInput.addEventListener('input', () => {
            const query = cityInput.value.toLowerCase().trim();
            cityButtons.forEach(button => {
                const cityName = button.textContent.toLowerCase();
                button.style.display = cityName.includes(query) ? 'block' : 'none';
            });
        });
    }
};
