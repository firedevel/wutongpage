
$("#shortcut").fadeOut(0);

var shortcut_is_show = false


function click_time_shortcut(){
	var browser = {
		versions: function() {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			return {
				mobile: !!u.match(/AppleWebKit.*Mobile.*/),
			};
		}(),
	}
if (browser.versions.mobile) {
		var mobile="sj";
	        $("#shortcut").fadeOut(500);
	}else{var mobile="usj";
	
}
	if(mobile=="usj"){
    shortcut_is_show = !shortcut_is_show
    if (shortcut_is_show){
        $("#shortcut").fadeOut(500);
	            $("#set101").fadeOut(500);
	            $("#set102").fadeOut(500);
        $("#select").fadeIn(500);
        $("#search_input").fadeIn(500);
        $("#so_button").fadeIn(500);
	    
    }
    else{
        $("#shortcut").fadeIn(500);
        $("#select").fadeOut(0);
        $("#search_input").fadeOut(0);
        $("#so_button").fadeOut(0);
	            $("#set101").fadeIn(500);
	            $("#set102").fadeIn(500);
    }
	}
}
function setset() {
	localStorage["imgurl1"] = "https://api.dujin.org/bing/1920.php"
	localStorage["che1"] = "true"
	localStorage["che2"] = "false"
	localStorage["set99888"] = "true"
	localStorage["onsetall22823510"] = "true"
	localStorage["zdy"] = "https://fsoufsou.com/search?q="
    setTimeout(`
	location.reload();
    `,1000);
}

var new_date = new Date("2022-7-16 18:00:00"); //新建一个日期对象，默认现在的时间
var old_date = new Date(); //设置过去的一个时间点，"yyyy-MM-dd HH:mm:ss"格式化日期

var difftime = (new_date - old_date) / 1000; //计算时间差,并把毫秒转换成秒
if (difftime > 0) {
	window.location.href = "./showtime.html";
}

function openFile() {
	const objFile = document.getElementById("files");
	if (objFile.value === "") {
		alert("请选择文件！");
		return;
	}
	// 获取文件
	const files = objFile.files;

	// 新建一个FileReader
	const reader = new FileReader();
	reader.readAsText(files[0], "UTF-8");
	// 读取完文件之后会回来这里
	reader.onload = function(e) {
		// 读取文件内容
		const fileString = e.target.result;
		// 接下来可对文件内容进行处理

		var result2 = fileString
		var result3 = result2.split("$")
		if (result3[0] != "version51") {
window.Mtu.toast('配置文件版本不符，请使用记事本打开文件手动配置！（版本号为51）',{action:'OK',onClose:()=>console.log('click'), duration:100000})
		} else {
			localStorage["imgurl1"] = result3[1]
			localStorage["che1"] = result3[2]
			localStorage["che2"] = result3[3]
			localStorage["set99888"] = result3[4]
			localStorage["zdy"] = result3[5]
            
			location.reload();
		}
	};

	// 读取文件
}

function putmain() {
	setset()
}

function puton() {
	document.getElementById('files').click()
}



function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}

function putout() {
	var out1 = localStorage["imgurl1"]
	var out2 = localStorage["che1"]
	var out3 = localStorage["che2"]
	var out5 = localStorage["set99888"]
	var out6 = localStorage["zdy"]
	var out = "version51" + "$" + out1 + "$" + out2 + "$" + out3 + "$" + out5 + "$" + out6;


	function saveShareContent(filename, text) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}

	var result = out;
	saveShareContent("out.wtsp", result);
}

function timesok() {
	a = !a;
	if (a == true) {

		document.getElementById("sou").style.opacity = "1";
		document.getElementById("cards").style.opacity = "0";
		document.getElementById("kj").style.top = "50%";
		document.getElementById("cards").style.zIndex = "-99999999";
	}
	if (a == false) {
		document.getElementById("sou").style.opacity = "0";
		document.getElementById("cards").style.opacity = "1";
		document.getElementById("cards").style.zIndex = "9999999";
		document.getElementById("kj").style.top = "45%";

	}
}

function sub1() {
	localStorage["okset111"] = "ok";
	localStorage["imgurl1"] = document.getElementById("bz1").value;
	localStorage["okset2"] = "ok";
	localStorage["che1"] = document.getElementById("che1").checked;
	localStorage["che2"] = document.getElementById("che2").checked;
	localStorage["set99888"] = document.getElementById("che4").checked;
	localStorage["zdy"] = document.getElementById("zdy").value;
	location.reload();

}

function input() {
	localStorage["so"] = document.getElementById("select").value;
	localStorage["ok"] = "ok";
}

function search() {

	if (document.getElementById("select").value == 1) {
		window.open("https://cn.bing.com/search?q=" + document.getElementById("search_input").value);

	} else if (document.getElementById("select").value == 2) {
		window.open("https://www.baidu.com/s?wd=" + document.getElementById("search_input").value);

	} else if (document.getElementById("select").value == 3) {
		window.open("https://www.so.com/s?q=" + document.getElementById("search_input").value);

	} else if (document.getElementById("select").value == 4) {
		window.open("https://www.google.com/search?q=" + document.getElementById("search_input").value);

	} else if (document.getElementById("select").value == 5) {
		window.open("https://github.com/search?q=" + document.getElementById("search_input").value);

	} else if (document.getElementById("select").value == 6) {
		window.open("https://search.gitee.com/?q=" + document.getElementById("search_input").value);

	} else if (document.getElementById("select").value == 7) {
		window.open("https://www.sogou.com/web?query=" + document.getElementById("search_input").value);

	} else if (document.getElementById("select").value == 8) {
		window.open("https://search.bilibili.com/all?keyword=" + document.getElementById("search_input").value);

	} else if (document.getElementById("select").value == 9) {
		window.open(localStorage["zdy"] + document.getElementById("search_input").value);

	} else {}

	function searchs() {
		if (localStorage["set99888"] == "false") {

		} else {
			document.getElementById("search_input").value = "";
		}

	}

	if (document.getElementById("search_input").value != "") {
		searchs()
	} else if (event.keyCode == 13) {
		searchs()
	}
	return false;
}






setTimeout(`
document.getElementById("zdy").value = localStorage["zdy"];
if (localStorage["onsetall22823510"] != "true") {
	window.Mtu.dialog({
		title: '梧桐起始页',
		message: '欢迎使用梧桐起始页5.0，当前第一次使用或有新版本更新，正在配置中',
		positive: '确定'
	})
	setset();
};
if (localStorage["set99888"] == "true") {
	document.getElementById("che4").checked = "true";
} else if (localStorage["set99888"] == "false") {
	document.getElementById("che4").checked = "false";
} else {
	document.getElementById("che4").checked = "true";
};

var windowHref = window.location.href;
window.onresize = function isConsoles() {
	isConsole()
};

function isConsole() {
	//页面可视宽高
	var contWidth = window.innerWidth;
	var contHeight = window.innerHeight;
	//浏览器宽高
	var outWidth = window.outerWidth;
	var outHeight = window.outerHeight;
	//打开移动端模式时
	var browser = {
		versions: function() {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			return {
				mobile: !!u.match(/AppleWebKit.*Mobile.*/),
			};
		}(),
	}
	if ((outWidth - contWidth > 120 || outHeight - contHeight > 200) && windowHref.indexOf('debug') == -1) {} else if (
		browser.versions.mobile) {
	}
}
if (localStorage["okset2"] == "ok") {
	document.getElementById("che1").checked = localStorage["che1"];
	document.getElementById("che2").checked = localStorage["che2"];
	if (localStorage["che1"] == "false") {
		console.log("WEA");
		document.getElementById("weather").style.visibility = "hidden";
	} else if (localStorage["che2"] == "false") {
		document.getElementById("showDate").style.visibility = "hidden";
	} else {}
} else {};
if (localStorage["okset111"] == "ok") {
	document.getElementById("img123").src = localStorage["imgurl1"];
	document.getElementById("bz1").value = localStorage["imgurl1"];
} else {
	document.getElementById("img123").src = "https://api.dujin.org/bing/1920.php";
	document.getElementById("bz1").value = "https://api.dujin.org/bing/1920.php";
};
var a = true;
if (localStorage["ok"] == "ok") {
	document.getElementById("select").value = localStorage["so"];
}
`, 100);
