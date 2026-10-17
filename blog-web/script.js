// Data artikel untuk halaman detail
const artikel = {
  1: {kat:"HTML", judul:"Struktur Dasar Dokumen HTML",
      isi:"<p>Setiap halaman web diawali dengan <code>&lt;!DOCTYPE html&gt;</code> yang memberi tahu browser bahwa dokumen memakai HTML5.</p><p><code>&lt;head&gt;</code> berisi metadata seperti charset dan <code>&lt;title&gt;</code>. <code>&lt;body&gt;</code> berisi semua konten yang tampil di layar.</p>"},
  2: {kat:"CSS", judul:"Dasar CSS untuk Pemula",
      isi:"<p>CSS mengatur tampilan elemen HTML. Rumus dasarnya: selektor, properti, lalu nilai.</p><p>Contoh pada gambar di atas membuat semua paragraf berwarna biru dengan ukuran 18 piksel.</p>"},
  3: {kat:"Bootstrap", judul:"Mengenal Grid Bootstrap 5",
      isi:"<p>Grid Bootstrap memakai tiga kelas utama: <code>container</code> sebagai pembungkus, <code>row</code> sebagai baris, dan <code>col-*</code> sebagai kolom (total 12 kolom).</p><p>Di layar kecil, kolom otomatis tersusun atas-bawah.</p>"}
};
// Halaman detail: tampilkan artikel sesuai ?id=
if (document.getElementById("d-judul")) {
  const id = new URLSearchParams(location.search).get("id") || 1;
  const a = artikel[id] || artikel[1];
  document.getElementById("d-kat").textContent = a.kat;
  document.getElementById("d-judul").textContent = a.judul;
 const gambar = {1: "images/html.png", 2: "images/css.png", 3: "images/bootstrap.png"};
document.getElementById("d-img").src = gambar[id] || gambar[1];
  document.getElementById("d-isi").innerHTML = a.isi;
  document.title = a.judul + " | CatatanWeb";
}

// Halaman artikel: pencarian sederhana
const cari = document.getElementById("cari");
if (cari) {
  cari.addEventListener("input", () => {
    const q = cari.value.toLowerCase();
    document.querySelectorAll("#daftar .col-md-4").forEach(c => {
      c.style.display = c.textContent.toLowerCase().includes(q) ? "" : "none";
    });
  });
}

// Halaman login: validasi form
const form = document.getElementById("formLogin");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault(); // cegah form diproses jika belum valid
    const email = document.getElementById("email");
    const pass = document.getElementById("password");
    const pesan = document.getElementById("pesan");
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    const set = (el, errId, msg) => {
      document.getElementById(errId).textContent = msg;
      el.classList.toggle("is-invalid", !!msg);
      el.classList.toggle("is-valid", !msg);
      if (msg) valid = false;
    };

    set(email, "errEmail", email.value.trim() === "" ? "Email tidak boleh kosong."
      : !polaEmail.test(email.value.trim()) ? "Format email tidak valid." : "");
    set(pass, "errPass", pass.value === "" ? "Password tidak boleh kosong."
      : pass.value.length < 8 ? "Password minimal 8 karakter." : "");

    pesan.innerHTML = valid
      ? '<div class="alert alert-success">Login berhasil! Semua input valid.</div>'
      : '<div class="alert alert-danger">Login gagal. Periksa kembali input kamu.</div>';
  });
}
