  // 获取屏幕的宽度
  var devicewidth = document.documentElement.clientWidth;
  // 计算根标签的font-size的值  1rem = 100px    设计稿  750px
  if(devicewidth>750){
      // 条件为真执行的代码段
      devicewidth=750;
  }
  var fs = devicewidth/7.5;
  // 把fs的值赋值给根标签
  // 把等号右侧的值赋值给左侧
  document.documentElement.style.fontSize=fs+"px";