// Script untuk navigasi smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Script untuk menangani form kontak
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah pengiriman form secara default

    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    // Validasi sederhana
    if (name === '' || email === '' || message === '') {
        alert('Semua harus diisi!');
        return;
    }

    // Mengirim data ke server (di sini hanya contoh, tidak ada endpoint)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form setelah pengiriman
    contactForm.reset();
    alert('Pesan Anda telah dikirim!');
});

// Menambahkan efek hover pada proyek
const projectImages = document.querySelectorAll('.projects img');
projectImages.forEach(image => {
    image.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    image.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
