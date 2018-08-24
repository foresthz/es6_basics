
import {LinkUtility, Calculator, open_zhihu} from './tools_import.js';
var myutil = new LinkUtility();
let calculator = new Calculator();
calculator.add(9,8);
myutil.addEvent('p1', 'click', function(){
	alert('p1 clicked');
	open_zhihu('前端');
});

myutil.addEvent('p2', 'click', function(){
	open_zhihu('菜根谭');
})

export {myutil};

// export default {
// 	myutil: myutil,
// 	moduleName:
// }

window.aaa=121;
window.myutil = myutil;
// myutil.direct_open('http://baidu.com');

// alert('import lab');