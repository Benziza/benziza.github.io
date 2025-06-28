/* ========= Progress bar ========= */
const progress = document.getElementById('progress');
addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  progress.style.height = `${(scrollY / h) * 100}%`;
});

/* ========= Nav highlight ========= */
document.querySelectorAll('.nav-item').forEach(a=>{
  if (a.dataset.page === document.body.dataset.page){
    a.classList.add('active');
  }
});

/* ========= Tabs (Experience page) ========= */
(() => {
  const expBtn  = document.getElementById('pillExp');
  const eduBtn  = document.getElementById('pillEdu');
  const tlIcon  = document.getElementById('tlIcon');
  const timeline= document.getElementById('timeline');
  if(!expBtn || !eduBtn) return;      // si on n’est pas sur experience.html

  expBtn.addEventListener('click', () => toggle(true));
  eduBtn.addEventListener('click', () => toggle(false));

  function toggle(isExp){
    expBtn.classList.toggle('is-active', isExp);
    eduBtn.classList.toggle('is-active', !isExp);
    tlIcon.className = `fa-solid ${isExp ? 'fa-briefcase':'fa-graduation-cap'} text-[var(--accent)] text-lg`;
    timeline.dataset.mode = isExp ? 'exp' : 'edu';  // si tu utilises render() dynamique
  }
})();

/* ========= Toggle Skills / Tools (Skills page) ========= */
(() => {
  const skillsBtn = document.getElementById('pillSkills');
  const toolsBtn  = document.getElementById('pillTools');
  const gridSkills= document.getElementById('gridSkills');
  const gridTools = document.getElementById('gridTools');
  if(!skillsBtn || !toolsBtn) return; // pas sur skills.html

  skillsBtn.addEventListener('click', ()=>switchGrid(true));
  toolsBtn .addEventListener('click', ()=>switchGrid(false));

  function switchGrid(showSkills){
    skillsBtn.classList.toggle('is-active',  showSkills);
    toolsBtn .classList.toggle('is-active', !showSkills);
    gridSkills.classList.toggle('hidden', !showSkills);
    gridTools .classList.toggle('hidden',  showSkills);
  }
})();
