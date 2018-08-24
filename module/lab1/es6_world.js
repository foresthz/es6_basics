
class World {
	open_zhihu(keyword) {
		let url=`https://www.zhihu.com/search?q=${keyword}&type=content`
		open(url);
	}
}

export {World}