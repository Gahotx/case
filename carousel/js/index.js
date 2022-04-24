window.addEventListener('load', function () {
  // 1. 鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮
  var arrow_l = document.querySelector('.arrow-l');
  var arrow_r = document.querySelector('.arrow-r');
  var focus = document.querySelector('.focus');
  var focusWidth = focus.offsetWidth;
  focus.addEventListener('mouseenter', function () {
    arrow_l.style.display = 'block';
    arrow_r.style.display = 'block';
    clearInterval(timer);
    timer = null;
    // console.log(timer);
  });
  focus.addEventListener('mouseleave', function () {
    arrow_l.style.display = 'none';
    arrow_r.style.display = 'none';
    timer = setInterval(function () {
      arrow_r.click();
    }, 2000);
  });
  var ul = focus.querySelector('ul');
  var ol = document.querySelector('.circle');
  // console.log(ul.children.length);
  // 2. 生成小圆圈
  for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement('li');
    // 生成索引号
    li.setAttribute('index', i);
    ol.appendChild(li);
    // 小圆圈 current 点击事件
    li.addEventListener('click', function () {
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';
      }
      this.className = 'current';
      var index = this.getAttribute('index');
      num = circle = index;
      // console.log(focusWidth);
      animate(ul, -index * focusWidth);
    });
  }
  ol.children[0].className = 'current';
  // 克隆第一张图片
  var firstPic = ul.children[0].cloneNode(true);
  ul.appendChild(firstPic);
  // 3. 点击右侧按钮
  var num = 0;
  var circle = 0;
  var flag = true;

  function circleNum() {
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = '';
    }
    ol.children[circle].className = 'current';
  }
  arrow_r.addEventListener('click', function () {
    if (flag) {
      flag = false;
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      circle++;
      animate(ul, -num * focusWidth, function () {
        flag = true;
      });
      // 小圆圈和图片一起变化
      if (circle == ol.children.length) {
        circle = 0;
      }
      circleNum();
    }
  });
  // 4. 点击左侧按钮
  arrow_l.addEventListener('click', function () {
    if (flag) {
      flag = false;
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = -num * focusWidth + 'px';
      }
      num--;
      circle--;
      animate(ul, -num * focusWidth, function () {
        flag = true;
      });
      // 小圆圈和图片一起变化
      if (circle < 0) {
        circle = ol.children.length - 1;
      }
      circleNum();
    }
  });
  // 5. 定时自动轮播图片
  var timer = setInterval(function () {
    arrow_r.click();
  }, 2000);
});
