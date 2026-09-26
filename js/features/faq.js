
(function(){
  function run(){
    if(!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    const faq=document.querySelector('.mk3-faq');
    if(!faq) return;
    const head=faq.querySelector('.mk3-faq-head');
    const items=faq.querySelectorAll('.mk3-faq-list details');
    if(head){
      gsap.fromTo(head,{y:34,opacity:0},{y:0,opacity:1,duration:.9,ease:'power3.out',scrollTrigger:{trigger:faq,start:'top 78%',once:true}});
      const accent=head.querySelector('.editorial-title span');
      if(accent) gsap.fromTo(accent,{backgroundPosition:'0% 50%'},{backgroundPosition:'100% 50%',duration:2.2,ease:'sine.inOut',scrollTrigger:{trigger:faq,start:'top 78%',once:true}});
    }
    gsap.fromTo(items,{y:30,opacity:0},{y:0,opacity:1,duration:.68,stagger:.09,ease:'power2.out',scrollTrigger:{trigger:faq.querySelector('.mk3-faq-list'),start:'top 82%',once:true}});
    items.forEach((d)=>{
      const a=d.querySelector('.mk3-faq-answer');
      d.addEventListener('toggle',()=>{
        if(d.open && a) gsap.fromTo(a,{opacity:0,y:-8},{opacity:1,y:0,duration:.35,ease:'power2.out'});
      });
    });
    const c=document.querySelector('.contact');
    if(c){
      const btn=c.querySelector('.btn');
      gsap.fromTo(c.querySelectorAll('.reveal'),{y:26,opacity:0},{y:0,opacity:1,duration:.75,stagger:.12,ease:'power2.out',scrollTrigger:{trigger:c,start:'top 82%',once:true}});
      if(btn) gsap.to(btn,{y:-4,duration:1.6,repeat:-1,yoyo:true,ease:'sine.inOut'});
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run); else run();
})();
