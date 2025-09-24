// =========================
// SPA Routing & Show Pages
// =========================
const sectionList = ["home","dokumentasi","proker","bph","sekbid","kontak"];
function showPage(page, sekbidNo = null) {
  sectionList.forEach(s => document.getElementById(s).classList.remove('active'));
  if(page === 'sekbid' && sekbidNo){
    document.getElementById('sekbid').classList.add('active');
    updateSekbidPage(sekbidNo);
  } else {
    document.getElementById(page).classList.add('active');
  }
  window.scrollTo(0,0);
}
// ==============
// Dummy Data
// ==============
const dokumentasi = Array.from({length:50}).map((_,i)=>({
  foto:`images/dok${i+1}.jpg`, caption:`Kegiatan ke-${i+1}`
}));
const proker = Array.from({length:30}).map((_,i)=>({
  judul:`Proker ${i+1}`, sekbid:`Sekbid ${((i%10)+1)}`, deskripsi:`Deskripsi singkat proker ke-${i+1}`
}));
const bph = [
  {nama:"Ketua OSIS", foto:"images/bph1.jpg"},
  {nama:"Wakil Ketua OSIS", foto:"images/bph2.jpg"},
  {nama:"Sekretaris", foto:"images/bph3.jpg"},
  {nama:"Bendahara", foto:"images/bph4.jpg"},
];
const sekbid = {};
for(let i=1;i<=10;i++){
  sekbid[i]=Array.from({length:5}).map((_,j)=>({
    nama:`Anggota Sekbid ${i}-${j+1}`, foto:`images/sekbid${i}-${j+1}.jpg`
  }));
}
// ================
// Render Function
// ================
function renderDokumentasi(){
  const list = document.getElementById('dokumentasi-list');
  list.innerHTML = dokumentasi.map((d,i)=>`
    <div class="col">
      <div class="card shadow-sm">
        <img src="${d.foto}" class="card-img-top" alt="Dokumentasi ${i+1}" onerror="this.src='images/noimg.png'">
        <div class="card-body">
          <p class="card-text">${d.caption}</p>
        </div>
      </div>
    </div>
  `).join('');
}
function renderProker(){
  const list = document.getElementById('proker-list');
  list.innerHTML = proker.map((p,i)=>`
    <div class="col-md-6">
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title">${p.judul}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${p.sekbid}</h6>
          <p class="card-text">${p.deskripsi}</p>
        </div>
      </div>
    </div>
  `).join('');
}
function renderBPH(){
  const list = document.getElementById('bph-list');
  list.innerHTML = bph.map((b,i)=>`
    <div class="col">
      <div class="card text-center shadow-sm">
        <img src="${b.foto}" class="card-img-top" alt="${b.nama}" onerror="this.src='images/noimg.png'">
        <div class="card-body">
          <h5 class="card-title">${b.nama}</h5>
        </div>
      </div>
    </div>
  `).join('');
}
function updateSekbidPage(no){
  document.getElementById('sekbid-title').innerText = `Sekbid ${no}`;
  const list = document.getElementById('sekbid-list');
  list.innerHTML = sekbid[no].map((a,i)=>`
    <div class="col">
      <div class="card text-center shadow-sm">
        <img src="${a.foto}" class="card-img-top" alt="${a.nama}" onerror="this.src='images/noimg.png'">
        <div class="card-body">
          <h6 class="card-title">${a.nama}</h6>
        </div>
      </div>
    </div>
  `).join('');
}
// ===============
// Kontak section
// ===============
function editKontak(){
  let email = prompt("Edit email OSIS/sekola:", document.getElementById('kontak-email').innerText);
  let ig = prompt("Edit Instagram OSIS (tanpa @):", document.getElementById('kontak-ig').innerText.replace('@',''));
  if(email) document.getElementById('kontak-email').innerText = email;
  if(ig) {
    document.getElementById('kontak-ig').innerText = '@'+ig;
    document.getElementById('kontak-ig').href = 'https://instagram.com/'+ig;
  }
}
// ===============
// Edit Dokumentasi/Proker (dummy, ganti data array saja)
// ===============
function editDokumentasi(){
  alert('Untuk edit dokumentasi, silakan ganti file dan caption pada array di script.js (bagian dokumentasi)');
}
function editProker(){
  alert('Untuk edit proker, silakan edit array proker di script.js');
}
// ===============
// On Load
// ===============
window.onload = ()=>{
  renderDokumentasi();
  renderProker();
  renderBPH();
  updateSekbidPage(1);
  showPage('home');
}