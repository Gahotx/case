$(function () {
  // alert(11);
  // 1. 按下回车 把完整数据 存储到本地存储里面
  load();
  $("#title").on("keydown", function (e) {
    if (e.keyCode == 13) {
      // alert(11);
      if ($(this).val() == null) {
        alert("请输入您的代办事项！");
      } else {
        var data = getData();
        data.push({ title: $(this).val(), done: false });
        saveData(data);
        load();
        $(this).val("");
        // console.log(data);
      }
    }
  });
  function getData() {
    var data = localStorage.getItem("todo");
    if (data != null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
  function saveData(data) {
    localStorage.setItem("todo", JSON.stringify(data));
  }
  // 2. 本地存储数据渲染加载到页面
  function load() {
    var data = getData();
    // console.log(data);
    if (data.length == 0) {
      localStorage.removeItem("todo");
    }
    var todocount = 0;
    var donecount = 0;
    $("#donelist").empty();
    $("#todolist").empty();
    // console.log(data);
    $.each(data, function (i, e) {
      // console.log(i);
      if (e.done) {
        $("#donelist").prepend("<li><input type='checkbox' checked> <p>" + e.title + "</p> <a href='javascript:;' id=" + i + "></a></li>");
        donecount++;
      } else {
        $("#todolist").prepend("<li><input type='checkbox'> <p>" + e.title + "</p> <a href='javascript:;' id = " + i + "></a></li>");
        todocount++;
      }
    });
    $("#todocount").text(todocount);
    $("#donecount").text(donecount);
  }
  // 3. 删除操作
  $("#todolist, #donelist").on("click", "a", function () {
    // $(this).parent().remove();
    var data = getData();
    // alert(11);
    var index = $(this).attr("id");
    data.splice(index, 1);
    saveData(data);
    load();
  });
  // 4. 正在进行和已经完成互相转换
  $("#todolist, #donelist").on("click", "input", function () {
    var data = getData();
    var index = $(this).siblings("a").attr("id");
    // console.log(index);
    // console.log(data);
    data[index].done = $(this).prop("checked");
    saveData(data);
    load();
  });
});
