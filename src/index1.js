import $ from 'jquery'
// 导入样式，在webpack中，一切皆为模块，都可以通过ES6的导入语法进行导入
import './css/index.css'
import './css/index.less'
import logo from './images/v.png'
const bg_img = () => import('./images/1.png')
$(function () {
    $('li:odd').css('color', 'red')
    $('li:even').css({'color': 'pink'})
    $('.box').attr('src', logo)
    $('.box').css('background', bg_img)
})
// 1.定义了名为 info 的装饰器
function info(target){
    //2.为目标添加静态属性 info3
    target.info = 'Person info'
}
// 3.为 Person 类应用 info 装饰器
@info
class Person {}

//4.打印 Person 的静态属性 info
console.log(Person.info);
