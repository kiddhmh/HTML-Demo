/**
 * Created by apple on 15/9/10.
 */

function $(id){
    return typeof id === 'string'?document.getElementById(id):id;
}

window.onload = function(){
  // 实现瀑布流布局
   waterFall('main', 'box');
  // 造数据
    var dataImg = {"data":[{"src":"0.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"10.jpg"}]};
  // 动态的加载图片
   window.onscroll = function(){
      // 具备滚动的条件
     if(checkWillScroll()){
       for(var i=0; i<dataImg.data.length; i++){
          // 创建div
          var newBox = document.createElement('div');
          newBox.className = 'box';
          $('main').appendChild(newBox);
          // 创建里面的盒子
          var newPic = document.createElement('div');
          newPic.className = 'pic';
          newBox.appendChild(newPic);
          // 创建img标签
          var img = document.createElement('img');
          img.src = 'images/' + dataImg.data[i].src;
          newPic.appendChild(img);
       }
         waterFall('main', 'box');
     }
   }
}

// 实现瀑布流布局
function waterFall(parent, box){
   // 取出所有的盒子
   var allBoxs = $(parent).getElementsByClassName(box);
    // 单个盒子的宽度
    var boxW = allBoxs[0].offsetWidth;
    // 取得浏览器的宽度
    var screenW = document.body.clientWidth;
    // 求出列数
    var cols = Math.floor(screenW/boxW);
    // 让父标签居中
    $(parent).style.cssText = 'width:'+boxW *cols +'px; margin:0 auto;';

    // 定位
    // 存放每一列的高度
    var heightArr = [];
    for(var i=0; i<allBoxs.length; i++){
        if(i<cols){// 第一行
           var boxHeight = allBoxs[i].offsetHeight;
           heightArr.push(boxHeight);
        }else{// 剩余行
           // 拿到最矮盒子的高度
            var minBoxH = Math.min.apply(null, heightArr);
           // 拿到最矮盒子对应的索引
            var minBoxIndex = getMinIndex(minBoxH, heightArr);
           // 对盒子进行定位
            allBoxs[i].style.position = 'absolute';
            allBoxs[i].style.top = minBoxH + 'px';
            allBoxs[i].style.left = boxW * minBoxIndex + 'px';
           // 改变高度
            heightArr[minBoxIndex] += allBoxs[i].offsetHeight;
        }
    }
    console.log(heightArr, minBoxH, minBoxIndex);
}

// 取出索引
function getMinIndex(val, arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] == val){
            return i;
        }
    }
}

// 检查是否具备滚动条件
function checkWillScroll(){
   // 求最后一个盒子的offsettop + 自身的一半
    var allBoxs = $('main').getElementsByClassName('box');
    var lastBox =  allBoxs[allBoxs.length - 1];
    var lastBoxDis = lastBox.offsetTop + Math.floor(lastBox.offsetHeight/2);
  // 求出页面偏离的高度(标准模式和混杂模式)
    var scrollTopH = document.body.scrollTop || document.documentElement.scrollTop;
  // 求出浏览器的高度
    var screenH = document.body.clientHeight || document.documentElement.clientHeight;
    return lastBoxDis < (scrollTopH + screenH) ? true : false;
}