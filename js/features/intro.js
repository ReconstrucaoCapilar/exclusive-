
    (function(){
      const intro=document.getElementById('mk3Intro');
      if(!intro) return;

      const reduced=window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const visibleFor=reduced ? 450 : 1750;

      document.documentElement.style.background='#030507';
      document.body.style.overflow='hidden';

      window.addEventListener('load',function(){
        window.setTimeout(function(){
          intro.classList.add('hide');
          document.body.style.overflow='';
          window.setTimeout(function(){
            intro.remove();
          },760);
        },visibleFor);
      },{once:true});

      // Fallback caso algum recurso demore demais.
      window.setTimeout(function(){
        if(document.body.contains(intro) && !intro.classList.contains('hide')){
          intro.classList.add('hide');
          document.body.style.overflow='';
          window.setTimeout(function(){ if(intro.parentNode) intro.remove(); },760);
        }
      },4200);
    })();
  