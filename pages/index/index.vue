<template>
	<view>
		<view>
			<view class="head_bg">
				<image src="../../static/images/home_bg@2x.png"></image>
			</view>
			<view class="uni-status-bar example-body" >
				<uni-nav-bar   title="童车系统"  titleColor="#fff" backgroundColor="rgba(255,255,255,0)"/>
			</view>
		</view>
		
		<view class="swiper_Rotation">
			<uni-swiper-dot class="swiper_item">
				<swiper class="swiper-box">
					<swiper-item  class='swiperItem1'>
						<view  class="swiper-item">
							<image class="swiper_img" src='../../static/banner.png' mode="aspectFill" /> 
						</view>
					</swiper-item>
					<swiper-item class='swiperItem2'>
						<view  class="swiper-item">
							<image class="swiper_img" src='../../static/banner.png' mode="aspectFill" /> 
						</view>
					</swiper-item>
					<swiper-item class='swiperItem3'>
						<view  class="swiper-item">
							<image class="swiper_img" src='../../static/banner.png' mode="aspectFill" />
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		
		<!-- 推荐商品 -->
		<view class="swiper_RecommendCommodity">
			<view class='title_area'>推荐商品</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view  class="floor-item" @tap="enterListDetail()">
						<image class='RC_item_img' src='../../static/sp.png' mode="aspectFill"></image>
						<view class='RC_item_title'>婴儿手推车座椅手推车座椅</view>
						<view class='RC_item_price'>
							<text class='price_fh'>￥</text>
							<text class='price_jg'>1900</text>
							<text class='price_dw'>/辆</text>
						</view>
					</view>
					<view  class="floor-item" @tap="enterListDetail()">
						<image class='RC_item_img' src='../../static/sp.png' mode="aspectFill"></image>
						<view class='RC_item_title'>婴儿手推车座椅手推车座椅</view>
						<view class='RC_item_price'>
							<text class='price_fh'>￥</text>
							<text class='price_jg'>1900</text>
							<text class='price_dw'>/辆</text>
						</view>
					</view>
					<view  class="floor-item" @tap="enterListDetail()">
						<image class='RC_item_img' src='../../static/sp.png' mode="aspectFill"></image>
						<view class='RC_item_title'>婴儿手推车座椅手推车座椅</view>
						<view class='RC_item_price'>
							<text class='price_fh'>￥</text>
							<text class='price_jg'>1900</text>
							<text class='price_dw'>/辆</text>
						</view>
					</view>
					<view  class="floor-item" @tap="enterListDetail()">
						<image class='RC_item_img' src='../../static/sp.png' mode="aspectFill"></image>
						<view class='RC_item_title'>婴儿手推车座椅手推车座椅</view>
						<view class='RC_item_price'>
							<text class='price_fh'>￥</text>
							<text class='price_jg'>1900</text>
							<text class='price_dw'>/辆</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 列表 -->
		<view class='list_commodity'>
			<view class='title_area'>附近商家</view>
			<view class="uni-list">
			    <view class="uni-list-cell"  hover-class="uni-list-cell-hover" @tap="enterStore()">
			        <view class="uni-media-list">
			            <image class="uni-media-list-logo" src='../../static/sp.png'></image>
			            <view class="uni-media-list-body">
			                <view class="uni-media-list-text-title">baby母婴店</view>
			                <view class="uni-media-list-text-center">
			                    <text>月销:</text>
			                    <text>1920</text>
								<text class='text_distance'>1.5km</text>
			                </view>
							<view class="uni-media-list-text-center">
							    <text>地址:</text>
							    <text>南京市江宁区雨花台区花神大道</text>
							</view>
			            </view>
			        </view>
			    </view>
			</view>
		</view>
		
		
		
		
		
	</view>
</template>

<script>
	var dateUtils = require('../../common/util.js').dateUtils;
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniStatusBar from '@/components/uni-status-bar/uni-status-bar.vue'
	export default {
		components: {
			uniSwiperDot,
			uniIcons,
			uniNavBar,
			uniStatusBar,
			banner: {},
			listData: [],
			last_id: "",
			reload: false
		},
		data() {
			return {
				 titleColor:"#fff",
			}
		},
		onLoad() {
			this.statusBarHeight=10;
		    //this.getList();
			//this.titleColor="#fff"
		},
		onPullDownRefresh() {
		   /* this.reload = true;
		    this.last_id = "";
		    this.getList(); */
		},
		onReachBottom() {
		    /* this.getList(); */
		},
		methods: {
			merchant(){
				uni.showToast({
					title: '门店'
				})
			},
			store(){
				uni.showToast({
					title: '商户'
				})
			},
			enterListDetail() {
				uni.navigateTo({
					url:'../listDetail/listDetail'
				})
			},
			enterStore(){
				uni.navigateTo({
					url:'../store/storeInform'
				})
			}
			/* back() {
				uni.navigateBack({
					delta: 1
				})
			} */
			
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh')
			setTimeout(function() {
				uni.stopPullDownRefresh()
				console.log('stopPullDownRefresh')
			}, 1000)
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}
	.uni-status-bar {
		display: block;
		width: 100%;
		height: 20px;
		height: var(--status-bar-height);
	}
	.uni-navbar__content {
		display: block;
		position: relative;
		width: 100%;
		background-color:rgba(255,255,255,0);
		overflow: hidden
	}
    .head_bg{
    	width: 100%;
    	height: 304rpx; 
    	 }
    .head_bg image{
    	width: 100%;
    	height: 304rpx;
    	 }
	.example-body{
		position: fixed;
		width: 100%;
		top:0upx;
		left:0upx;
		z-index:9999;
		padding:0rpx 0rpx;
	}
	.title_area{
		width:100%;
		height:36px;
		float:left;
		line-height:36px;
		font-weight: 600;
		padding-left:3%;
		font-size:1.1em;
		color:#222;
	}
	.swiper_Rotation{
		width:94%;
		height:150px;
		position:absolute;
		left:3%;
		top:50px;
		border-radius:5px;
	}
	.swiperItem1,
	.swiperItem2,
	.swiperItem3{
		width:100%;
		height:100%;
		border-radius:5px;
	}
	.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
	.swiper_img{
		width:100%;
		height:120px;
		border-radius:5px;
	}
	.swiper_RecommendCommodity{
		width:94%;
		height:185px;
		float:left;
		margin-top:50px;
		margin-left:3%;
		background:#fff;
		border-radius:5px;
	}
	.list_commodity{
		width:94%;
		height:auto;
		float:left;
		margin-top:10px;
		margin-left:3%;
		background:#fff;
		border-radius:5px;
	}
	.floor-item{
		width:30%;
		float:left;
		margin-left:2.3%;
		margin-top:0px;
		height:160px;
	}
	.RC_item_img{
		width:96%;
		height:80px;
		float:left;
		margin-top:5px;
		margin-left:3%;
		border-radius:5px;
		border:solid 2px #eb6c37;
	}
	.RC_item_title{
		width:96%;
		height:30px;
		line-height:30px;
		float:left;
		margin-left:3%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		font-size:0.9em;
	}
	.RC_item_price{
		width:96%;
		height:20px;
		line-height:20px;
		float:left;
		margin-left:3%;
		color:#ff4000;
	}
	.price_fh{
		font-size:0.9rpx;
	}
	.price_dw{
		font-size:0.9rpx;
	}
	.price_jg{
		font-weight: 600;
	}
	.uni-list {
	    background-color: #FFFFFF;
	    position: relative;
	    width: 100%;
	    display: flex;
	    flex-direction: column;
	}
	
	.uni-list:after {
	    position: absolute;
	    z-index: 10;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    height: 1px;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	}
	
	.uni-list::before {
	    position: absolute;
	    z-index: 10;
	    right: 0;
	    top: 0;
	    left: 0;
	    height: 1px;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	}
	
	.uni-list-cell {
	    position: relative;
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    align-items: center;
	}
	
	.uni-list-cell-hover {
	    background-color: #eee;
	}
	
	.uni-list-cell::after {
	    position: absolute;
	    z-index: 3;
	    right: 0;
	    bottom: 0;
	    left: 30upx;
	    height: 1px;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	}
	
	.uni-list .uni-list-cell:last-child::after {
	    height: 0upx;
	}
	
	/* 图文列表 */
	.uni-media-list {
	    padding: 22upx 16upx;
	    box-sizing: border-box;
	    display: flex;
	    width: 100%;
	    flex-direction: row;
	}
	
	.uni-navigate-right.uni-media-list {
	    padding-right: 74upx;
	}
	
	.uni-pull-right {
	    flex-direction: row-reverse;
	}
	
	.uni-pull-right>.uni-media-list-logo {
	    margin-right: 0upx;
	    margin-left: 20upx;
	}
	
	.uni-media-list-logo image {
	    height: 100%;
	    width: 100%;
	}
	.uni-media-list-text-bottom {
	    width: 100%;
	    line-height: 30upx;
	    font-size: 26upx;
	    color: #8f8f94;
	}
	
	.uni-media-list-logo {
	    width: 180upx;
	    height: 160upx;
	    margin-right: 20upx;
		border-radius:5px;
	}
	
	.uni-media-list-body {
	    display: flex;
	    flex: 1;
	    flex-direction: column;
	    justify-content: space-between;
	    align-items: flex-start;
	    overflow: hidden;
	    height: auto;
	}
	
	.uni-media-list-text-top {
	    width: 100%;
	    line-height: 36upx;
	    font-size: 30upx;
	    height: 74upx;
	    font-size: 28upx;
	    overflow: hidden;
	}
	
	.uni-media-list-text-bottom {
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	}
	.uni-media-list-text-title{
		width:100%;
		height:20px;
		font-size:1em;
		font-weight:600;
		color:#222;
	}
	.uni-media-list-text-center{
		width:100%;
		height:20px;
		float:left;
		color:#666;
		font-size:0.9em;
	}
	.text_distance{
		display:block;
		float:right;
		margin-right:3%;
	}
</style>