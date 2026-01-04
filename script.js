document.getElementById("letterForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const surat = {
    nama: nama.value,
    kenangan: bagian1.value,
    pesan: bagian2.value,
    harapan: harapan.value
  };

  const data = JSON.parse(localStorage.getItem("suratNafila")) || [];
  data.push(surat);
  localStorage.setItem("suratNafila", JSON.stringify(data));

  alert("Surat berhasil dikirim 💌");
  e.target.reset();
});
