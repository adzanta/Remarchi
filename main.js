const galleryImgs = document.querySelectorAll('.gallery-scroll img');
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');

galleryImgs.forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.add('active');
    modalImg.src = img.src;
  });
});

modal.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Inisialisasi peta dengan posisi dan zoom
const map = L.map('map').setView([-6.33039, 107.16572], 13); // Ganti dengan koordinat kamu

// Gunakan tile dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Tambahkan marker lokasi
L.marker([-6.33039, 107.16572]) // koordinat lokasi kamu
  .addTo(map)
  .bindPopup('<b>Sentra Budidaya Perikanan</b><br>Cikarang Selatan')
  .openPopup();

