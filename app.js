
document.querySelectorAll('.mobile-toggle')?.forEach(b=>{
  b.addEventListener('click',()=>{
    const m=document.querySelector('nav .menu'); if(!m) return;
    m.style.display = m.style.display==='flex' ? 'none' : 'flex';
  })
});
const form=document.querySelector('form[data-enhanced]');
if(form){
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const btn=form.querySelector('button[type="submit"]'); const note=form.querySelector('.notice');
    btn.disabled=true; btn.textContent='Sending…';
    try{
      const resp=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
      if(resp.ok){ form.reset(); note.textContent='Thanks! We’ll reply within 1 business day.'; note.style.color='var(--ok)'; }
      else{ note.textContent='Error sending. Email us directly.'; note.style.color='var(--danger)'; }
    }catch{ note.textContent='Network error. Try again or email us.'; note.style.color='var(--danger)'; }
    btn.disabled=false; btn.textContent='Send';
  });
}
