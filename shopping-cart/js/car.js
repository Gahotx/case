$(function () {
  // 1. 全选 全不选功能模块
  // 就是把全选按钮（checkall）的状态赋值给 三个小的按钮（j-checkbox）就可以了
  // 事件可以使用change
  $(".checkall").change(function () {
    $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
    if ($(this).prop("checked")) {
      // 让所有的商品添加 check-cart-item 类名
      $(".cart-item").addClass("check-cart-item");
    } else {
      // check-cart-item 移除
      $(".cart-item").removeClass("check-cart-item");
    }
    getSum();
  });

  // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。

  // if(被选中的小的复选框的个数 === 3) {
  //     就要选中全选按钮
  // } else {
  //     不要选中全选按钮
  // }
  // console.log($(".j-checkbox:checked").length);
  // $(".j-checkbox").length 这个是所有的小复选框的个数

  $(".j-checkbox").change(function () {
    if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
      $(".checkall").prop("checked", true);
    } else {
      $(".checkall").prop("checked", false);
    }
    if ($(this).prop("checked")) {
      // 让当前的商品添加 check-cart-item 类名
      $(this).parents(".cart-item").addClass("check-cart-item");
    } else {
      // check-cart-item 移除
      $(this).parents(".cart-item").removeClass("check-cart-item");
    }
    getSum();
  });

  // 3. 增减商品数量模块 首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框。
  $(".increment").click(function () {
    // 得到当前兄弟文本框的值
    var itxt = $(this).siblings(".itxt").val();
    itxt++;
    $(this).siblings(".itxt").val(itxt);
    // 计算小计模块 根据文本框的值 乘以 当前商品的价格  就是 商品的小计
    // 当前商品的价格 p
    var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
    var sub = "￥" + (itxt * price).toFixed(2);
    // console.log(price);
    $(this).parents(".p-num").siblings(".p-sum").text(sub);
    getSum();
  });
  $(".decrement").click(function () {
    var itxt = $(this).siblings(".itxt").val();
    if (itxt > 1) {
      itxt--;
    } else {
      return false;
    }
    $(this).siblings(".itxt").val(itxt);
    var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
    // console.log(price);
    var sub = "￥" + (itxt * price).toFixed(2);
    $(this).parents(".p-num").siblings(".p-sum").text(sub);
    getSum();
  });

  //  4. 用户修改文本框的值 计算 小计模块
  $(".itxt").change(function () {
    var itxt = $(this).val();
    // 当前商品的单价
    var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
    // console.log(price);
    // 先得到文本框的里面的值 乘以 当前商品的单价
    var sub = "￥" + (itxt * price).toFixed(2);
    $(this).parents(".p-num").siblings(".p-sum").text(sub);
    getSum();
  });

  // 5. 计算总计和总额模块
  getSum();
  function getSum() {
    var sum = 0;
    var money = 0;
    $(".j-checkbox:checked")
      .parent(".p-checkbox")
      .siblings(".p-num")
      .find(".itxt")
      .each(function (i, e) {
        sum += parseInt($(e).val());
      });
    // console.log(sum);
    $(".amount-sum em").text(sum);
    $(".j-checkbox:checked")
      .parent(".p-checkbox")
      .siblings(".p-sum")
      .each(function (i, e) {
        money += parseFloat($(e).text().substr(1));
      });
    $(".price-sum em").text("￥" + money.toFixed(2));
  }
  // 6. 删除商品模块
  // (1) 商品后面的删除按钮
  $(".p-action a").click(function () {
    // 删除的是当前的商品
    $(this).parents(".cart-item").remove();
    getSum();
  });
  // (2) 删除选中的商品
  $(".remove-batch").click(function () {
    // 删除的是小的复选框选中的商品
    $(".j-checkbox:checked").parents(".cart-item").remove();
    getSum();
  });
  // (3) 清空购物车 删除全部商品
  $(".clear-all").click(function () {
    $(".cart-item").remove();
    getSum();
  });
});
