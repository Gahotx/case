var that;
var num;
class Tab {
  constructor(id) {
    that = this;
    this.main = document.querySelector(id);
    // console.log(this.main);
    this.add = this.main.querySelector('.tabadd');
    this.ul = this.main.querySelector('.fisrstnav ul:first-child');
    this.con = this.main.querySelector('.tabscon');
    this.init();
    num = that.lis.length + 1;
  }
  updateNode() {
    this.lis = this.main.querySelectorAll('li');
    this.sections = this.main.querySelectorAll('section');
    this.guanbi = this.main.querySelectorAll('.icon-guanbi');
    this.title = this.main.querySelectorAll('.fisrstnav ul li span:first-child');
  }
  init() {
    this.updateNode();
    this.add.onclick = this.addTab;
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggleTab;
      this.guanbi[i].onclick = this.removeTab;
      this.title[i].ondblclick = this.editTab;
      this.sections[i].ondblclick = this.editTab;
    }
  }
  // 1. 切换 tab 栏
  toggleTab() {
    that.clearClass();
    this.className = 'liactive';
    that.sections[this.index].className = 'conactive';
  }
  clearClass() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = '';
      this.sections[i].className = '';
    }
  }
  // 2. 添加 tab 栏
  addTab() {
    // console.log(11);
    that.clearClass();
    // 1. 创建 li 元素 和 section 元素
    var li = '<li class="liactive"><span>测试' + num + '</span><span class="iconfont icon-guanbi"></span></li>';
    var section = '<section class="conactive">测试' + num + '</section>';
    // 2. 把这两个元素追加的父元素最末尾
    that.ul.insertAdjacentHTML('beforeend', li);
    that.con.insertAdjacentHTML('beforeend', section);
    that.init();
    num++;
  }
  // 3. 移除 tab 栏
  removeTab(e) {
    e.stopPropagation();
    var index = this.parentNode.index;
    // console.log(index);
    that.lis[index].remove();
    that.sections[index].remove();
    that.init();
    if (document.querySelector('.liactive')) return;
    // console.log(11);
    that.lis[that.lis.length - 1] && that.lis[that.lis.length - 1].click();
  }
  // 4. 编辑 tab 栏
  editTab() {
    // console.log(11);
    var str = this.innerHTML;
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    // console.log(str);
    this.innerHTML = '<input type="text" />';
    var input = this.children[0];
    input.value = str;
    input.select();
    this.ondblclick = function (e) {
      e.preventDefault();
    };
    input.onblur = function () {
      this.parentNode.innerHTML = this.value;
      that.init();
    };
    input.onkeyup = function (e) {
      if (e.keyCode == 13) {
        this.blur();
      }
    };
  }
}
new Tab('#tab');
