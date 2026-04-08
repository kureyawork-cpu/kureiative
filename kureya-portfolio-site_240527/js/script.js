// slick slider
$(function () {
	$("#slick-slider").slick({
		autoplay: true, // 自動でスクロール
		autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
		speed: 5000, // スライドが流れる速度を設定
		cssEase: "linear", // スライドの流れ方を等速に設定
		slidesToShow: 4, // 表示するスライドの数
		swipe: false, // 操作による切り替えはさせない
		arrows: false, // 矢印非表示
		pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
		pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
		responsive: [
			{
				breakpoint: 521, // 520px以下のサイズに適用
				settings: {
					autoplay: true, // 自動でスクロール
					speed: 600, // スライドが流れる速度を設定
					autoplaySpeed: 3000, // 自動再生のスライド切り替えまでの時間を設定
					slidesToShow: 1, // 表示するスライドの数
					swipe: true, // 操作による切り替えはさせない
				},
			},
		],
	});
});
// slick sliderここまで

//ハンバーガーボタン
$(".sp-open-btn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
	$(".sp-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
	$("body").toggleClass("active");
});

$(".sp-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
	$(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
	$(".sp-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
	$("body").removeClass("active");
});

//ハンバーガーボタンここまで


//コンテンツのフェードイン
$(function () {
	$(window).scroll(function () {
		$(".effect-fade").each(function () {
			let elemPos = $(this).offset().top; /* 要素の位置を取得 */
			let scroll = $(window).scrollTop(); /* スクロール位置を取得 */
			let windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
			if (scroll > elemPos - windowHeight) {
				/* 要素位置までスクロール出来たときに動作する */
				$(this).addClass("effect-scroll");
			}
		});
	});
	jQuery(window).scroll();
});

//コンテンツのフェードイン

$(".bgDU a").click(function () {
	return false;

});

$(".flipY a").click(function () {
	return false;

});






jQuery(function ($) {
	$('.rotate-target').on('click', function () {
		if ($(this).attr('id') == 'omote') {
			// 表クリックの場合
			$(this).css({ 'z-index': '0', 'transform': 'rotateY(-180deg)' });
			$('#ura').css({ 'z-index': '1', 'transform': 'rotateY(0deg)' });
		} else {
			// 裏クリックの場合
			$(this).css({ 'z-index': '0', 'transform': 'rotateY(-180deg)' });
			$('#omote').css({ 'z-index': '1', 'transform': 'rotateY(0deg)' });
		}
	});
});

// 背景に模様を入れようJS

particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 38,//この数値を変更すると幾何学模様の数が増減できる
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#000000"//色
		},
		"shape": {
			"type": "polygon",//形状はpolygonを指定
			"stroke": {
				"width": 0,
			},
			"polygon": {
				"nb_sides": 3//多角形の角の数
			},
			"image": {
				"width": 190,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.664994832269074,
			"random": false,
			"anim": {
				"enable": true,
				"speed": 2.2722661797524872,
				"opacity_min": 0.08115236356258881,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#000000",
			"opacity": 0.6,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 6,//この数値を小さくするとゆっくりな動きになる
			"direction": "none",//方向指定なし
			"random": false,//動きはランダムにしない
			"straight": false,//動きをとどめない
			"out_mode": "out",//画面の外に出るように描写
			"bounce": false,//跳ね返りなし
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 961.4383117143238
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
				"mode": "repulse"
			},
			"onclick": {
				"enable": false
			},
			"resize": true
		}
	},
	"retina_detect": true
});


// 電車のアニメーション

$(document).ready(function () {
	$('.demo_wrap').on('animationend', function () {
		if ($(this).attr('data-order') === 'left') {
			$(this).attr('data-order', 'right');
		} else {
			$(this).attr('data-order', 'left');
		}
	});
});





//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 100) {//上から100pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	} else {
		if ($('#page-top').hasClass('UpMove')) {//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#page-top').click(function () {
	var scroll = $(window).scrollTop(); //スクロール値を取得
	if (scroll > 0) {
		$(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
		$('body,html').animate({
			scrollTop: 0
		}, 2000, function () {//スクロールの速さ。数字が大きくなるほど遅くなる
			$('#page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
		});
	}
	return false;//リンク自体の無効化
});


/* <!-- マウスストーカーhttps://jito-site.com/mouse-stalker/ --> */
$(function () {
	const stalker = $("#js-stalker");
	$(document).on("mousemove", function (e) {
		// マウスの座標を取得
		const x = e.clientX;
		const y = e.clientY;
		// ストーカーの位置を更新
		stalker.css({
			opacity: 1, // カーソルが画面内に入ったら不透明にする
			transform: "translate(" + x + "px, " + y + "px)", // マウスの座標に移動
		});
	});
	$("a, .box").on({
		mouseenter: function () {
			stalker.addClass("js-hover"); // リンクにカーソルが乗ったときに拡大するクラスを追加
		},
		mouseleave: function () {
			stalker.removeClass("js-hover"); // リンクからカーソルが離れたときに拡大するクラスを削除
		},
	});
});




/*
NOTE: Doesn't work in any version of IE because IE doesn't support color: transparent. 
*/


ScrollTrigger.create({
	trigger: ".h2-skill",//このクラスまで来たら開始
	toggleClass: "animate__shakeX",// 入れたいクラス名
	start: 'center center', // 開始の位置
	once: true, // 一回だけ発火
	// markers: true  // マーカーを表示させる
});


ScrollTrigger.create({
	trigger: ".h3-Design",//このクラスまで来たら開始
	toggleClass: "animate__fadeInRightBig",// 入れたいクラス名
	start: 'center center', // 開始の位置
	once: true, // 一回だけ発火
	// markers: true  // マーカーを表示させる
});



ScrollTrigger.create({
	trigger: ".h3-web",//このクラスまで来たら開始
	toggleClass: "animate__hinge",// 入れたいクラス名
	start: 'center center', // 開始の位置
	once: true, // 一回だけ発火
	// markers: true  // マーカーを表示させる
});


ScrollTrigger.create({
	trigger: ".h2-video",//このクラスまで来たら開始
	toggleClass: "animate__backInUp",// 入れたいクラス名
	start: 'center center', // 開始の位置
	once: true, // 一回だけ発火
	// markers: true  // マーカーを表示させる
});

ScrollTrigger.create({
	trigger: ".h2-like",//このクラスまで来たら開始
	toggleClass: "animate__flip",// 入れたいクラス名
	start: 'center center', // 開始の位置
	once: true, // 一回だけ発火
	// markers: true  // マーカーを表示させる
});

ScrollTrigger.create({
	trigger: ".h1-portfolio",//このクラスまで来たら開始
	toggleClass: "animate__fadeInDown",// 入れたいクラス名
	start: 'center center', // 開始の位置
	once: true, // 一回だけ発火
	// markers: true  // マーカーを表示させる
});

