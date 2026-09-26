
    (function(){
      const video=document.querySelector('.standard-cinema-video');
      if(!video) return;
      const setStart=()=>{
        try{
          if(video.duration && video.duration>2.5) video.currentTime=2;
        }catch(_){}
        video.play().catch(()=>{});
      };
      if(video.readyState>=1) setStart();
      else video.addEventListener('loadedmetadata',setStart,{once:true});
      document.addEventListener('visibilitychange',()=>{
        if(!document.hidden) video.play().catch(()=>{});
      });
    })();
  