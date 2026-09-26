
(function(){
  function bootProjectsV12(){
    const section=document.querySelector('#projetos');
    if(!section || section.dataset.v12Animated==='1') return;
    section.dataset.v12Animated='1';
    const head=section.querySelector('.section-head');
    const label=section.querySelector('.label');
    const title=section.querySelector('.editorial-title');
    const action=section.querySelector('.projects-action');
    const cards=[...section.querySelectorAll('.project')];
    const reduce=window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce) return;

    if(window.gsap && window.ScrollTrigger){
      gsap.registerPlugin(ScrollTrigger);
      const tl=gsap.timeline({scrollTrigger:{trigger:section,start:'top 78%',once:true}});
      tl.fromTo(label,{y:18,opacity:0},{y:0,opacity:1,duration:.55,ease:'power2.out'})
        .fromTo(title,{y:30,opacity:0},{y:0,opacity:1,duration:.82,ease:'power3.out'},'-=.26')
        .fromTo(action,{y:18,opacity:0},{y:0,opacity:1,duration:.62,ease:'power2.out'},'-=.46')
        .fromTo(cards,{y:34,opacity:0,scale:.985},{y:0,opacity:1,scale:1,duration:.76,stagger:.11,ease:'power3.out'},'-=.26');

      cards.forEach((card,idx)=>{
        const img=card.querySelector('img');
        if(!img) return;
        gsap.to(img,{
          yPercent:idx%2===0?-2.4:-1.7,
          ease:'none',
          scrollTrigger:{trigger:card,start:'top bottom',end:'bottom top',scrub:.75}
        });
      });
      gsap.to(section,{backgroundPosition:'58% 50%',ease:'none',scrollTrigger:{trigger:section,start:'top bottom',end:'bottom top',scrub:1}});
    } else {
      const io=new IntersectionObserver(entries=>{
        entries.forEach(e=>{if(e.isIntersecting){section.classList.add('projects-v12-visible');io.disconnect();}})
      },{threshold:.12});
      io.observe(section);
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',bootProjectsV12,{once:true});
  else bootProjectsV12();
  window.addEventListener('load',bootProjectsV12,{once:true});
})();
