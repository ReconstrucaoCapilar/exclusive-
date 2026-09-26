
    (function(){
      const shot=document.querySelector('.mk3-standard-shot[data-standard-gallery]');
      if(!shot) return;
      const key=shot.getAttribute('data-standard-gallery');
      const source=document.querySelector('.project[data-gallery="'+key+'"] img') || document.querySelector('.project img');
      if(source && source.getAttribute('src')) shot.src=source.getAttribute('src');
    })();
  