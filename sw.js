self.addEventListener("install", evt => {
  console.log("install ");
});
self.addEventListener("activate", evt => {
  console.log("activated");
});  


self.addEventListener('fetch', evt => {
  // console.log('fetch event', evt);

  
});