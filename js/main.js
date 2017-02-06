/**
 * Created by huyiqing on 2016/11/26.
 */

//申明全局变量用于传递颜色
var col = localStorage.getItem("color");
//页面加载自动获取localstorage信息并设置各项属性
window.onload = function(){
    setColor(col);
    setBorder(col);
    var obj = document.getElementById(col);
    setHigh(obj);
    setText(col);
};
//综合调用设置页面肤色
function setSkin(self){
    initial();
    //self.style.marginTop = "9px";
    //self.style.height = "30px";
    setHigh(self);
    localStorage.setItem("color",self.id);
    var col = localStorage.getItem("color");
    setColor(col);
    setBorder(col);
    setText(col);
}
//设置选项条高度
function setHigh(obj){
    obj.style.marginTop = "9px";
    obj.style.height = "30px";
}

//初始化
function initial(){
    var or = document.getElementById('orange');
    var gr = document.getElementById('green');
    var re = document.getElementById('red');
    var bl = document.getElementById('blue');
    or.style.height = "20px";
    or.style.marginTop = "19px";
    gr.style.height = "20px";
    gr.style.marginTop = "19px";
    re.style.height = "20px";
    re.style.marginTop = "19px";
    bl.style.height = "20px";
    bl.style.marginTop = "19px";
}

//设置导航条颜色
function setColor(color){
    var a = document.getElementById('navBar');
    a.style.backgroundColor = color;
    //switch (id){
    //    case "orange":
    //        a.style.backgroundColor = "#ffa500";
    //        break;
    //    case "green":
    //        a.style.backgroundColor = "#34a637";
    //        break;
    //    case "red":
    //        a.style.backgroundColor = "#ff0000";
    //        break;
    //    case "blue":
    //        a.style.backgroundColor = "#0000ff";
    //        break;
    //    default:
    //        break;
    //}
}

//设置边框颜色
function setBorder(color){
    var bord = document.getElementById('rightTable');
    bord.style.borderColor = color;
}

//设置文字颜色
function setText(color){
    document.getElementById('textOne').style.color = color;
    document.getElementById('textTwo').style.color = color;
    document.getElementById('textThree').style.color = color;
    document.getElementById('textFour').style.color = color;
    document.getElementById('textFive').style.color = color;
    document.getElementById('textSix').style.color = color;
}