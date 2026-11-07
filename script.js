// TODO: ganti dengan fitur atau keunggulan produk kalian
const fitur = [
    { judul: 'Route/Track', keterangan: 'Panduan arah perjalanan.' },
    { judul: 'Penyewaan/Rental', keterangan: 'Sewa kendaraan dan losgistik untuk perjalanan Anda.' },
    { judul: 'Dokumentasi', keterangan: 'Dokumentasi foto dan video perjalanan Anda.' },
];

function tampilkanFitur() {
    const wadah = document.getElementById('daftar-fitur');
    wadah.innerHTML = '';
    for (const f of fitur) {
        const kartu = document.createElement('article');
        kartu.className = 'kartu';
        kartu.innerHTML = `<h3>${f.judul}</h3><p>${f.keterangan}</p>`;
        wadah.appendChild(kartu);
    }
}

// Form belum dikirim ke server; cukup periksa isian lalu tampilkan pesan.
const form = document.getElementById('form-daftar');
const pesan = document.getElementById('pesan');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const telepon = form.telepon.value.trim();

    pesan.hidden = false;
    if (!form.email.checkValidity() || telepon === '') {
        pesan.textContent = 'Isi alamat email dan nomor telepon yang benar.';
        pesan.className = 'pesan gagal';
        return;
    }
    pesan.textContent = `Terima kasih. Kami akan menghubungi ${email} atau ${telepon}.`;
    pesan.className = 'pesan berhasil';
    form.reset();
});

tampilkanFitur();
