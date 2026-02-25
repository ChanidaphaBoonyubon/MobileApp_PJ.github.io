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