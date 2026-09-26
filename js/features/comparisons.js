
window.addEventListener('load',()=>{
  if(!window.gsap)return;
  const gs=window.gsap, ST=window.ScrollTrigger;
  if(ST) gs.registerPlugin(ST);
  const section=document.querySelector('.comparison-section');
  if(!section)return;
  const opts=ST?{scrollTrigger:{trigger:section,start:'top 78%',once:true}}:{};
  gs.from(section.querySelectorAll('.comparison-heading .label,.comparison-heading h2,.comparison-hint'),{y:28,opacity:0,duration:.85,stagger:.10,ease:'power3.out',...opts});
  section.querySelectorAll('.comparison-frame').forEach((frame,i)=>{
    const cfg=ST?{scrollTrigger:{trigger:frame,start:'top 84%',once:true}}:{};
    gs.from(frame,{y:34,opacity:0,scale:.985,duration:1,ease:'power3.out',delay:i*.05,...cfg});
  });
  section.querySelectorAll('.comparison-project-head').forEach(head=>{
    const cfg=ST?{scrollTrigger:{trigger:head,start:'top 88%',once:true}}:{};
    gs.from(head.children,{y:18,opacity:0,duration:.7,stagger:.08,ease:'power2.out',...cfg});
  });
});
