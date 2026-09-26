
(function(){
  let played=false;
  function animateModal(){
    const modal=document.querySelector('.evaluation-modal');
    if(!modal || !modal.classList.contains('open')) return;
    const dialog=modal.querySelector('.evaluation-dialog');
    const brand=modal.querySelector('.evaluation-brand');
    const eyebrow=modal.querySelector('.evaluation-eyebrow');
    const title=modal.querySelector('.evaluation-title');
    const text=modal.querySelector('.evaluation-text');
    const form=modal.querySelector('.evaluation-form');
    if(window.gsap){
      const gs=window.gsap;
      gs.killTweensOf([dialog,brand,eyebrow,title,text,form]);
      gs.fromTo(dialog,{y:24,scale:.975,opacity:.2},{y:0,scale:1,opacity:1,duration:.58,ease:'power3.out'});
      gs.fromTo([brand,eyebrow],{y:12,opacity:0},{y:0,opacity:1,duration:.45,stagger:.06,ease:'power2.out',delay:.10});
      gs.fromTo(title,{y:22,opacity:0},{y:0,opacity:1,duration:.62,ease:'power3.out',delay:.18});
      gs.fromTo(text,{y:14,opacity:0},{y:0,opacity:1,duration:.50,ease:'power2.out',delay:.27});
      gs.fromTo(form,{y:18,opacity:0},{y:0,opacity:1,duration:.58,ease:'power3.out',delay:.34});
      const vid=modal.querySelector('.evaluation-video');
      if(vid) gs.fromTo(vid,{scale:1.06},{scale:1.015,duration:1.4,ease:'power2.out'});
    }
  }

  function boot(){
    const modal=document.querySelector('.evaluation-modal');
    if(!modal) return;
    const observer=new MutationObserver(()=> {
      if(modal.classList.contains('open')){
        requestAnimationFrame(animateModal);
      }
    });
    observer.observe(modal,{attributes:true,attributeFilter:['class']});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();
