<template>
  <div class="citybox">
	<!-- <h2>按拼音首字母选择<span class="arrow">&raquo;</span></h2> -->
	<ol>
		<li id="city-A">
			<p class="cf">
				<span class="label"><strong>A</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('鞍山')" >鞍山</a><a href="javascript:void(0);" @click="selectCity('安顺')" >安顺</a><a href="javascript:void(0);" @click="selectCity('阿坝')" >阿坝</a><a href="javascript:void(0);" @click="selectCity('阿拉善')" >阿拉善</a><a href="javascript:void(0);" @click="selectCity('阿里')" >阿里</a><a href="javascript:void(0);" @click="selectCity('安康')" >安康</a><a href="javascript:void(0);" @click="selectCity('阿克苏')" >阿克苏</a><a href="javascript:void(0);" @click="selectCity('安庆')" >安庆</a><a href="javascript:void(0);" @click="selectCity('阿勒')" >阿勒泰</a><a href="javascript:void(0);" @click="selectCity('安阳')" >安阳</a><a href="javascript:void(0);" @click="selectCity('澳门')" >澳门</a></span>
			</p>
		</li>
		<li id="city-B">
			<p class="cf">
				<span class="label"><strong>B</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('北京')" >北京</a><a href="javascript:void(0);" @click="selectCity('包头')" >包头</a><a href="javascript:void(0);" @click="selectCity('保定')" >保定</a><a href="javascript:void(0);" @click="selectCity('巴中')" >巴中</a><a href="javascript:void(0);" @click="selectCity('蚌埠')" >蚌埠</a><a href="javascript:void(0);" @click="selectCity('白银')" >白银</a><a href="javascript:void(0);" @click="selectCity('白城')" >白城</a><a href="javascript:void(0);" @click="selectCity('白山')" >白山</a><a href="javascript:void(0);" @click="selectCity('北海')" >北海</a><a href="javascript:void(0);" @click="selectCity('巴彦淖尔')" >巴彦淖尔</a><a href="javascript:void(0);" @click="selectCity('宝鸡')" >宝鸡</a><a href="javascript:void(0);" @click="selectCity('百色')" >百色</a><a href="javascript:void(0);" @click="selectCity('本溪')" >本溪</a><a href="javascript:void(0);" @click="selectCity('保山')" >保山</a><a href="javascript:void(0);" @click="selectCity('毕节')" >毕节</a><a href="javascript:void(0);" @click="selectCity('博尔塔拉')" >博尔塔拉</a><a href="javascript:void(0);" @click="selectCity('滨州')" >滨州</a><a href="javascript:void(0);" @click="selectCity('亳州')" >亳州</a><a href="javascript:void(0);" @click="selectCity('巴州')" >巴州</a></span>
			</p>
		</li>
		<li id="city-C">
			<p class="cf">
				<span class="label"><strong>C</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('成都')" >成都</a><a href="javascript:void(0);" @click="selectCity('重庆')" >重庆</a><a href="javascript:void(0);" @click="selectCity('常州')" >常州</a><a href="javascript:void(0);" @click="selectCity('长沙')" >长沙</a><a href="javascript:void(0);" @click="selectCity('长春')" >长春</a><a href="javascript:void(0);" @click="selectCity('赤峰')" >赤峰</a><a href="javascript:void(0);" @click="selectCity('楚雄')" >楚雄</a><a href="javascript:void(0);" @click="selectCity('长治')" >长治</a><a href="javascript:void(0);" @click="selectCity('巢湖')" >巢湖</a><a href="javascript:void(0);" @click="selectCity('崇左')" >崇左</a><a href="javascript:void(0);" @click="selectCity('潮州')" >潮州</a><a href="javascript:void(0);" @click="selectCity('昌吉')" >昌吉</a><a href="javascript:void(0);" @click="selectCity('沧州')" >沧州</a><a href="javascript:void(0);" @click="selectCity('郴州')" >郴州</a><a href="javascript:void(0);" @click="selectCity('常德')" >常德</a><a href="javascript:void(0);" @click="selectCity('滁州')" >滁州</a><a href="javascript:void(0);" @click="selectCity('朝阳')" >朝阳</a><a href="javascript:void(0);" @click="selectCity('昌都')" >昌都</a><a href="javascript:void(0);" @click="selectCity('池州')" >池州</a><a href="javascript:void(0);" @click="selectCity('承德')" >承德</a></span>
			</p>
		</li>
		<li id="city-D">
			<p class="cf">
				<span class="label"><strong>D</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('东莞')" >东莞</a><a href="javascript:void(0);" @click="selectCity('大连')" >大连</a><a href="javascript:void(0);" @click="selectCity('东营')" >东营</a><a href="javascript:void(0);" @click="selectCity('大庆')" >大庆</a><a href="javascript:void(0);" @click="selectCity('大同')" >大同</a><a href="javascript:void(0);" @click="selectCity('大理')" >大理</a><a href="javascript:void(0);" @click="selectCity('德阳')" >德阳</a><a href="javascript:void(0);" @click="selectCity('迪庆')" >迪庆</a><a href="javascript:void(0);" @click="selectCity('达州')" >达州</a><a href="javascript:void(0);" @click="selectCity('德州')" >德州</a><a href="javascript:void(0);" @click="selectCity('丹东')" >丹东</a><a href="javascript:void(0);" @click="selectCity('大兴安岭')" >大兴安岭</a><a href="javascript:void(0);" @click="selectCity('德宏')" >德宏</a><a href="javascript:void(0);" @click="selectCity('定西')" >定西</a></span>
			</p>
		</li>
		<li id="city-E">
			<p class="cf">
				<span class="label"><strong>E</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('恩施')" >恩施</a><a href="javascript:void(0);" @click="selectCity('鄂州')" >鄂州</a><a href="javascript:void(0);" @click="selectCity('鄂尔多斯')" >鄂尔多斯</a></span>
			</p>
		</li>
		<li id="city-F">
			<p class="cf">
				<span class="label"><strong>F</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('福州')" >福州</a><a href="javascript:void(0);" @click="selectCity('佛山')" >佛山</a><a href="javascript:void(0);" @click="selectCity('抚顺')" >抚顺</a><a href="javascript:void(0);" @click="selectCity('阜阳')" >阜阳</a><a href="javascript:void(0);" @click="selectCity('抚州')" >抚州</a><a href="javascript:void(0);" @click="selectCity('防城')" >防城港</a><a href="javascript:void(0);" @click="selectCity('阜新')" >阜新</a></span>
			</p>
		</li>
		<li id="city-G">
			<p class="cf">
				<span class="label"><strong>G</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('广州')" >广州</a><a href="javascript:void(0);" @click="selectCity('贵阳')" >贵阳</a><a href="javascript:void(0);" @click="selectCity('桂林')" >桂林</a><a href="javascript:void(0);" @click="selectCity('赣州')" >赣州</a><a href="javascript:void(0);" @click="selectCity('广元')" >广元</a><a href="javascript:void(0);" @click="selectCity('果洛')" >果洛</a><a href="javascript:void(0);" @click="selectCity('固原')" >固原</a><a href="javascript:void(0);" @click="selectCity('甘南')" >甘南</a><a href="javascript:void(0);" @click="selectCity('甘孜')" >甘孜</a><a href="javascript:void(0);" @click="selectCity('广安')" >广安</a><a href="javascript:void(0);" @click="selectCity('贵港')" >贵港</a></span>
			</p>
		</li>
		<li id="city-H">
			<p class="cf">
				<span class="label"><strong>H</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('杭州')" >杭州</a><a href="javascript:void(0);" @click="selectCity('哈尔滨')" >哈尔滨</a><a href="javascript:void(0);" @click="selectCity('合肥')" >合肥</a><a href="javascript:void(0);" @click="selectCity('邯郸')" >邯郸</a><a href="javascript:void(0);" @click="selectCity('惠州')" >惠州</a><a href="javascript:void(0);" @click="selectCity('海口')" >海口</a><a href="javascript:void(0);" @click="selectCity('呼和浩特')" >呼和浩特</a><a href="javascript:void(0);" @click="selectCity('衡阳')" >衡阳</a><a href="javascript:void(0);" @click="selectCity('湖州')" >湖州</a><a href="javascript:void(0);" @click="selectCity('淮北')" >淮北</a><a href="javascript:void(0);" @click="selectCity('鹤岗')" >鹤岗</a><a href="javascript:void(0);" @click="selectCity('海北')" >海北</a><a href="javascript:void(0);" @click="selectCity('海东')" >海东</a><a href="javascript:void(0);" @click="selectCity('黄南')" >黄南</a><a href="javascript:void(0);" @click="selectCity('菏泽')" >菏泽</a><a href="javascript:void(0);" @click="selectCity('海南州')" >海南州</a><a href="javascript:void(0);" @click="selectCity('黑河')" >黑河</a><a href="javascript:void(0);" @click="selectCity('和田')" >和田</a><a href="javascript:void(0);" @click="selectCity('哈密')" >哈密</a><a href="javascript:void(0);" @click="selectCity('淮安')" >淮安</a><a href="javascript:void(0);" @click="selectCity('淮南')" >淮南</a><a href="javascript:void(0);" @click="selectCity('黄山')" >黄山</a><a href="javascript:void(0);" @click="selectCity('海西')" >海西</a><a href="javascript:void(0);" @click="selectCity('贺州')" >贺州</a><a href="javascript:void(0);" @click="selectCity('怀化')" >怀化</a><a href="javascript:void(0);" @click="selectCity('河池')" >河池</a><a href="javascript:void(0);" @click="selectCity('呼伦贝尔')" >呼伦贝尔</a><a href="javascript:void(0);" @click="selectCity('衡水')" >衡水</a><a href="javascript:void(0);" @click="selectCity('河源')" >河源</a><a href="javascript:void(0);" @click="selectCity('红河')" >红河</a><a href="javascript:void(0);" @click="selectCity('汉中')" >汉中</a><a href="javascript:void(0);" @click="selectCity('黄冈')" >黄冈</a><a href="javascript:void(0);" @click="selectCity('黄石')" >黄石</a><a href="javascript:void(0);" @click="selectCity('鹤壁')" >鹤壁</a><a href="javascript:void(0);" @click="selectCity('葫芦岛')" >葫芦岛</a></span>
			</p>
		</li>
		<li id="city-J">
			<p class="cf">
				<span class="label"><strong>J</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('济南')" >济南</a><a href="javascript:void(0);" @click="selectCity('济宁')" >济宁</a><a href="javascript:void(0);" @click="selectCity('嘉兴')" >嘉兴</a><a href="javascript:void(0);" @click="selectCity('金华')" >金华</a><a href="javascript:void(0);" @click="selectCity('焦作')" >焦作</a><a href="javascript:void(0);" @click="selectCity('荆州')" >荆州</a><a href="javascript:void(0);" @click="selectCity('吉林')" >吉林</a><a href="javascript:void(0);" @click="selectCity('锦州')" >锦州</a><a href="javascript:void(0);" @click="selectCity('江门')" >江门</a><a href="javascript:void(0);" @click="selectCity('景德镇')" >景德镇</a><a href="javascript:void(0);" @click="selectCity('吉安')" >吉安</a><a href="javascript:void(0);" @click="selectCity('佳木斯')" >佳木斯</a><a href="javascript:void(0);" @click="selectCity('酒泉')" >酒泉</a><a href="javascript:void(0);" @click="selectCity('金昌')" >金昌</a><a href="javascript:void(0);" @click="selectCity('鸡西')" >鸡西</a><a href="javascript:void(0);" @click="selectCity('济源')" >济源</a><a href="javascript:void(0);" @click="selectCity('晋城')" >晋城</a><a href="javascript:void(0);" @click="selectCity('揭阳')" >揭阳</a><a href="javascript:void(0);" @click="selectCity('晋中')" >晋中</a><a href="javascript:void(0);" @click="selectCity('荆门')" >荆门</a><a href="javascript:void(0);" @click="selectCity('九江')" >九江</a></span>
			</p>
		</li>
		<li id="city-K">
			<p class="cf">
				<span class="label"><strong>K</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('昆明')" >昆明</a><a href="javascript:void(0);" @click="selectCity('昆山')" >昆山</a><a href="javascript:void(0);" @click="selectCity('喀什')" >喀什</a><a href="javascript:void(0);" @click="selectCity('克拉玛依')" >克拉玛依</a><a href="javascript:void(0);" @click="selectCity('开封')" >开封</a><a href="javascript:void(0);" @click="selectCity('克州')" >克州</a></span>
			</p>
		</li>
		<li id="city-L">
			<p class="cf">
				<span class="label"><strong>L</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('兰州')" >兰州</a><a href="javascript:void(0);" @click="selectCity('临沂')" >临沂</a><a href="javascript:void(0);" @click="selectCity('连云')" >连云港</a><a href="javascript:void(0);" @click="selectCity('聊城')" >聊城</a><a href="javascript:void(0);" @click="selectCity('临汾')" >临汾</a><a href="javascript:void(0);" @click="selectCity('柳州')" >柳州</a><a href="javascript:void(0);" @click="selectCity('洛阳')" >洛阳</a><a href="javascript:void(0);" @click="selectCity('廊坊')" >廊坊</a><a href="javascript:void(0);" @click="selectCity('龙岩')" >龙岩</a><a href="javascript:void(0);" @click="selectCity('六盘')" >六盘水</a><a href="javascript:void(0);" @click="selectCity('凉山')" >凉山</a><a href="javascript:void(0);" @click="selectCity('六安')" >六安</a><a href="javascript:void(0);" @click="selectCity('丽江')" >丽江</a><a href="javascript:void(0);" @click="selectCity('临沧')" >临沧</a><a href="javascript:void(0);" @click="selectCity('陇南')" >陇南</a><a href="javascript:void(0);" @click="selectCity('拉萨')" >拉萨</a><a href="javascript:void(0);" @click="selectCity('辽源')" >辽源</a><a href="javascript:void(0);" @click="selectCity('辽阳')" >辽阳</a><a href="javascript:void(0);" @click="selectCity('莱芜')" >莱芜</a><a href="javascript:void(0);" @click="selectCity('漯河')" >漯河</a><a href="javascript:void(0);" @click="selectCity('吕梁')" >吕梁</a><a href="javascript:void(0);" @click="selectCity('丽水')" >丽水</a><a href="javascript:void(0);" @click="selectCity('临夏')" >临夏</a><a href="javascript:void(0);" @click="selectCity('林芝')" >林芝</a><a href="javascript:void(0);" @click="selectCity('娄底')" >娄底</a><a href="javascript:void(0);" @click="selectCity('来宾')" >来宾</a><a href="javascript:void(0);" @click="selectCity('泸州')" >泸州</a><a href="javascript:void(0);" @click="selectCity('乐山')" >乐山</a></span>
			</p>
		</li>
		<li id="city-M">
			<p class="cf">
				<span class="label"><strong>M</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('马鞍')" >马鞍山</a><a href="javascript:void(0);" @click="selectCity('绵阳')" >绵阳</a><a href="javascript:void(0);" @click="selectCity('茂名')" >茂名</a><a href="javascript:void(0);" @click="selectCity('牡丹')" >牡丹江</a><a href="javascript:void(0);" @click="selectCity('梅州')" >梅州</a><a href="javascript:void(0);" @click="selectCity('眉山')" >眉山</a></span>
			</p>
		</li>
		<li id="city-N">
			<p class="cf">
				<span class="label"><strong>N</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('南京')" >南京</a><a href="javascript:void(0);" @click="selectCity('宁波')" >宁波</a><a href="javascript:void(0);" @click="selectCity('南通')" >南通</a><a href="javascript:void(0);" @click="selectCity('南宁')" >南宁</a><a href="javascript:void(0);" @click="selectCity('南昌')" >南昌</a><a href="javascript:void(0);" @click="selectCity('南充')" >南充</a><a href="javascript:void(0);" @click="selectCity('宁德')" >宁德</a><a href="javascript:void(0);" @click="selectCity('内江')" >内江</a><a href="javascript:void(0);" @click="selectCity('怒江')" >怒江</a><a href="javascript:void(0);" @click="selectCity('南平')" >南平</a><a href="javascript:void(0);" @click="selectCity('南阳')" >南阳</a><a href="javascript:void(0);" @click="selectCity('那曲')" >那曲</a></span>
			</p>
		</li>
		<li id="city-P">
			<p class="cf">
				<span class="label"><strong>P</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('萍乡')" >萍乡</a><a href="javascript:void(0);" @click="selectCity('平顶山')" >平顶山</a><a href="javascript:void(0);" @click="selectCity('莆田')" >莆田</a><a href="javascript:void(0);" @click="selectCity('濮阳')" >濮阳</a><a href="javascript:void(0);" @click="selectCity('攀枝')" >攀枝花</a><a href="javascript:void(0);" @click="selectCity('平凉')" >平凉</a><a href="javascript:void(0);" @click="selectCity('普洱')" >普洱</a><a href="javascript:void(0);" @click="selectCity('盘锦')" >盘锦</a></span>
			</p>
		</li>
		<li id="city-Q">
			<p class="cf">
				<span class="label"><strong>Q</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('青岛')" >青岛</a><a href="javascript:void(0);" @click="selectCity('泉州')" >泉州</a><a href="javascript:void(0);" @click="selectCity('秦皇岛')" >秦皇岛</a><a href="javascript:void(0);" @click="selectCity('齐齐哈尔')" >齐齐哈尔</a><a href="javascript:void(0);" @click="selectCity('庆阳')" >庆阳</a><a href="javascript:void(0);" @click="selectCity('衢州')" >衢州</a><a href="javascript:void(0);" @click="selectCity('黔西南')" >黔西南</a><a href="javascript:void(0);" @click="selectCity('钦州')" >钦州</a><a href="javascript:void(0);" @click="selectCity('黔南')" >黔南</a><a href="javascript:void(0);" @click="selectCity('曲靖')" >曲靖</a><a href="javascript:void(0);" @click="selectCity('黔东南')" >黔东南</a><a href="javascript:void(0);" @click="selectCity('七台河')" >七台河</a><a href="javascript:void(0);" @click="selectCity('清远')" >清远</a></span>
			</p>
		</li>
		<li id="city-R">
			<p class="cf">
				<span class="label"><strong>R</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('日照')" >日照</a><a href="javascript:void(0);" @click="selectCity('日喀则')" >日喀则</a></span>
			</p>
		</li>
		<li id="city-S">
			<p class="cf">
				<span class="label"><strong>S</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('上海')" >上海</a><a href="javascript:void(0);" @click="selectCity('深圳')" >深圳</a><a href="javascript:void(0);" @click="selectCity('沈阳')" >沈阳</a><a href="javascript:void(0);" @click="selectCity('苏州')" >苏州</a><a href="javascript:void(0);" @click="selectCity('石家')" >石家庄</a><a href="javascript:void(0);" @click="selectCity('绍兴')" >绍兴</a><a href="javascript:void(0);" @click="selectCity('顺德')" >顺德</a><a href="javascript:void(0);" @click="selectCity('三亚')" >三亚</a><a href="javascript:void(0);" @click="selectCity('韶关')" >韶关</a><a href="javascript:void(0);" @click="selectCity('绥化')" >绥化</a><a href="javascript:void(0);" @click="selectCity('松原')" >松原</a><a href="javascript:void(0);" @click="selectCity('上饶')" >上饶</a><a href="javascript:void(0);" @click="selectCity('十堰')" >十堰</a><a href="javascript:void(0);" @click="selectCity('三门峡')" >三门峡</a><a href="javascript:void(0);" @click="selectCity('山南')" >山南</a><a href="javascript:void(0);" @click="selectCity('邵阳')" >邵阳</a><a href="javascript:void(0);" @click="selectCity('遂宁')" >遂宁</a><a href="javascript:void(0);" @click="selectCity('商丘')" >商丘</a><a href="javascript:void(0);" @click="selectCity('朔州')" >朔州</a><a href="javascript:void(0);" @click="selectCity('随州')" >随州</a><a href="javascript:void(0);" @click="selectCity('汕尾')" >汕尾</a><a href="javascript:void(0);" @click="selectCity('四平')" >四平</a><a href="javascript:void(0);" @click="selectCity('三峡')" >三峡</a><a href="javascript:void(0);" @click="selectCity('宿迁')" >宿迁</a><a href="javascript:void(0);" @click="selectCity('三明')" >三明</a><a href="javascript:void(0);" @click="selectCity('石嘴山')" >石嘴山</a><a href="javascript:void(0);" @click="selectCity('双鸭山')" >双鸭山</a><a href="javascript:void(0);" @click="selectCity('汕头')" >汕头</a><a href="javascript:void(0);" @click="selectCity('宿州')" >宿州</a><a href="javascript:void(0);" @click="selectCity('商洛')" >商洛</a></span>
			</p>
		</li>
		<li id="city-T">
			<p class="cf">
				<span class="label"><strong>T</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('天津')" >天津</a><a href="javascript:void(0);" @click="selectCity('太原')" >太原</a><a href="javascript:void(0);" @click="selectCity('泰安')" >泰安</a><a href="javascript:void(0);" @click="selectCity('台州')" >台州</a><a href="javascript:void(0);" @click="selectCity('唐山')" >唐山</a><a href="javascript:void(0);" @click="selectCity('泰州')" >泰州</a><a href="javascript:void(0);" @click="selectCity('塔城')" >塔城</a><a href="javascript:void(0);" @click="selectCity('铜陵')" >铜陵</a><a href="javascript:void(0);" @click="selectCity('铜川')" >铜川</a><a href="javascript:void(0);" @click="selectCity('台北')" >台北</a><a href="javascript:void(0);" @click="selectCity('铜仁')" >铜仁</a><a href="javascript:void(0);" @click="selectCity('吐鲁番')" >吐鲁番</a><a href="javascript:void(0);" @click="selectCity('天水')" >天水</a><a href="javascript:void(0);" @click="selectCity('通辽')" >通辽</a><a href="javascript:void(0);" @click="selectCity('铁岭')" >铁岭</a><a href="javascript:void(0);" @click="selectCity('通化')" >通化</a></span>
			</p>
		</li>
		<li id="city-W">
			<p class="cf">
				<span class="label"><strong>W</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('武汉')" >武汉</a><a href="javascript:void(0);" @click="selectCity('无锡')" >无锡</a><a href="javascript:void(0);" @click="selectCity('温州')" >温州</a><a href="javascript:void(0);" @click="selectCity('芜湖')" >芜湖</a><a href="javascript:void(0);" @click="selectCity('威海')" >威海</a><a href="javascript:void(0);" @click="selectCity('潍坊')" >潍坊</a><a href="javascript:void(0);" @click="selectCity('乌鲁木齐')" >乌鲁木齐</a><a href="javascript:void(0);" @click="selectCity('梧州')" >梧州</a><a href="javascript:void(0);" @click="selectCity('吴忠')" >吴忠</a><a href="javascript:void(0);" @click="selectCity('武威')" >武威</a><a href="javascript:void(0);" @click="selectCity('渭南')" >渭南</a><a href="javascript:void(0);" @click="selectCity('乌兰察布')" >乌兰察布</a><a href="javascript:void(0);" @click="selectCity('文山')" >文山</a><a href="javascript:void(0);" @click="selectCity('乌海')" >乌海</a></span>
			</p>
		</li>
		<li id="city-X">
			<p class="cf">
				<span class="label"><strong>X</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('西安')" >西安</a><a href="javascript:void(0);" @click="selectCity('厦门')" >厦门</a><a href="javascript:void(0);" @click="selectCity('徐州')" >徐州</a><a href="javascript:void(0);" @click="selectCity('襄阳')" >襄阳</a><a href="javascript:void(0);" @click="selectCity('西宁')" >西宁</a><a href="javascript:void(0);" @click="selectCity('孝感')" >孝感</a><a href="javascript:void(0);" @click="selectCity('西双版纳')" >西双版纳</a><a href="javascript:void(0);" @click="selectCity('新余')" >新余</a><a href="javascript:void(0);" @click="selectCity('湘潭')" >湘潭</a><a href="javascript:void(0);" @click="selectCity('锡林郭勒')" >锡林郭勒</a><a href="javascript:void(0);" @click="selectCity('兴安')" >兴安</a><a href="javascript:void(0);" @click="selectCity('邢台')" >邢台</a><a href="javascript:void(0);" @click="selectCity('新乡')" >新乡</a><a href="javascript:void(0);" @click="selectCity('湘西')" >湘西</a><a href="javascript:void(0);" @click="selectCity('忻州')" >忻州</a><a href="javascript:void(0);" @click="selectCity('咸阳')" >咸阳</a><a href="javascript:void(0);" @click="selectCity('宣城')" >宣城</a><a href="javascript:void(0);" @click="selectCity('香港')" >香港</a><a href="javascript:void(0);" @click="selectCity('信阳')" >信阳</a><a href="javascript:void(0);" @click="selectCity('咸宁')" >咸宁</a><a href="javascript:void(0);" @click="selectCity('许昌')" >许昌</a></span>
			</p>
		</li>
		<li id="city-Y">
			<p class="cf">
				<span class="label"><strong>Y</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('扬州')" >扬州</a><a href="javascript:void(0);" @click="selectCity('烟台')" >烟台</a><a href="javascript:void(0);" @click="selectCity('盐城')" >盐城</a><a href="javascript:void(0);" @click="selectCity('运城')" >运城</a><a href="javascript:void(0);" @click="selectCity('义乌')" >义乌</a><a href="javascript:void(0);" @click="selectCity('岳阳')" >岳阳</a><a href="javascript:void(0);" @click="selectCity('宜昌')" >宜昌</a><a href="javascript:void(0);" @click="selectCity('玉林')" >玉林</a><a href="javascript:void(0);" @click="selectCity('银川')" >银川</a><a href="javascript:void(0);" @click="selectCity('鹰潭')" >鹰潭</a><a href="javascript:void(0);" @click="selectCity('雅安')" >雅安</a><a href="javascript:void(0);" @click="selectCity('伊犁')" >伊犁</a><a href="javascript:void(0);" @click="selectCity('玉树')" >玉树</a><a href="javascript:void(0);" @click="selectCity('宜春')" >宜春</a><a href="javascript:void(0);" @click="selectCity('营口')" >营口</a><a href="javascript:void(0);" @click="selectCity('永州')" >永州</a><a href="javascript:void(0);" @click="selectCity('宜宾')" >宜宾</a><a href="javascript:void(0);" @click="selectCity('益阳')" >益阳</a><a href="javascript:void(0);" @click="selectCity('玉溪')" >玉溪</a><a href="javascript:void(0);" @click="selectCity('阳泉')" >阳泉</a><a href="javascript:void(0);" @click="selectCity('延安')" >延安</a><a href="javascript:void(0);" @click="selectCity('榆林')" >榆林</a><a href="javascript:void(0);" @click="selectCity('云浮')" >云浮</a><a href="javascript:void(0);" @click="selectCity('延边')" >延边</a><a href="javascript:void(0);" @click="selectCity('阳江')" >阳江</a><a href="javascript:void(0);" @click="selectCity('伊春')" >伊春</a></span>
			</p>
		</li>
		<li id="city-Z">
			<p class="cf">
				<span class="label"><strong>Z</strong></span>
				<span><a href="javascript:void(0);" @click="selectCity('郑州')" >郑州</a><a href="javascript:void(0);" @click="selectCity('镇江')" >镇江</a><a href="javascript:void(0);" @click="selectCity('中山')" >中山</a><a href="javascript:void(0);" @click="selectCity('淄博')" >淄博</a><a href="javascript:void(0);" @click="selectCity('珠海')" >珠海</a><a href="javascript:void(0);" @click="selectCity('遵义')" >遵义</a><a href="javascript:void(0);" @click="selectCity('株洲')" >株洲</a><a href="javascript:void(0);" @click="selectCity('自贡')" >自贡</a><a href="javascript:void(0);" @click="selectCity('舟山')" >舟山</a><a href="javascript:void(0);" @click="selectCity('湛江')" >湛江</a><a href="javascript:void(0);" @click="selectCity('肇庆')" >肇庆</a><a href="javascript:void(0);" @click="selectCity('漳州')" >漳州</a><a href="javascript:void(0);" @click="selectCity('张掖')" >张掖</a><a href="javascript:void(0);" @click="selectCity('昭通')" >昭通</a><a href="javascript:void(0);" @click="selectCity('张家')" >张家界</a><a href="javascript:void(0);" @click="selectCity('周口')" >周口</a><a href="javascript:void(0);" @click="selectCity('驻马店')" >驻马店</a><a href="javascript:void(0);" @click="selectCity('张家口')" >张家口</a><a href="javascript:void(0);" @click="selectCity('资阳')" >资阳</a><a href="javascript:void(0);" @click="selectCity('中卫')" >中卫</a><a href="javascript:void(0);" @click="selectCity('枣庄')" >枣庄</a></span>
			</p>
		</li>
	</ol>
</div>
</template>

<script>
import $ from "jquery";
import bus from "../utils/bus";

export default {
  data() {
    return {
      selectCityArry: []
    };
  },
  methods: {
    selectCity: function(city) {
      bus.$emit("cityPositioning.selectCity", city);
    },
    removeSelectedCity: function(index) {
      let arrayTemp = [];
      for (var i = 0; i < this.selectCityArry.length; i++) {
        if (i != index) {
          arrayTemp.push(this.selectCityArry[i]);
        } else {
          $(this.selectCityArry[index]).removeClass("active");
        }
      }
      this.selectCityArry = arrayTemp;
    }
  },
  mounted: function() {
    //hover
    $(".citybox li").hover(
      function() {
        $(this).addClass("hover");
      },
      function() {
        $(this).removeClass("hover");
      }
    );

    //选择
    let self = this;
    $("a").click(function() {
      let a_text = $(this).text();
      for (var index = 0; index < self.selectCityArry.length; index++) {
        var element = self.selectCityArry[index];
        if ($(element).text() == a_text) {
          return;
        }
      }
      if (self.selectCityArry.length < 5) {
        $(this).addClass("active");
        self.selectCityArry.push(this);
      }
    });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
a,
img {
  border: 0;
}
.cf {
  zoom: 1;
}
.cf:after {
  display: block;
  height: 0px;
  visibility: hidden;
  clear: both;
  overflow: hidden;
  content: "";
}
/* citybox */
.citybox {
  border-bottom: #a3d7df 1px solid;
  border-left: #a3d7df 1px solid;
  padding-bottom: 60px;
  background: #fff;
  border-top: #a3d7df 1px solid;
  border-right: #a3d7df 1px solid;
  box-shadow: 0 0 1px #d4edf4;
  width: 998px;
  margin: 50px auto;
}
.citybox h2 {
  position: relative;
  padding-bottom: 0px;
  line-height: 30px;
  margin: 20px 20px 12px;
  padding-left: 14px;
  padding-right: 14px;
  zoom: 1;
  display: inline-block;
  background: #6aaeff;
  height: 32px;
  color: #fff;
  padding-top: 0px;
  border-radius: 0;
}
.citybox h2 span {
  border-bottom: #fff 6px solid;
  position: absolute;
  border-left: #fff 6px solid;
  line-height: 0;
  width: 0px;
  display: block;
  float: none;
  height: 0px;
  font-size: 0px;
  border-top: #6aaeff 6px solid;
  top: 32px;
  border-right: #fff 6px solid;
  left: 20px;
}
.citybox li {
  border-bottom: #fff 1px solid;
  border-top: #fff 1px solid;
}
.citybox p {
  border-bottom: #fff 1px solid;
  padding-bottom: 6px;
  padding-left: 30px;
  padding-right: 10px;
  border-top: #fff 1px solid;
  padding-top: 6px;
}
.citybox span.label {
  border-bottom: #ddd 1px solid;
  border-left: #ddd 1px solid;
  line-height: 24px;
  width: 30px;
  zoom: 1;
  display: inline-block;
  height: 30px;
  color: #666;
  vertical-align: top;
  border-top: #ddd 1px solid;
  margin-right: 5px;
  border-right: #ddd 1px solid;
  border-radius: 0;
}
.citybox span.label strong {
  border-bottom: #f7f7f7 1px solid;
  text-align: center;
  border-left: #f7f7f7 1px solid;
  width: 28px;
  display: block;
  font-family: tahoma;
  background: #f1f1f1;
  height: 28px;
  font-size: 16px;
  border-top: #f7f7f7 1px solid;
  border-right: #f7f7f7 1px solid;
  border-radius: 0;
}
.citybox span {
  width: 880px;
  zoom: 1;
  display: inline-block;
  vertical-align: top;
}
.citybox span i {
  font-style: normal;
  margin: 0px 3px;
  color: #ccc;
}
.citybox .hover {
  border-bottom-color: #e5e5e5;
  border-top-color: #e5e5e5;
  border-right-color: #e5e5e5;
  border-left-color: #e5e5e5;
}
.citybox .hover p {
  background: #f7f7f7;
}
.citybox .hover span.label {
  border-bottom-color: #1fb7bb;
  border-top-color: #1fb7bb;
  border-right-color: #1fb7bb;
  border-left-color: #1fb7bb;
}
.citybox .hover span.label strong {
  border-bottom-color: #6aaeff;
  border-top-color: #6aaeff;
  background: #6aaeff;
  color: #fff;
  border-right-color: #6aaeff;
  border-left-color: #6aaeff;
}
.citybox a {
  padding-bottom: 1px;
  line-height: 14px;
  margin: 5px 10px;
  padding: 5px 10px;
  zoom: 1;
  display: inline-block;
  height: 20px;
  border-radius: 0;
  font-weight: 800;
  color: #339999;
  font-size: 14px;
  text-decoration: none;
  height: 25px;
  border: 1px solid #ffffff;
}
.citybox a:hover {
  /* background: #6AAEFF;
  color: #fff; */
  border: 1px solid #6aaeff;
  color: #6aaeff;
}
.citybox a.active {
  border: 1px solid #6aaeff;
  color: #6aaeff;
  background: url(../../lib/img/check.png) no-repeat right bottom #fff;
}
</style>
