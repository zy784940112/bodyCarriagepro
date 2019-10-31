<template>
	<view>
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400" class='car_swiper'>
				<swiper-item class="swiper-item" v-for="(item,index) in imgList" :key="index">
					<view class="image-wrapper">
					<image :src="item.src" class="loaded"  mode="aspectFill" ></image> 
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- <view class='commodityPic'>
			<image class='commodityPic_img' src='../../static/sh_pic.png' mode="aspectFill"></image>
		</view> -->
		
		<view class='commodity'>
			<view class='commodity_price'>
				<text class='DW_commodity_price'>￥</text>
				<text class='JG_commodity_price'>899</text>
			</view>
			<view class='commodity_title'>被猛士婴儿推车可坐可躺超轻便携式折叠小宝宝伞车四轮儿童手推车</view>
			<view class='commodity_SalesVolume'>
				<text>月销：</text>
				<text>599</text>
			</view>
		</view>
		
		<!-- <view class='commodityDetails'>
			<view class='title_commodityDetails'>商品详情</view>
		</view> -->
		
		<view class='purchase'>
			<view class='btn_purchase' @tap="enterOrderConfirm()">立即购买</view>
		</view>
	</view>
</template>

<script>
	 export default {
	   components: {
	   			
	   		},
		data() {
			return {
				imgList: [
					{
						src: 'https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg'
					},
					{
						src: 'https://gd3.alicdn.com/imgextra/i3/TB1RPFPPFXXXXcNXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg'
					},
					{
						src: 'https://gd2.alicdn.com/imgextra/i2/38832490/O1CN01IYq7gu1UGShvbEFnd_!!38832490.jpg_400x400.jpg'
					}
				]
		    }
	     },
		methods:{
			enterOrderConfirm() {
				uni.navigateTo({
					url:'../order/orderConfirm'
				})
			}
		}
	  }
	   </script>

<style>
	.carousel {
		height:866upx;
		position:relative;
	}
	.car_swiper{
		height: 100%;
	}
	.image-wrapper{
		width: 100%;
		height: 100%;
		
	}
	.loaded{
		height: 100%;
		width:100%;
	}
	.commodity{
		width:100%;
		height:auto;
		float:left;
		background:#fff;
	}
	.commodityPic{
		width:100%;
		height:432px;
		float:left;
	}
	.swiper-item {
		display: flex;
		justify-content: center;
		align-content: center;
		height: 750upx;
		overflow: hidden;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.commodityPic_img{
		width:100%;
		height:100%;
		float:left;
	}
	.commodity{
		width:100%;
		height:auto;
		float:left;
	}
	.commodity_price{
		width:100%;
		height:40px;
		line-height:40px;
		float:left;
		padding-left:3%;
		color:#ff4000;
	}
	.DW_commodity_price{
		font-size:0.9em;
	}
	.JG_commodity_price{
		font-size:1.25em;
		font-weight:600;
	}
	.commodity_title{
		width:94%;
		line-height:22px;
		margin-left:3%;
		font-size:1em;
		font-weight: 600;
		color:#222;
	}
	.commodity_SalesVolume{
		width:94%;
		height:30px;
		line-height:30px;
		float:left;
		font-size:0.8em;
		color:#9c9c9c;
		padding:0 3% 0 3%;
	}
	.commodityDetails{
		width:100%;
		height:auto;
		float:left;
	}
	.title_commodityDetails{
		width:94%;
		height:30px;
		line-height:30px;
		float:left;
		
	}
	.purchase{
		height:56px;
		width:100%;
		position:fixed;
		bottom:0px;
		left:0px;
		background:#fff;
		box-shadow: 0 1px 5px #ccc;
	}
	.btn_purchase{
		width:90%;
		height:46px;
		float:left;
		margin-top:5px;
		background:#fe8435;
		border-radius:20px;
		margin-left:5%;
		text-align: center;
		line-height:46px;
		color:#fff;
	}
</style>
