# Submission Belajar Back-End Pemula dengan JavaScript

## Deskripsi Proyek

Proyek ini adalah submission untuk kelas "Belajar Back-End Pemula dengan JavaScript" pada program Coding Camp 2025 powered by DBS Foundation. Implementasi ini mencakup pembuatan RESTful API untuk sistem pengelolaan buku.

## Spesifikasi Teknis

- Port: 9000
- Start Command: `npm run start`
- ESLint: Diimplementasikan untuk menjaga konsistensi kode

## Fitur API

### Kriteria Utama

1. Menyimpan buku
2. Menampilkan seluruh buku
3. Menampilkan detail buku
4. Mengubah data buku
5. Menghapus buku

### Endpoints Detail

#### GET /books

Mendukung beberapa query parameters:

1. `name` - Filter buku berdasarkan nama (case-insensitive)

   - Contoh: `/books?name=javascript`

2. `reading` - Filter buku berdasarkan status pembacaan

   - `0`: Buku yang sedang tidak dibaca
   - `1`: Buku yang sedang dibaca

3. `finished` - Filter buku berdasarkan status penyelesaian
   - `0`: Buku yang belum selesai dibaca
   - `1`: Buku yang sudah selesai dibaca

#### GET /books/{bookId}

Mengambil detail buku berdasarkan ID

#### POST /books

Menambahkan buku baru dengan CORS enabled

#### PUT /books/{bookId}

Mengubah data buku berdasarkan ID

#### DELETE /books/{bookId}

Menghapus buku berdasarkan ID

## Kualitas Kode

- Menggunakan ESLint untuk memastikan konsistensi gaya penulisan kode
- Mengikuti style guide JavaScript yang standar
- Tidak ada error saat menjalankan `npx eslint .`
