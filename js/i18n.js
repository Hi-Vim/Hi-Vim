jQuery(document).ready(function(){
	I18n.init();
	jQuery("[data-lang='en']").each(function(i,v){
		//console.log($(v).text());
		var value = $(v);
		value.text(I18n.getValue(value.text()))
	})
})

var　I18n = {
	init :function(){
		jQuery.i18n.properties({ 
		    name: 'lang',// 资源文件名称
		    path: '/i18n/',// 资源文件所在目录路径
		    mode: 'map',// 模式：变量或 Map 
		    language: 'zh-CN',// 对应的语言
		    cache: false, 
		    encoding: 'UTF-8', //文件编码方式
		    callback: function() {// 回调方法
		        //alert(jQuery.i18n.prop('Sections'));//测试是否成功
		    } 
		});
	},
	getValue: function(key){
		return jQuery.i18n.prop(key);
	}

}
