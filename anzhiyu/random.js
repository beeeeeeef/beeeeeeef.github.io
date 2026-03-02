var posts=["2026/02/28/CSS 层叠概念/","2026/02/28/通俗易懂的盒子模型/","2026/02/19/第一次配置博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };