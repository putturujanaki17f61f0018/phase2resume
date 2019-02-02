this.addEventListener('install'(event)=>{
  event.waitUntil(
    caches.open("my-cache")
    .then((cache)=>{
      cache.addAll([

      ])
    })
  )

})
this.addEventListener('fetch',(event)=>{
  event.respondWith(

    caches.open('my-cache')
    .then((cache)=>{
      return cache.match(event.request);
      .then((res)=>{
        return res || fetch(event.request)
        .then((res)=>{
          cache.put(event.request,res.clone());
          return res;
        })
      })
    })
  )
})
