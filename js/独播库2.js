//!!!!本站需翻墙!!!!
//已知问题:除了pluto player无法正常嗅探,其他壳都可以正常嗅探播放(js mode 0 or 1 都OK)
//其他壳播放遇到嗅探的问题时,试着把"解析"改回"🌐Ⓤ",然后就可以快乐的看片了!
//{"name":"🌐Ⓤ","type":0,"url":"","header":{"User-Agent":"Mozilla/5.0"}},

muban.首图.二级.title = 'h1&&Text;.data:eq(0)&&Text'
muban.首图.二级.desc = ';;;.data:eq(2)&&Text;.data:eq(3)&&Text'
muban.首图.二级.content = '.data:eq(5)&&Text'
var rule = {
	title:'独播库2',
	模板:'首图',
	host:'https://www.duboku.tv',
	// host:'https://u.duboku.io',
	url: '/vodshow/fyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-----fypage---{{fl.year}}',
	filter:{"2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"陆剧","v":"13"},{"n":"日韩剧","v":"15"},{"n":"短剧","v":"21"},{"n":"台泰剧","v":"14"},{"n":"港剧","v":"20"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"悬疑","v":"悬疑"},{"n":"武侠","v":"武侠"},{"n":"科幻","v":"科幻"},{"n":"都市","v":"都市"},{"n":"爱情","v":"爱情"},{"n":"古装","v":"古装"},{"n":"战争","v":"战争"},{"n":"青春","v":"青春"},{"n":"偶像","v":"偶像"},{"n":"喜剧","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"奇幻","v":"奇幻"},{"n":"剧情","v":"剧情"},{"n":"乡村","v":"乡村"},{"n":"年份","v":"年份"},{"n":"警匪","v":"警匪"},{"n":"谍战","v":"谍战"},{"n":"冒险","v":"冒险"},{"n":"罪案","v":"罪案"},{"n":"宫廷","v":"宫廷"},{"n":"BL","v":"BL"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"韩国","v":"韩国"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"英国","v":"英国"},{"n":"巴西","v":"巴西"},{"n":"西班牙","v":"西班牙"},{"n":"泰国","v":"泰国"},{"n":"德国","v":"德国"},{"n":"法国","v":"法国"},{"n":"日本","v":"日本"},{"n":"荷兰","v":"荷兰"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],"3":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"真人秀","v":"真人秀"},{"n":"选秀","v":"选秀"},{"n":"竞演","v":"竞演"},{"n":"情感","v":"情感"},{"n":"访谈","v":"访谈"},{"n":"播报","v":"播报"},{"n":"旅游","v":"旅游"},{"n":"音乐","v":"音乐"},{"n":"美食","v":"美食"},{"n":"纪实","v":"纪实"},{"n":"曲艺","v":"曲艺"},{"n":"生活","v":"生活"},{"n":"游戏互动","v":"游戏互动"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"韩国","v":"韩国"},{"n":"美国","v":"美国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],"4":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"玄幻","v":"玄幻"},{"n":"武侠","v":"武侠"},{"n":"情感","v":"情感"},{"n":"科幻","v":"科幻"},{"n":"热血","v":"热血"},{"n":"推理","v":"推理"},{"n":"搞笑","v":"搞笑"},{"n":"冒险","v":"冒险"},{"n":"萝莉","v":"萝莉"},{"n":"校园","v":"校园"},{"n":"动作","v":"动作"},{"n":"机战","v":"机战"},{"n":"运动","v":"运动"},{"n":"战争","v":"战争"},{"n":"少年","v":"少年"},{"n":"少女","v":"少女"},{"n":"社会","v":"社会"},{"n":"亲子","v":"亲子"},{"n":"益智","v":"益智"},{"n":"励志","v":"励志"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"国产","v":"国产"},{"n":"日本","v":"日本"},{"n":"美国","v":"美国"},{"n":"法国","v":"法国"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],"13":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"悬疑","v":"悬疑"},{"n":"武侠","v":"武侠"},{"n":"科幻","v":"科幻"},{"n":"都市","v":"都市"},{"n":"爱情","v":"爱情"},{"n":"古装","v":"古装"},{"n":"战争","v":"战争"},{"n":"青春","v":"青春"},{"n":"偶像","v":"偶像"},{"n":"喜剧","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"奇幻","v":"奇幻"},{"n":"剧情","v":"剧情"},{"n":"乡村","v":"乡村"},{"n":"年份","v":"年份"},{"n":"警匪","v":"警匪"},{"n":"谍战","v":"谍战"},{"n":"冒险","v":"冒险"},{"n":"罪案","v":"罪案"},{"n":"宫廷","v":"宫廷"},{"n":"BL","v":"BL"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],"14":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"悬疑","v":"悬疑"},{"n":"武侠","v":"武侠"},{"n":"科幻","v":"科幻"},{"n":"都市","v":"都市"},{"n":"爱情","v":"爱情"},{"n":"古装","v":"古装"},{"n":"战争","v":"战争"},{"n":"青春","v":"青春"},{"n":"偶像","v":"偶像"},{"n":"喜剧","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"奇幻","v":"奇幻"},{"n":"剧情","v":"剧情"},{"n":"乡村","v":"乡村"},{"n":"年份","v":"年份"},{"n":"警匪","v":"警匪"},{"n":"谍战","v":"谍战"},{"n":"冒险","v":"冒险"},{"n":"罪案","v":"罪案"},{"n":"宫廷","v":"宫廷"},{"n":"BL","v":"BL"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],"15":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"悬疑","v":"悬疑"},{"n":"武侠","v":"武侠"},{"n":"科幻","v":"科幻"},{"n":"都市","v":"都市"},{"n":"爱情","v":"爱情"},{"n":"古装","v":"古装"},{"n":"战争","v":"战争"},{"n":"青春","v":"青春"},{"n":"偶像","v":"偶像"},{"n":"喜剧","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"奇幻","v":"奇幻"},{"n":"剧情","v":"剧情"},{"n":"乡村","v":"乡村"},{"n":"年份","v":"年份"},{"n":"警匪","v":"警匪"},{"n":"谍战","v":"谍战"},{"n":"冒险","v":"冒险"},{"n":"罪案","v":"罪案"},{"n":"宫廷","v":"宫廷"},{"n":"BL","v":"BL"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],"20":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"悬疑","v":"悬疑"},{"n":"武侠","v":"武侠"},{"n":"科幻","v":"科幻"},{"n":"都市","v":"都市"},{"n":"爱情","v":"爱情"},{"n":"古装","v":"古装"},{"n":"战争","v":"战争"},{"n":"青春","v":"青春"},{"n":"偶像","v":"偶像"},{"n":"喜剧","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"奇幻","v":"奇幻"},{"n":"剧情","v":"剧情"},{"n":"乡村","v":"乡村"},{"n":"年份","v":"年份"},{"n":"警匪","v":"警匪"},{"n":"谍战","v":"谍战"},{"n":"冒险","v":"冒险"},{"n":"罪案","v":"罪案"},{"n":"宫廷","v":"宫廷"},{"n":"BL","v":"BL"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],"21":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"悬疑","v":"悬疑"},{"n":"武侠","v":"武侠"},{"n":"科幻","v":"科幻"},{"n":"都市","v":"都市"},{"n":"爱情","v":"爱情"},{"n":"古装","v":"古装"},{"n":"喜剧","v":"喜剧"},{"n":"犯罪","v":"犯罪"},{"n":"奇幻","v":"奇幻"},{"n":"剧情","v":"剧情"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}]},
	filter_def:{
		4:{cateId:'4'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		13:{cateId:'13'},
		14:{cateId:'14'},
		15:{cateId:'15'},
		20:{cateId:'20'},
		21:{cateId:'21'}
	},
	class_parse:'.nav-list li;a&&Text;a&&href;.*/(.*?).html',
	lazy:'js:let html=fetch(input, fetch_params);var player=JSON.parse(html.match(/var player_(.*?)=(.*?)</)[2]);var jsurl=player.url;input=jsurl',

    searchable:2,//是否启用全局搜索,
    searchUrl:'/index.php/ajax/suggest?mid=1&wd=**',
    detailUrl:'https://www.duboku.tv/voddetail/fyid.html', //非必填,二级详情拼接链接
	// 搜索:'#searchList&&li;h4&&Text;a&&data-original;.detail&&p:eq(2)&&Text;a&&href;.detail&&p:eq(3)&&Text',
	搜索:'json:list;name;pic;;id',
}