/**
 * Created by xiaomage on 15/11/1.
 */

    // DOM的CRUD

// c 创建create

// 1.直接往body中动态的添加标签(可以是任意类型)
    document.write('helloWorld');
    document.write('<img src="image/img_01.jpg">');

// 2. 创建一个新的标签,然后插入到body中任意的一个标签中 appendChild
    var div = document.createElement('div');
    div.style.background = 'red';
    div.style.width = '500px';
    div.style.height = '300px';
    // 添加到父标签
    document.body.appendChild(div);

    // 往div中插入一张图片
    var img = document.createElement('img');
    img.src = 'image/img_02.jpg';
    div.appendChild(img);

    // 拿到p标签
    var img1 = document.createElement('img');
    img1.src = 'image/img_03.jpg';

    var p = document.getElementById('word');
    p.appendChild(img1);


// 删除有3种方式: 1. 直接用body进行删除,但是只能作用于直接子标签
//              2. 拿到当前标签的父标签,再来删除
//              3. 直接拿当前的标签,调用 remove()方法.

//   document.body.removeChild(p);
    // 拿到当前标签的父标签,再来删除
//     p.parentNode.removeChild(p);
    // 3
//      p.remove();



// 改  拿到对应的标签,做出改变...



// 查
// 第一种方式:
//     document.getElementsByClassName();
//     document.getElementsByName();
//     document.getElementsByTagName();
//     document.getElementById();
// (注意:id返回一个值,其他的都是返回数组)


// 第二种方式:遍历标签内部的内容

//   find(document.body);
//
//   function find(object){
//      for(var i in object){
//          console.log(object[i]);
//      }
//   }

  console.log(document.body.childNodes);








