<template>
	<view>
		<view
			class="header"
			:class="{ fixed: navFixed, absolute: type == 'transparent', line: navLine, colorWhite: isWhite }"
			:style="{ paddingTop: statusBarHeight + 'px', background: navBgColor, color: navFontColor, opacity: transparentValue }"
		>
			<view class="left_box">
				<slot name="left">
					<view class="left_info" :class="{ btnMongol: isTwoBtn }" v-if="back || $slots.left || (firstPage && back) || home">
						<view class="back" v-if="back && !firstPage" @click="onBackPage"></view>
						<text v-if="isTwoBtn"></text>
						<view class="home" v-if="(firstPage && back) || home" @click="onBackHome"></view>
					</view>
				</slot>
				<view class="title" :class="{ center: titleCenter, color: navFontColor }" v-if="$slots.default || navTitle">
					<slot>{{ navTitle }}</slot>
				</view>
			</view>
			<view class="right_info"><slot name="right"></slot></view>
		</view>
		<view
			class="header transparentFixed fixed"
			:class="{ colorWhite: isWhite }"
			v-if="type == 'transparentFixed'"
			:style="{ paddingTop: statusBarHeight + 'px', color: navTransparentFixedFontColor, opacity: 1 - transparentValue, zIndex: transparentValue < 0.3 ? 100 : 90 }"
		>
			<view class="left_box">
				<view class="left_info" v-if="back || $slots.left || (firstPage && back) || home">
					<slot name="transparentFixedLeft">
						<view class="back" v-if="back && !firstPage" @click="onBackPage"></view>
						<text v-if="isTwoBtn"></text>
						<view class="home" v-if="(firstPage && back) || home" @click="onBackHome"></view>
					</slot>
				</view>
				<view class="title" :class="{ center: titleCenter }" v-if="$slots.default || navTitle">
					<slot name="transparentFixed">{{ navTitle }}</slot>
				</view>
			</view>
			<view class="right_info"><slot name="transparentFixedRight"></slot></view>
		</view>
		<view v-if="type == 'fixed'" :style="{ paddingTop: statusBarHeight + 'px' }" class="station"></view>
	</view>
</template>
<script>
// 主页页面的页面路径
// 关联功能：打开的页面只有一个的时候右上角自动显示返回首页按钮，下面这个数组是排除显示返回首页的页面。
// 主页使用场景：小程序分享出去的页面，用户点击开是分享页面，很多情况下是没有返回首页按钮的
const mainPagePath = ["pages/navList"];
//返回首页的地址
const homePath = "/pages/navList";
//白色表达值
const whiteList = ['#FFF', '#FFFFFF', 'white', 'rgb(255,255,255)', 'rgba(255,255,255,1)'];
export default {
	props: {
		//是否显示返回按钮
		back: {
			type: Boolean,
			default: function() {
				return true;
			}
		},
		//是否显示返回首页按钮
		home: {
			type: Boolean,
			default: function() {
				return false;
			}
		},
		//导航背景色，bg为false的时候导航通透
		bgColor: {
			type: String,
			default: function() {
				return '#FFF';
			}
		},
		//导航字体颜色，字体颜色为白色的时候会把手机状态栏设置为白色，否则为黑色
		fontColor: {
			type: String,
			default: function() {
				return '#000';
			}
		},
		//标题是否居中
		titleCenter: {
			type: Boolean,
			default: function() {
				return true;
			}
		},
		//标题
		title: {
			type: String,
			default: function() {
				return '';
			}
		},
		//类型 fixed为固定 默认
		// ordinary 普通的 不固定
		// transparent 透明不固定的
		//transparentFixed  透明固定的
		type: {
			type: String,
			default: function() {
				return 'fixed';
			}
		},
		//透明固定的时候字体颜色
		transparentFixedFontColor: {
			type: String,
			default: function() {
				return '#000';
			}
		}
	},
	data() {
		return {
			//状态栏高度
			statusBarHeight: 0,
			//当前页面是否是第一个页面
			firstPage: false,
			//透明度值
			transparentValue: 1,
			//标题
			navTitle: '',
			//字体色
			navFontColor: '#000',
			//背景色
			navBgColor: '#FFF',
			//透明底字体色
			navTransparentFixedFontColor: '#000'
		};
	},
	computed: {
		//导航固定
		navFixed() {
			if (this.type == 'transparentFixed' || this.type == 'fixed') {
				return true;
			} else {
				return false;
			}
		},
		//导航底部线是否显示
		navLine() {
			return this.type !== 'transparent' && whiteList.includes(this.navBgColor);
		},
		//导航字体是否是白色颜色
		isWhite() {
			return whiteList.includes(this.navFontColor);
		},
		//右上角是否有两个按钮
		isTwoBtn() {
			return this.back && this.home && !this.firstPage;
		}
	},
	watch: {
		title(val) {
			this.navTitle = val;
		},
		fontColor(val) {
			this.navFontColor = val;
			this.settingColor();
		},
		bgColor(val) {
			this.navBgColor = val;
		},
		transparentFixedFontColor(val) {
			this.navTransparentFixedFontColor = val;
		}
	},
	//第一次加载
	created() {
		this.navTitle = this.title;
		this.navFontColor = this.fontColor;
		this.navBgColor = this.bgColor;
		this.navTransparentFixedFontColor = this.transparentFixedFontColor;
		const _this = this;
		if (this.type == 'transparentFixed') {
			this.transparentValue = 0;
		}
		this.settingColor();
		//获取手机状态栏高度
		this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
		//获取所有页面
		let currentPages = getCurrentPages();
		let pageLen = currentPages.length;
		//判断是否是第一个页面，如果是有设置back为true的页面，将不显示返回箭头，而现实返回首页按钮
		if (pageLen == 1 && !mainPagePath.includes(currentPages[0].route)) {
			this.firstPage = true;
		}
		//监听页面滚动，type为transparentFixed的时候页面向下滚动的时候导航逐渐变白
		if (this.type == 'transparentFixed') {
			// #ifndef H5
			currentPages[pageLen - 1].onPageScroll = function(e) {
				_this.$emit('scroll', e);
				if (e.scrollTop > 180) {
					_this.transparentValue = 1;
				} else {
					_this.transparentValue = e.scrollTop / 180;
				}
			};
			// #endif
			// #ifdef H5
			window.onscroll = function(e) {
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				_this.$emit('scroll', { scrollTop: scrollTop });
				if (scrollTop > 180) {
					_this.transparentValue = 1;
				} else {
					_this.transparentValue = scrollTop / 180;
				}
			};
			// #endif
		}
	},
	//方法
	methods: {
		//返回上一页面
		onBackPage() {
			uni.navigateBack();
		},
		//返回首页
		onBackHome() {
			uni.switchTab({
				url: homePath
			});
		},
		//设置手机状态栏颜色
		settingColor() {
			//判断导航栏颜色
			if (whiteList.includes(this.navFontColor)) {
				// 改变手机状态栏颜色
				uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: this.navBgColor
				});
			} else {
				// 改变手机状态栏颜色
				uni.setNavigationBarColor({
					frontColor: '#000000',
					backgroundColor: this.navBgColor
				});
			}
		}
	}
};
</script>
<style lang="scss" scoped>
.station {
	box-sizing:content-box;
	height: 88upx;
}
.header {
	display: flex;
	align-items: flex-end;
	position: relative;
	justify-content: space-between;
	box-sizing:content-box;
	height: 88upx;
	/* #ifdef MP */
	padding-right: 190upx;
	/* #endif */
	&.fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
	}
	&.absolute {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
		background-color: transparent !important;
	}
	&.line {
		//需要显示线条的在这打开
		// border-bottom: 2upx solid #f5f5f5;
		box-shadow: 0 0 6upx 0 #ddd;
	}
	&.transparentFixed {
		border-bottom: 0;
		background-color: initial;
		background-image: initial;
		.left_info {
			border: 2upx solid rgba(0, 0, 0, 0.1);
			background-color: rgba(255, 255, 255, 0.7);
			border-radius: 33upx;
			box-sizing: border-box;
		}
		&.colorWhite .left_info {
			border: 2upx solid rgba(255, 255, 255, 0.3);
			background-color: rgba(0, 0, 0, 0.2);
		}
	}
	//颜色白色
	&.colorWhite {
		.left_info {
			&.btnMongol {
				border: 2upx solid rgba(255, 255, 255, 0.3);
				background-color: rgba(0, 0, 0, 0.2);
			}
			.back {
				background-image: url('https://qn.kemean.cn/upload/201910/10/zuo.png');
			}
			text {
				background-color: rgba(255, 255, 255, 0.3);
			}
			.home {
				background-image: url('https://qn.kemean.cn/upload/201910/10/46c33d19653248b59e1e06bfa76a02fe');
			}
		}
	}
	.left_box {
		display: flex;
		align-items: center;
		height: 100%;
	}
	$height: 56upx;
	.left_info {
		margin-right: 30upx;
		display: flex;
		align-items: center;
		height: $height;
		transition: all 0.6s;
		margin-left: 16upx;
		&.btnMongol {
			border-radius: 33upx;
			border: 2upx solid rgba(0, 0, 0, 0.1);
			background-color: rgba(255, 255, 255, 0.7);
			box-sizing: border-box;
			.back,
			.home {
				width: 70upx;
			}
		}
		.back {
			background-image: url('https://qn.kemean.cn/upload/201908/29/back.png');
			background-position: center center;
			background-repeat: no-repeat;
			background-size: auto 55%;
			width: $height;
			height: 100%;
		}
		text {
			height: 30upx;
			width: 2upx;
			background-color: rgba(255, 255, 255, 0.4);
		}
		.home {
			background-image: url('https://qn.kemean.cn/upload/201908/29/home.png');
			background-position: center center;
			background-repeat: no-repeat;
			background-size: auto 55%;
			width: $height;
			height: 100%;
		}
	}
	.title {
		height: 88upx;
		font-size: 32upx;
		padding-left: 30upx;
		font-weight: 700;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: flex;
		align-items: center;
		/* #ifndef APP-PLUS||H5 */
		max-width: 60vw;
		/* #endif */
		&.center {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	view:nth-child(2) {
		padding-left: 0;
	}
	.right_info {
		height: 100%;
		display: flex;
		align-items: center;
	}
}
</style>
