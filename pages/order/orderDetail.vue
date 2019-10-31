<template>
	<view>
		<view class='contain_area'>
			<view class='order_head'>
				<text class='orderStatue'>交易成功</text>
				<!-- <text class='orderTip'>逾期未付款将自动取消订单</text> -->
				
				<image class='orderPic' src='../../static/images/jiaoyichenggong@2x.png'>
			</view>
			
			<view class='order_center'>
				<!-- <view class='pre_ordercenter' v-if="hasAddres">
					<view class='left_addres'>
						<view class='icon_noaddres'></view>
					</view>
					<view class='right_addres'>
						<text class='text_noaddres'>新增收获地址</text>
						<view class='enter_noaddres'></view>
					</view>
					
				</view> -->
				<view class='pre_ordercenter'>
					<view class='left_addres'>
						<view class='icon_addres'></view>
					</view>
					<view class='right_addres'>
						<text class='text_contacts'>花花</text>
						<text class='text_phone'>18297859347</text>
						<view class='pre_adress'>
							<text class='text_addres'>江苏省南京市雨花台区江宁区江苏省南京市雨花台区江宁区</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class='order_detail'>
				<view class="goods-section">
					<view class="g-header b-b">
						<image class="logo" src="../../static/images/dianpu@2x.png"></image>
						<text class="name">西城小店铺</text>
					</view>
					<!-- 商品列表 -->
					<view class="g-item">
						<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg"></image>
						<view class="right">
							<text class="title ">古黛妃 短袖t恤女夏装2019新款</text>
							<view class="price-box">
								<text class="price">￥17.80</text>
								<text class="number">x 1</text>
							</view>
						</view>
					</view>
					<view class="g-item">
						<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg"></image>
						<view class="right">
							<text class="title ">韩版于是洞洞拖鞋 夏季浴室防滑简约居家韩版于是洞洞拖鞋 夏季浴室防滑简约居家韩版于是洞洞拖鞋 夏季浴室防滑简约居家</text>
							<view class="price-box">
								<text class="price">￥444.00</text>
								<text class="number">x 1</text>
							</view>
							<view class='statue_box'>
								<text class='goods_statue'>38小时内发货</text>
								<view class='pre_num_box'>
									<uni-number-box class='num_box'  :min="1" :max="9"></uni-number-box>
								</view>
								
							</view>
						</view>
					</view>
				</view>
				
				<view class='countmoney'>
					<text class='countmoney_HJ'>合计</text>
					<view class='pre_monryarea'>
						<text class='text_money_dw'>￥</text>
						<text class='text_momey'>998</text>
						<text class='text_money_dw'>.00</text>
					</view>
				</view>
			</view>
			
			<view class='orderNumber'>
				<view class='titleArea'>
					订单信息
				</view>
				<view class='con_orderNumber'>
					<text >订单编号：</text>
					<text>879098028498902</text>
				</view>
				<view class='contact'>
					<text class='icon_contact'></text>
					<text class='con_contact'>联系卖家</text>
				</view>
				<view class='callphone'>
					<text class='icon_callphone'></text>
					<text class='con_callphone'>拨打电话</text>
				</view>
				
			</view>
			
		</view>
		
		<view class='order_footer'>
			
			<view class='cancel_order'>联系客服</view>
		</view>
	</view>
	
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default {
	  components: {
	  			uniNumberBox
	  		},
			data() {
				return {
					
				}
			},
			onLoad() {
				
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
	
</script>

<style>
	.contain_area{
		width:100%;
		height:auto;
		float:left;
		padding-bottom:500px;
	}
	.order_head{
		width:100%;
		height:340upx;
		float:left;
		background:url(../../static/images/dingdan_bg@2x.png)center center;
		background-size:100% 100%;
	}
	
	/* 如果设备像素大于等于2，则用2倍图 */
	@media screen and (-webkit-min-device-pixel-ratio: 2),
	screen and (min--moz-device-pixel-ratio: 2) {
	  .order_head{
	  	width:100%;
	  	height:340upx;
	  	float:left;
	  	background:url(../../static/images/dingdan_bg@2x.png)center center;
	  	background-size:100% 100%;
	  }
	}
	/* 如果设备像素大于等于3，则用3倍图 */
	@media screen and (-webkit-min-device-pixel-ratio: 3),
	screen and (min--moz-device-pixel-ratio: 3) {
	  .order_head{
	  	width:100%;
	  	height:340upx;
	  	float:left;
	  	background:url(../../static/images/dingdan_bg@3x.png)center center;
	  	background-size:100% 100%;
	  }
	}
	.orderStatue{
		width:60%;
		height:35px;
		float:left;
		margin-top:65px;
		margin-left:8%;
		font-size:1.15em;
		color:#fff;
	}
	.orderTip{
		width:60%;
		height:30px;
		float:left;
		margin-left:8%;
		color:#fff;
		font-size:0.9em;
	}
	.orderPic{
		width:30%;
		height:80px;
		float:left;
		margin-top:50px;
	}
	.order_center{
		width:94%;
		height:auto;
		position: absolute;
		left:3%;
		top:150px;
		background:#fff;
		padding:3% 0;
		border-radius:5px;
		}
		.pre_ordercenter{
			width:100%;
			float:left;
			margin:10px 0 10px 0;
		}
		.icon_noaddres{
			width:20px;
			height:20px;
			float:left;
			margin-left:3%;
		}
		.icon_noaddres{
			background:url(../../static/images/add@2x.png)no-repeat;
			background-size:100% 100%;
		}
		.icon_addres{
			width:20px;
			height:25px;
			float:left;
			margin-left:3%;
			background:url(../../static/images/dingwen@2x.png)no-repeat;
			background-size:100% 100%;
			margin-top:25px;
		}
		.text_noaddres{
			width:90%;
			height:20px;
			line-height:20px;
			float:left;
			margin-left:2%;
		}
		.enter_noaddres{
			width:20px;
			height:20px;
			float:left;
			background:url(../../static/images/more@2x.png)no-repeat;
			background-size:100% 100%;
		}
		.left_addres{
			width:20px;
			height:100%;
			float:left;
			margin-left:3%;
		}
		.right_addres{
			width:88%;
			height:100%;
			float:left;
			margin-left:2%;
		
		}
		.text_contacts{
			width:auto;
			height:30px;
			line-height:30px;
			float:left;
			margin-left:2%;
		}
		.text_phone{
			width:auto;
			height:30px;
			line-height:30px;
			float:left;
			margin-left:3%;
			color:#555;
		}
		.text_addres{
			width:98%;
			line-height:20px;
			float:left;
			margin-left:2%;
		}
		.order_detail{
			width:94%;
			height:auto;
			float:left;
			margin-top:103px;
			margin-left:3%;
			padding:3% 0;
			background:#fff;
			border-radius:5px;
		}
		.goods-section {
			background: #fff;
			padding-bottom: 1px;
		
		}
		.g-header {
			display: flex;
			align-items: center;
			height: 84upx;
			padding: 0 30upx;
			position: relative;
		}
				
		.logo {
			width: 30upx;
			height: 30upx;
		}
				
		.name {
			font-size: 30upx;
			color: $font-color-base;
			margin-left: 24upx;
		}
				
		.g-item {
			display: flex;
			margin: 20upx 30upx;
		}
		image {
			flex-shrink: 0;
			display: block;
			width: 170upx;
			height: 180upx;
			border-radius: 10upx;
		}
				
		.right {
			flex: 1;
			padding-left: 24upx;
			overflow: hidden;
		}
				
		.title {
			height:auto;
			width:70%;
			float:left;
			font-size:1em;
			line-height:22px;
			color: $font-color-dark;
			overflow : hidden;
		    text-overflow: ellipsis;
		    display: -webkit-box;
		    -webkit-line-clamp: 3;//规定几行显示省略号
		    -webkit-box-orient: vertical;
		}
		
		.price-box {
			width:27%;
			float:right;
			margin-left:1%;
			font-size: 32upx;
			color: $font-color-dark;
			padding-top: 10upx;
		}
		.price {
			width:100%;
			display:block;
			float:left;
			margin-bottom: 4upx;
			font-size:0.9em;
		}
		.number{
			width:100%;
			display:block;
			float:right;
			text-align: right;
			font-size: 26upx;
			color: #979797;
			
		}
		.step-box {
			position: relative;
		}
		.countmoney{
			width:100%;
			height:auto;
			float:left;
			border-top:dashed 1px #efefef;
		}
		.countmoney_HJ{
			width:auto;
			float:left;
			margin-left:3%;
			margin-top:10px;
			color:#555;
		}
		.pre_monryarea{
			width:auto;
			float:right;
			margin-right:3%;
			margin-top:10px;
		}
		.statue_box{
			width:100%;
			height:30px;
			margin-top:8px;
			float:left;
		}
		.goods_statue{
			width:auto;
			height:28px;
			line-height:28px;
			float: left;
			padding:2px 3px;
			border-radius:5px;
			background:rgba(254,244,239,0.8);
			color:#eb6c37;
			font-size:0.9em;
		}
		.pre_num_box{
			float:right;
		}
		.orderNumber{
			width:94%;
			height:auto;
			float:left;
			margin-left:3%;
			background:#fff;
			margin-top:10px;
			border-radius:5px;
			padding:3% 0;
		}
		.titleArea{
			width:94%;
			height:20px;
			line-height:20px;
			border-left:solid 5px #fa723a;
			padding-left:2%;
			margin-left:3%;
		}
		.con_orderNumber{
			width:100%;
			height:40px;
			line-height:40px;
			float:left;
			border-bottom:solid 1px #f0f0f0;
			padding-left:3%;
			color:#666;
		}
		.contact,
		.callphone{
			width:50%;
			height:20px;
			float:left;
			line-height:20px;
			text-align: center;
			border-right:solid 1px #efefef;
			margin-top:15px;
		}
		.icon_contact,
		.icon_callphone{
			width:18px;
			height:18px;
			float:left;
			margin-left:30%;
		}
		.icon_contact{
			background: url(../../static/images/电话@2x.png)no-repeat;
			background-size:100% 100%;
		}
		.icon_callphone{
			background: url(../../static/images/电话@2x.png)no-repeat;
			background-size:100% 100%;
		}
		.con_contact,
		.con_callphone{
			width:auto;
			height:18px;
			line-height:18px;
			float:left;
			margin-left:2%;
		}
		.order_footer{
			width:100%;
			height:60px;
			background:#fff;
			position:fixed;
			bottom:0px;
			left:0px;
		}
		.cancel_order{
			width:80px;
			height:30px;
			line-height:28px;
			float:right;
			margin-top:15px;
			border:solid 1px #aeaeae;
			color:#666;
			border-radius:20px;
			text-align: center;
			margin-right:3%;
			
		}
		.confirm_order{
			width:80px;
			height:30px;
			line-height:28px;
			float:right;
			margin-top:15px;
			color:#fff;
			border-radius:20px;
			text-align: center;
			background:#fa723a;
			margin-right:3%;
		}
</style>
