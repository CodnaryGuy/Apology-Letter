const envelope = document.getElementById('envelope');
const envelopeWrap = document.getElementById('envelopeWrap');
const letterWrap = document.getElementById('letterWrap');

const bgMusic = document.getElementById('bgMusic');
bgMusic.loop = true;
let musicStarted = false;

function playMusic() {
    if (musicStarted) return;

    bgMusic.volume = 0;

    bgMusic.play()
        .then(() => {
            musicStarted = true;

            let vol = 0;
            const fade = setInterval(() => {
                vol += 0.02;

                if (vol >= 0.28) {
                    vol = 0.28;
                    clearInterval(fade);
                }

                bgMusic.volume = vol;
            }, 120);
        })
        .catch(err => {
            console.log('Playback prevented:', err);
        });
}

function openEnvelope() {
    if (envelope.classList.contains('open')) return;
    envelope.classList.add('open');
    playMusic();
    setTimeout(() => {
        envelopeWrap.classList.add('hidden');
        letterWrap.style.display = 'block';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                letterWrap.classList.add('visible');
            });
        });
    }, 750);
}

envelope.addEventListener('click', openEnvelope);
envelope.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openEnvelope();
    }
});

const btnTalk = document.getElementById('btnTalk');
const btnSpace = document.getElementById('btnSpace');
const responseText = document.getElementById('responseText');

function selectButton(clicked, other, message) {
    clicked.classList.add('active');
    other.classList.remove('active');
    responseText.textContent = message;
    responseText.classList.add('shown');
}

btnTalk.addEventListener('click', () => {
    selectButton(btnTalk, btnSpace, "Thank you for reading this. I'll wait for you to reach out whenever feels right.");
});

btnSpace.addEventListener('click', () => {
    selectButton(btnSpace, btnTalk, "Okay. No expectations — I just wanted you to know how I feel.");
});

const musicToggle = document.getElementById('musicToggle');

musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.classList.remove('muted');
        musicToggle.textContent = '🎵';
    } else {
        bgMusic.pause();
        musicToggle.classList.add('muted');
        musicToggle.textContent = '🔇';
    }
});