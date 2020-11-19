function creat(key, ul_ul, name1, value) {
	var ul_ul = document.getElementById(ul_ul);
	that = key;
	if (that.getAttribute("name") == name1) {
		that.children[0].children[1]
		.setAttribute("src",staticResourcesRootPath+
		"/images/other/箭头_右.png");
		ul_ul.style.display = "none";
		ul_ul.style.textIndent = value;
		$("li a").css({
			"width" : "225px",
			"font-size" : "14px",
		});
		if (document.body.clientHeight < 769
				&& $("#parent_ul").children().length < 7) {
			$("li a").css("width", "225px")
		}
		if (document.body.clientHeight < 578
				&& $("#parent_ul").children().length > 7) {
			console.log(document.body.clientHeight)
			$("li a").css("width", "208px")
		}
		that.setAttribute("name", "name");
		return;
	}
	if (that.getAttribute("name") == 'name') {
		that.children[0].children[1]
		.setAttribute("src",staticResourcesRootPath+
		"/images/other/箭头_右.png");
		ul_ul.style.display = "none";
		$("li a").css({
			"width" : "208px",
			"font-size" : "14px",
		});
		if (document.body.clientHeight > 800) {
			$("li a").css("width", "225px")
		}
		if (document.body.clientHeight < 769
				&& $("#parent_ul").children().length < 7) {
			$("li a").css("width", "225px")
		}

	}
	if (that.getAttribute("name") == null) {
		that.children[0].children[1]
		.setAttribute("src", staticResourcesRootPath +
		"/images/other/箭头_右.png");
		ul_ul.style.display = "none";
		ul_ul.style.textIndent = value;
		$("li a").css({
			"width" : "208px",
			"font-size" : "14px",
		});
		if (document.body.clientHeight < 769
				&& $("#parent_ul").children().length < 7) {
			$("li a").css("width", "225px")
		}

		if (document.body.clientHeight > 769) {
			$("li a").css("width", "225px")
		}
	}
	/*if (that.getAttribute("name") == 'name1') {
				that.children[0].children[1].setAttribute("src", "/images/other/箭头_右.png");
				ul_ul.style.display = "none";
				ul_ul.style.textIndent = value;
				$("a").css({
					"width": "208px",
					"font-size": "14px",
				});
			}*/
	str = value.substring(0, value.length - 2);

	that.children[0].children[1].setAttribute("src",staticResourcesRootPath+
	"/images/other/箭头_下.png");
	ul_ul.style.display = "block";
	ul_ul.style.textIndent = value;

	that.setAttribute("name", name1);

	return;
}

$("#hide").css({
	"height" : document.documentElement.clientHeight - 114
})
$(".col").css({
	"height" : document.documentElement.clientHeight - 65
})
$(window).resize(function() {
	$("#hide").css({
		"height" : document.documentElement.clientHeight - 114
	})
	$(".col").css({
		"height" : document.documentElement.clientHeight - 65
	})
});
$(".hidden").click(function() {
	$(".information1").css("display", "none")
})
$(".dropdown-item").eq(0).click(function() {
	$(".information1").css("display", "block")
	$(".information").css("display", "block")
	$(".information2").css("dfunctionisplay", "none")
})

var num = 1;
var num1 = 1;
$(".col_right	button").eq(1).css({
	background : "#005A92",
	color : "#fff"
})
$(".col_right	button").click(function() {
	$(this).css({
		background : "#005A92",
		color : "#fff"
	}).siblings().css({
		background : "#f8f9fa",
		color : "#212529"
	})
	if ($(this).html() == "自定义") {
		$("#show").css("display", "block")
	} else {
		$("#show").css("display", "none")
	}
})
$(".dropdown").mouseenter(function() {
	$(".dropdown-menu").css('display', "block")
})
$(".dropdown").mouseleave(function() {
	$(".dropdown-menu").css('display', "none")
})
$(".img")
.click(
		function() { //点击列表
			if (num == 1) {
				$("#hide").css({
					"max-width" : "53px",
					"overflow" : "hidden"
				});
				$(".head_right p").css("margin-left", "12px");
				$("li a").css({
					"width" : "52px",
					"text-indent" : "0px",
					"font-size" : "0px",
				});
				$(".head").css({
					"max-width" : "53px",
					"font-size" : "0px",
				});
				$(".ul").css("display", "none");
				$(".img img").css({
					"margin-top" : "4px"
				});
				$("#ul_ul").css("display", "none");
				$(".img_right").css("display", "none");
				num = 2;

				/* 离开 */
				$(".head")
				.mouseleave(
						function() {
							$(".img img")
							.attr("src",staticResourcesRootPath+
							"/images/other/列表3.png");

							$("#hide").css({
								"max-width" : "53px",
								"overflow" : "hidden"
							});
							$(".head_right p").css(
									"margin-left",
							"12px");
							$("li a").css({
								"width" : "52px",
								"text-indent" : "0px",
								"font-size" : "0px",
							});
							$(".head").css({
								"max-width" : "53px",
								"font-size" : "0px",
							});
							$(".ul").css("display",
							"none");
							$(".img img").css({
								"margin-top" : "4px"
							});
							$("#ul_ul").css("display",
							"none");
							$(".img_right").css(
									"display", "none");
						});

				/* 悬浮 */
				$(".head")
				.mouseenter(
						function() {
							$(".img img")
							.attr(
									"src",staticResourcesRootPath+
							"/images/other/39ba3955d74e3ee872374476ff8b0bf.png");

							$(".ul").css("display",
							"block");
							//$("#ul_ul").css("display", "block");
							$("#hide").css({
								"max-width" : "225px",
								"overflow" : "auto"
							});
							$("li a").css({
								"width" : "225px",
								"font-size" : "14px",
							});
							if (document.body.clientHeight < 580) {
								$("li a").css("width",
								"208px")
							}
							if (document.body.clientHeight < 769
									&& $("#parent_ul")
									.children().length < 7) {
								$("li a").css("width",
								"225px")
							}
							$(".head").css({
								"max-width" : "225px",
								"font-size" : "14px"
							});
							$("li a")
							.eq(1)
							.children()
							.eq(1)
							.attr("src",staticResourcesRootPath+
							"/images/other/箭头_右.png");
							$(".head_right p").css(
									"margin-left",
							"14px");
							$(".img_right").css(
									"display", "block");

							//变大
							var parent_ul = document
							.getElementById("parent_ul");
							var parent_a = parent_ul
							.getElementsByTagName("a");
							for (var i = 0; i < parent_a.length; i++) {
								var moduleA = parent_a[i];
								var sourceTextIndent = moduleA
								.getAttribute("sourceTextIndent");
								var sourceWidth = moduleA
								.getAttribute("sourceWidth");
								if (null != sourceTextIndent) {
									if ($(
									"#moduleLi_649CD41AA15B456DA0EA5B4CCC0DACD8")
									.attr(
									"name") == "name1") {
										$("li a")
										.css(
												{
													"width" : "208px",
													"font-size" : "14px",
												});
										if (document.body.clientHeight > 769) {
											$("li a")
											.css(
													"width",
											"225px")
										}
										if (document.body.clientHeight < 769
												&& $(
												"#parent_ul")
												.children().length < 7) {
											$("li a")
											.css(
													"width",
											"225px")
										}
									}
									moduleA
									.setAttribute(
											"style",
											"color: #fff;text-indent:"
											+ sourceTextIndent
											+ "px");
								}
							}
						});

				$("#hide")
				.mouseleave(
						function() {
							$(".img img")
							.attr("src",staticResourcesRootPath+
							"/images/other/列表3.png");

							$("#hide").css({
								"max-width" : "53px",
								"overflow" : "hidden"
							});
							$(".head_right p").css(
									"margin-left",
							"12px");
							$("li a").css({
								"width" : "52px",
								"text-indent" : "0px",
								"font-size" : "0px",
							});
							$(".head").css({
								"max-width" : "53px",
								"font-size" : "0px",
							});
							$(".ul").css("display",
							"none");
							$(".img img").css({
								"margin-top" : "4px"
							});
							$("#ul_ul").css("display",
							"none");
							$(".img_right").css(
									"display", "none");
						});

				$("#hide")
				.mouseenter(
						function() {
							$(".img img")
							.attr(
									"src",staticResourcesRootPath+
							"/images/other/39ba3955d74e3ee872374476ff8b0bf.png");

							$(".ul").css("display",
							"block");
							//$("#ul_ul").css("display", "block");
							$("#hide").css({
								"max-width" : "225px",
								"overflow" : "auto"
							});
							$("li a").css({
								"width" : "225px",
								"font-size" : "14px",
							});
							if (document.body.clientHeight < 580) {
								$("li a").css("width",
								"208px")
							}
							if (document.body.clientHeight < 769
									&& $("#parent_ul")
									.children().length < 7) {
								$("li a").css("width",
								"225px")
							}
							$(".head").css({
								"max-width" : "225px",
								"font-size" : "14px"
							});
							$("li a")
							.eq(1)
							.children()
							.eq(1)
							.attr("src",staticResourcesRootPath+
							"/images/other/箭头_右.png");
							$(".head_right p").css(
									"margin-left",
							"14px");
							$(".img_right").css(
									"display", "block");

							//变大
							var parent_ul = document
							.getElementById("parent_ul");

							var parent_a = parent_ul
							.getElementsByTagName("a");
							for (var i = 0; i < parent_a.length; i++) {
								var moduleA = parent_a[i];
								var sourceTextIndent = moduleA
								.getAttribute("sourceTextIndent");
								var sourceWidth = moduleA
								.getAttribute("sourceWidth");
								if (null != sourceTextIndent) {
									if ($(
									"#moduleLi_649CD41AA15B456DA0EA5B4CCC0DACD8")
									.attr(
									"name") == "name1") {
										$("li a")
										.css(
												{
													"width" : "208px",
													"font-size" : "14px",
												});
										if (document.body.clientHeight > 769) {
											$("li a")
											.css(
													"width",
											"225px")
										}
										if (document.body.clientHeight < 769
												&& $(
												"#parent_ul")
												.children().length < 7) {
											$("li a")
											.css(
													"width",
											"225px")
										}
									}
									moduleA
									.setAttribute(
											"style",
											"color: #fff;text-indent:"
											+ sourceTextIndent
											+ "px");
								}
							}
						});

				//调小
				//$("#parent_ul a").css({
				//	"text-indent": "16px"
				//});
			} else {
				$(".img img")
				.attr("src",staticResourcesRootPath+
				"/images/other/列表3.png");
				$("#hide").unbind("mouseenter")
				$("#hide").unbind("mouseleave")
				$(".head").unbind("mouseenter")
				$(".head").unbind("mouseleave")
				num = 1;
				$(".ul").css("display", "block");
				//$("#ul_ul").css("display", "block");
				$("#hide").css({
					"max-width" : "225px",
					"overflow" : "auto"
				});
				$("li a").css({
					"width" : "225px",
					"font-size" : "14px",
				});
				if (document.body.clientHeight < 580) {
					$("li a").css("width", "208px")
				}
				if (document.body.clientHeight < 769
						&& $("#parent_ul").children().length < 7) {
					$("li a").css("width", "225px")
				}
				$(".head").css({
					"max-width" : "225px",
					"font-size" : "14px"
				});
				$("li a")
				.eq(1)
				.children()
				.eq(1)
				.attr("src",staticResourcesRootPath+
				"/images/other/箭头_右.png");
				$(".head_right p").css("margin-left", "14px");
				$(".img_right").css("display", "block");

				//变大
				var parent_ul = document
				.getElementById("parent_ul");
				var parent_a = parent_ul
				.getElementsByTagName("a");
				for (var i = 0; i < parent_a.length; i++) {
					var moduleA = parent_a[i];
					var sourceTextIndent = moduleA
					.getAttribute("sourceTextIndent");
					var sourceWidth = moduleA
					.getAttribute("sourceWidth");
					if (null != sourceTextIndent) {
						if ($(
						"#moduleLi_649CD41AA15B456DA0EA5B4CCC0DACD8")
						.attr("name") == "name1") {
							$("li a").css({
								"width" : "208px",
								"font-size" : "14px",
							});
							if (document.body.clientHeight > 769) {
								$("li a").css("width", "225px")
							}
							if (document.body.clientHeight < 769
									&& $("#parent_ul")
									.children().length < 7) {
								$("li a").css("width", "225px")
							}
						}
						moduleA.setAttribute("style",
								"color: #fff;text-indent:"
								+ sourceTextIndent
								+ "px");
					}
				}
			}
		});