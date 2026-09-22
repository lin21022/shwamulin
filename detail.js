(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const index = PROJECTS.findIndex(p => p.id === id);
  const project = PROJECTS[index];

  if (!project) {
    document.getElementById('detailTitle').textContent = 'Project Not Found';
    return;
  }

  // 基本文字內容
  document.title = `YuHsin • ${project.title}`;
  document.getElementById('detailRole').textContent = project.role;
  document.getElementById('detailTitle').textContent = project.title;
  document.getElementById('detailDescription').textContent = project.description;

  // 技能清單
  const skillsList = document.getElementById('detailSkills');
  project.skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Results（只有部分專案有，例如 project6）
  if (project.results && project.results.length) {
    document.getElementById('detailResultsWrap').style.display = 'block';
    const resultsList = document.getElementById('detailResults');
    project.results.forEach(r => {
      const li = document.createElement('li');
      li.textContent = r;
      resultsList.appendChild(li);
    });
  }

  // Demo 連結（只有部分專案有，例如 project7）
  if (project.demo) {
    const demoLink = document.getElementById('detailDemo');
    demoLink.href = project.demo;
    demoLink.style.display = 'inline-block';
  }

  // 圖片畫廊（多張圖片）
  const gallery = document.getElementById('detailGallery');
  project.images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = project.title;
    img.addEventListener('click', () => openLightbox(src));
    gallery.appendChild(img);
  });

  // Lightbox 開關
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('show');
  }

  document.getElementById('lightboxClose').addEventListener('click', () => {
    lightbox.classList.remove('show');
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('show');
  });

  // 上一篇 / 下一篇導覽（首尾循環）
  const prevIndex = (index - 1 + PROJECTS.length) % PROJECTS.length;
  const nextIndex = (index + 1) % PROJECTS.length;

  const prevLink = document.getElementById('prevProject');
  const nextLink = document.getElementById('nextProject');
  prevLink.href = `project-detail.html?id=${PROJECTS[prevIndex].id}`;
  nextLink.href = `project-detail.html?id=${PROJECTS[nextIndex].id}`;
})();