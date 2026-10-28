(function(){
function setup(){
 const btn=document.getElementById('mobile-menu-btn'),menu=document.getElementById('desktop-menu');
 if(btn&&menu){btn.addEventListener('click',()=>{const opened=menu.classList.toggle('open');btn.setAttribute('aria-expanded',String(opened));btn.innerHTML=opened?'✕':'☰';});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.innerHTML='☰';}));}
 document.querySelectorAll('[data-local-info]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();alert('Conteúdo ilustrativo: esse item depende do Joomla e não está disponível na prévia estática.');}));
 const form=document.getElementById('portfolio-contact-form');if(form){form.addEventListener('submit',e=>{e.preventDefault();document.getElementById('portfolio-form-response').textContent='Esta é uma prévia estática. Nenhuma mensagem foi enviada.';});}
 const search=document.getElementById('noticia-search')||document.getElementById('empresa-search');
 const sel=document.getElementById('empresa-status-filter');
 const filter=()=>{const q=(search&&search.value||'').toLocaleLowerCase('pt-BR');const status=sel&&sel.value||'';document.querySelectorAll('.joomla-news-card').forEach(card=>{const text=card.textContent.toLocaleLowerCase('pt-BR');const st=(card.getAttribute('data-status')||'').toLocaleLowerCase('pt-BR');card.style.display=text.includes(q)&&(!status||status==='all'||status==='todos'||status==='todas'||st.includes(status==='incubada'?'incuba':status==='pos-incubada'?'pós-incuba':status.toLocaleLowerCase('pt-BR')))?'':'none';});};
 if(search)search.addEventListener('input',filter);if(sel)sel.addEventListener('change',filter);
 const car=document.getElementById('carousel');
 if(car&&!car.children.length){const companies=['Projeto Aurora','Projeto Horizonte','Projeto Conecta','Projeto Pixel','Projeto Cais','Projeto Prisma','Projeto Semente','Projeto Beta','Projeto Nexus','Projeto Oceano','Projeto Atlas'];
 companies.concat(companies).forEach(name=>{let x=document.createElement('div');x.className='carousel-logo';x.style.cssText='min-width:185px;height:110px;background:#fff;border-radius:18px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px 16px;margin:6px 10px;box-shadow:0 8px 22px rgba(15,23,42,.08);border:1px solid #e2e8f0;text-align:center';x.innerHTML='<strong style="display:block;font-size:15px;color:#0f172a;margin-bottom:6px;line-height:1.2">'+name+'</strong><span style="display:block;font-size:11px;color:#64748b;line-height:1.35">Identidade visual disponível apenas na versão final.</span>';car.appendChild(x);});}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup);else setup();
})();
window.moveCarousel = function(direction){var c=document.getElementById('carousel');if(c){c.scrollBy({left:direction*310,behavior:'smooth'});}};
