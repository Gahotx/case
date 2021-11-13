function atm(num) {
    switch (num) {
        case "1":
            var save = prompt("请输入您要存的钱数：");
            sum = parseInt(sum) + parseInt(save);
            alert("您的余额为：" + sum);
            break;
        case "2":
            var take = prompt("请输入您要取的钱数：");
            sum = parseInt(sum) - parseInt(take);
            alert("您的余额为：" + sum);
            break;
        case "3":
            alert("您的余额为：" + sum);
            break;
        case "4":
            alert("您正在退出！");
            break;
        default:
            alert("没有此操作！");
    }
}

var num = prompt("请输入您要的操作：\n 1.存钱 \n 2.取钱 \n 3.显示余额 \n 4.退出");
var sum = 100;

if (num == 4) {
    alert("您正在退出！");
} else {
    do {
        atm(num);
        num = prompt("请输入您要的操作：\n 1.存钱 \n 2.取钱 \n 3.显示余额 \n 4.退出");
    } while (num != 4);
}
