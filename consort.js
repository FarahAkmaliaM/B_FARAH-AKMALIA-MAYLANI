class AntrianPembeli {
    constructor() {
        this.antrian = [];
    }

    // Menambahkan pembeli ke antrian
    tambahPembeli(nama) {
        this.antrian.push(nama);
        console.log(`${nama} telah ditambahkan ke antrian.`);
    }

    // Menghapus pembeli dari antrian setelah mendapatkan belanjaan
    prosesPembeli() {
        if (this.antrian.length > 0) {
            const pembeli = this.antrian.shift(); // Mengambil pembeli pertama
            console.log(`${pembeli} telah mendapatkan belanjaannya dan meninggalkan antrian.`);
        } else {
            console.log("Antrian kosong.");
        }
    }

    // Menampilkan antrian saat ini
    tampilkanAntrian() {
        console.log("Antrian saat ini:", this.antrian.join(', '));
    }
}

// Implementasi kasus
const antrian = new AntrianPembeli();

// Menambahkan pembeli awal
antrian.tambahPembeli("Ray");
antrian.tambahPembeli("Fiki");
antrian.tambahPembeli("Fadhilla");
antrian.tambahPembeli("Farah");

// Pembeli baru datang
antrian.tambahPembeli("Nabila");
antrian.tambahPembeli("Maza");
antrian.tambahPembeli("Elsi");

// Maza dan Elsi pulang
console.log("Maza dan Elsi tidak jadi antri dan pulang ke rumah.");

// Proses pembeli pertama (Ray)
antrian.prosesPembeli(); // Ray mendapatkan belanjaannya

// Proses pembeli kedua (Fiki)
antrian.prosesPembeli(); // Fiki mendapatkan belanjaannya

// Tomi datang dan nyerobot antrian
antrian.tambahPembeli("Tomi"); // Tomi masuk ke antrian

// Tampilkan status akhir antrian
antrian.tampilkanAntrian();
