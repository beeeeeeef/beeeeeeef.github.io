var posts=["2026/02/28/CSS 层叠概念/","2026/02/19/第一次配置博客/","2026/03/06/JavaScript 运行机制：从执行上下文到事件循环与 DOM 冒泡/","2026/02/28/通俗易懂的盒子模型/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };