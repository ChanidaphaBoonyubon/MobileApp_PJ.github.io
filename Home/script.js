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
    container.querySelector('.compact-view').style.display = 'none';
    container.querySelector('.expanded-view').style.display = 'block';
}

function closeExpanded(btn) {
    let container = btn.closest('.project-interactive-container');
    container.querySelector('.expanded-view').style.display = 'none';
    container.querySelector('.compact-view').style.display = 'block';
    
    let defaultTabBtn = container.querySelector('.left-tab');
    switchTab(defaultTabBtn, 1);
}
function switchTab(btn, tabIndex) {
    let contentArea = btn.closest('.expanded-content-area');
    let allTabs = contentArea.querySelectorAll('.tab-content');
    allTabs.forEach(tab => tab.style.display = 'none');
    contentArea.querySelector('.tab-' + tabIndex).style.display = 'block';
    let allBtns = contentArea.querySelectorAll('.side-tab-btn');
    allBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}