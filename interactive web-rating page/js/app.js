const firstSection = document.getElementById('section-1')
const secSection = document.getElementById('section-2')
const button = document.getElementById('btn')



button.addEventListener('click', (e) => {
    e.preventDefault();
    firstSection.style.display = 'none';
    secSection.style.display = 'block';
});