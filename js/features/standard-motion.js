
(function(){
  const root=document.querySelector('.standard-cinema');
  if(!root) return;
  const visual=root.querySelector('.standard-cinema-visual');
  const video=root.querySelector('.standard-cinema-video');
  const top=root.querySelector('.standard-cinema-top');
  const copy=root.querySelector('.standard-cinema-copy');
  const brands=root.querySelector('.standard-cinema-brands');
  const items=[...root.querySelectorAll('.standard-cinema-item')];
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const activate=()=>{
    if(visual) visual.classList.add('ex-standard-in');
    if(reduce) return;

    if(window.gsap){
      const gsap=window.gsap;
      gsap.set([top,copy,brands],{willChange:'transform,opacity'});
      if(video) gsap.fromTo(video,{scale:1.045},{scale:1,duration:1.65,ease:'power3.out'});
      if(top) gsap.fromTo(top,{y:18,opacity:0},{y:0,opacity:1,duration:.75,ease:'power3.out'});
      if(copy){
        const parts=[copy.querySelector('.standard-cinema-kicker'),copy.querySelector('h2'),copy.querySelector('p')].filter(Boolean);
        gsap.fromTo(parts,{y:34,opacity:0},{y:0,opacity:1,duration:.9,stagger:.11,ease:'power3.out',delay:.08});
      }
      if(brands) gsap.fromTo(brands,{y:18,opacity:0},{y:0,opacity:1,duration:.8,ease:'power3.out',delay:.38});
      if(items.length) gsap.fromTo(items,{y:28,opacity:0},{y:0,opacity:1,duration:.82,stagger:.12,ease:'power3.out',delay:.16});
      return;
    }
    [top,copy,brands,...items].filter(Boolean).forEach(el=>{el.style.opacity='1';el.style.transform='none'});
  };

  if('IntersectionObserver' in window){
    const io=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){activate();io.disconnect();}
      });
    },{threshold:.18});
    io.observe(root);
  }else activate();

  if(!reduce && video && window.gsap){
    let ticking=false;
    window.addEventListener('scroll',()=>{
      if(ticking) return;
      ticking=true;
      requestAnimationFrame(()=>{
        const r=visual.getBoundingClientRect();
        const vh=window.innerHeight||1;
        const progress=Math.max(-1,Math.min(1,(r.top+r.height/2-vh/2)/vh));
        gsap.to(video,{y:progress*-12,duration:.5,ease:'power2.out',overwrite:'auto'});
        ticking=false;
      });
    },{passive:true});
  }
})();
