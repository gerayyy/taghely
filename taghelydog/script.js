document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const siteSections = document.querySelectorAll('.site-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            siteSections.forEach(section => {
                const category = section.getAttribute('data-category');
                if (targetTab === 'all' || category === targetTab) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });
});
