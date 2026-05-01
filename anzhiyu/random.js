var posts=["2026/03/06/JavaScript 运行机制：从执行上下文到事件循环与 DOM 冒泡/","2026/02/28/CSS 级联层运用/","2026/03/14/校内串流小巧思/","2026/02/19/第一次配置博客/","2026/02/28/通俗易懂的盒子模型/","2026/04/30/React Navigation 路由演化/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };