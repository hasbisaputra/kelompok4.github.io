function processPayment() {
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    //  proses pembayaran (dalam implementasi nyata, ini akan menjadi panggilan API atau proses server-side)
    if (cardNumber && expiryDate && cvv) {
        // Tampilkan pop-up notifikasi pembayaran berhasil
        Swal.fire({
            icon: 'success',
            title: 'Pembayaran Berhasil!',
            text: 'Terima kasih atas pembayaran Anda.',
        });
    } else {
        // Tampilkan pop-up notifikasi bahwa ada informasi yang kurang
        Swal.fire({
            icon: 'error',
            title: 'Gagal',
            text: 'Mohon isi semua informasi pembayaran dengan benar.',
        });
    }
}