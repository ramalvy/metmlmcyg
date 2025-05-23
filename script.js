document.getElementById('startButton').onclick = function() {
    document.getElementById('greetingCard').style.display = 'flex';
    document.getElementById('startButton').style.display = 'none';
};

document.getElementById('nextButton').onclick = function() {
    const card = document.getElementById('greetingCard');
    card.innerHTML = `
        <div class="decorations"></div>
        <p>goodnight sayang, sleep well and dont forge to dream beautiful things with me hahaha, klo kamu belum 
        bisa bobo aku bisa nemenin kamu malam ini, tapi lebih baik kamu bobo sekarangg biar besok bisa ikut sholat 
        subuh, jangan bergadang yaa sayang ntar sakit awas aja, harus bobo okaii? tapii klo emg bener" gabisa bobo
        call aku aja yaa aku bakal nemenin kamu bobo, i always beside u sayang. makasi buat hari ini ya sayang, 
        makasii udah slalu buat aku bahagia dengan perhatian" kecil yang kamu kasii, i love uuu
        </p>
    `;
    document.getElementById('music').play();
};

// Mendapatkan elemen audio
const music = document.getElementById('music');

// Memutar audio saat halaman dimuat
window.onload = function() {
    music.play();
};