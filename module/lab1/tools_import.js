
class LinkUtility {
	direct_open(url) {
		console.info('utility called');
		open(url);
	}

	addEvent(id, event, func) {
		let node=document.getElementById(id);
		node.addEventListener(event, func);
	}

}

class Calculator {
	add(a, b) {
		console.info('sum is: ', a+b);
	}

	hello(){}
}

// 多层import
import {World} from './es6_world.js'

let world = new World();

function open_zhihu(keyword) {
	world.open_zhihu(keyword);
}
export {LinkUtility, Calculator, open_zhihu};

// export LinkUtility;