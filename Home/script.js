// ================= SLIDER =================

const slider = document.querySelector('.info-slider');
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
let autoSlide;

// ---------- UPDATE ----------
function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// ---------- NEXT ----------
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateSlide();
    resetAutoSlide();
});

// ---------- PREV ----------
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlide();
    resetAutoSlide();
});

// ---------- AUTO ----------
function startAutoSlide() {
    autoSlide = setInterval(() => {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        updateSlide();
    }, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

startAutoSlide();

// ---------- SWIPE MOBILE ----------
let startX = 0;
let endX = 0;

slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        currentIndex++;
        if (currentIndex >= slides.length) currentIndex = 0;
    } 
    else if (endX - startX > 50) {
        currentIndex--;
        if (currentIndex < 0) currentIndex = slides.length - 1;
    }

    updateSlide();
    resetAutoSlide();
});

// วงกลม
document.querySelectorAll(".slice").forEach(slice => {
  slice.addEventListener("click", function() {
    document.querySelectorAll(".slice").forEach(s => s.classList.remove("active"));
    this.classList.add("active");
    document.querySelector(".center-box").style.opacity = 0;
  });
});

// การ์ดโปรเจก
function openExpanded(btn) {
    let container = btn.closest('.project-interactive-container');

    container.querySelector('.compact-view').classList.add('hidden');
    container.querySelector('.expanded-view').classList.remove('hidden');
}

function closeExpanded(btn) {
    let container = btn.closest('.project-interactive-container');

    container.querySelector('.expanded-view').classList.add('hidden');
    container.querySelector('.compact-view').classList.remove('hidden');

    let defaultTabBtn = container.querySelector('.left-tab');
    switchTab(defaultTabBtn, 1);
}