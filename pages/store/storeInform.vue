<template>
	<view>
		<view class='head_store'>
			<view class='con_head'>
				<text class='storeName'>通泰的门店通泰的门店</text>
				<view class='groupArea'>
					<view class='left_groupArea'>
						<text class='pre_group'>
							<text class='lable_group'>月销量：</text>
							<text class='group'>19222</text>
						</text>
					</view>
					<view class='right_groupArea'>
						<text class='pre_group'>
							<text class='lable_group'>距离：</text>
							<text class='group'>2km</text>
						</text>
					</view>
				</view>
				<view class='noticeArea'>公告：本店新开张！8折啦~</view>
				<view class='address_store'>
					<text class='lable_address_store'>地址：</text>
					<text class='text_address_store'>江苏省南京市雨花台区江泉路江苏省南京市雨花台区江泉路江苏省南京市雨花台区江泉路</text>
				</view>
				
			</view>
			<image class='store_pic' src='../../static/sp.png'>
		</view>
		<!-- <view class="uni-status-bar example-body" >
			<uni-nav-bar    title="门店" titleColor="#fff" rightTextColor="#fff" backgroundColor="rgba(255,255,255,0)" ></uni-nav-bar>
		</view> -->
		
		<view class='tabArea'>
			<view class="nav">
				<view class='pre_nav-boxs'>
					<view class="nav-boxs" :class="[choice == 1 ? '  nav-boxs-active' : '']" @tap="choiceGo(1)">商品<view v-if="choice == 1"></view></view>
				</view>
				
				<view class='pre_nav-boxs'>
					<view class="nav-boxs1" :class="[choice == 2 ? '  nav-boxs-active' : '']" @tap="choiceGo(2)">商家<view v-if="choice == 2"></view></view>
				</view>
			</view>
			
		<!-- 	商品 -->
			<view class='commodityArea' v-if='choice==1'>
				<view class='list_commodity' @tap='enterListDetail'>
					<image class='commodity_pic' src='../../static/sp.png'>
					<text class='commodity_title'>婴儿车推车婴儿车推车婴儿车推车婴儿车推车</text>
					<view class='pre_money'>
						<text class='text_money_dw'>￥</text>
						<text class='text_momey'>899.00</text>
						<view class='purchase'>购买</view>
					</view>
				</view>
				<view class='list_commodity' @tap='enterListDetail'>
					<image class='commodity_pic' src='../../static/sp.png'>
					<text class='commodity_title'>婴儿车推车婴儿车推车婴儿车推车婴儿车推车</text>
					<view class='pre_money'>
						<text class='text_money_dw'>￥</text>
						<text class='text_momey'>899.00</text>
						<view class='purchase'>购买</view>
					</view>
				</view>
				<view class='list_commodity' @tap='enterListDetail'>
					<image class='commodity_pic' src='../../static/sp.png'>
					<text class='commodity_title'>婴儿车推车婴儿车推车婴儿车推车婴儿车推车</text>
					<view class='pre_money'>
						<text class='text_money_dw'>￥</text>
						<text class='text_momey'>899.00</text>
						<view class='purchase'>购买</view>
					</view>
				</view>
				<view class='list_commodity' @tap='enterListDetail'>
					<image class='commodity_pic' src='../../static/sp.png'>
					<text class='commodity_title'>婴儿车推车婴儿车推车婴儿车推车婴儿车推车婴儿车推车婴儿车推车婴儿车推车婴儿车推车</text>
					<view class='pre_money'>
						<text class='text_money_dw'>￥</text>
						<text class='text_momey'>899.00</text>
						<view class='purchase'>购买</view>
					</view>
				</view>
				
			</view>
			
			<!-- 店铺 -->
			<view class='shopInfoArea' v-if='choice==2'>
				<view class='pre_adress'>
					<view class='left_adress'>
						<view class='adress_shop'></view>
					</view>
					<view class='center_adress'>江苏省南京市雨花台江苏省南京市雨花台江苏省南京市雨花台江苏省南京市雨花台江苏省南京市雨花台</view>
					<view class='right_adress'>
						<view class='call_shopPhone'></view>
					</view>
				</view>
				
				<view class='archivesArea'>
					<view class='head_archivesArea'>
						<view class='headPic archivesPic'></view>
						<view class='headTitle'>
							食品安全档案
						</view>
					</view>
					<view class='con_archivesArea'>
						<image class='con_pic'>
						<image class='con_pic'>
						<image class='con_pic'>
						
					</view>
				</view>
				
				<view class='DeliveryArea'>
					<view class='head_archivesArea'>
						<view class='headPic DeliveryPic'></view>
						<view class='headTitle'>
							<text>配送时间：</text>
							<text>10:00-22:00</text>
						</view>
					</view>
					
				</view>
				
				<view class='shopPicArea'>
					<view class='head_archivesArea'>
						<view class='headPic shopPic'></view>
						<view class='headTitle'>
							门店相册
						</view>
					</view>
					<view class='con_archivesArea'>
						<image class='con_pic'>
						<image class='con_pic'>
						<image class='con_pic'>
						<image class='con_pic'>
						<image class='con_pic'>
						<image class='con_pic'>
					</view>
				</view>
				
			</view>
			
		</view>
		
		
		
		
		
		
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniStatusBar from '@/components/uni-status-bar/uni-status-bar.vue'
	export default {
		components: {
			uniIcons,
			uniNavBar,
			uniStatusBar
		},
		data() {
			return {
				choice: 1,
				refuse: true
			}
		},
		onLoad() {
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			choiceGo(index) {
				this.choice = index
			},
			enterListDetail() {
				uni.navigateTo({
					url:'../listDetail/listDetail'
				})
			},
			
		}
		
	}
</script>

<style>
	.example-body{
		width:100%;
		position:fixed;
		top:0px;
		z-index:999;
	}
	.head_store{
		width:100%;
		height:380upx;
		position:relative;
		left:0px;
		top:0px;
		background:url(../../static/sp.png)no-repeat;
		background-size:100% 100%;
	}
	.head_store:after{
	    content: "";
	    width:100%;
	    height:100%;
	    position: absolute;
	    left:0;
	    top:0;
	    background: inherit;
	    filter: blur(5px);
	    z-index: 2;
	}
	.con_head{
		width:94%;
		height:auto;
		position: absolute;
		left:3%;
		top:280upx;
		z-index:99;
		padding:3% 0;
		background:#fff;
		border-radius:5px;
	}
	.storeName{
		width:60%;
		height:auto;
		float:left;
		margin-left:5%;
		line-height:24px;
		font-size:1.15em;
		font-weight: bold;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.groupArea{
		width:70%;
		height:20px;
		float:left;
	}
	.left_groupArea,
	.right_groupArea{
		width:50%;
		height:15px;
		float:left;
		text-align: center;
		margin-top:10px;
	}
	.left_groupArea{
		border-right:solid 1px #efefef;
	}
	.pre_group{
		width:100%;
		float: left;
		height:15px;
		line-height:15px;
		font-size:0.9em;
	    text{
			width:auto;
		}
	}
	.noticeArea{
		width:auto;
		height:auto;
		float:left;
		padding:3px 3px;
		background:rgba(254,240,235,0.9);
		color:#fe5925;
		margin-left:5%;
		margin-top:15px;
		font-size:0.9em;
	}
	.address_store{
		width:90%;
		min-height:36px;
		float:left;
		margin-left:5%;
		margin-top:10px;
		line-height:18px;
		font-size:0.9em;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.store_pic{
		width:160upx;
		height:140upx;
		position:absolute;
		top:220upx;
		right:60upx;
		z-index:99;
		border-radius:5px;
	}
	.tabArea{
		width:94%;
		height:auto;
		float:left;
		margin-left:3%;
		margin-top:220upx;
		background:#fff;
		border-radius:5px;
		padding:3% 0;
	}
	.nav {
		width: 100%;
		height: 40px;
		display: flex;
		flex-wrap: wrap;
		background: rgba(255, 255, 255, 1);
	}
	.pre_nav-boxs{
		width:50%;
		height:auto;
		height:40px;
		float:left;
		line-height:40px;
		text-align: center;
	}
	.nav-boxs {
		width:30%;
		height:37px;
		float:left;
		margin-left:50%;
		font-weight: 400;
		color: #878787;
		line-height: 37px;
	}
	.nav-boxs1{
		width:30%;
		height:37px;
		float:right;
		margin-right:50%;
		font-weight: 400;
		color: #878787;
		line-height: 37px;
	}
	
	.nav-boxs-active {
		font-weight: 600;
		color: #222;
		border-bottom:solid 3px #fa723a;
	}
	.commodityArea,
	.shopInfoArea{
		width:94%;
		height:auto;
		padding:3% 0;
		float:left;
		margin-left:3%;
	}
	.list_commodity{
		width:45%;
		height:auto;
		float:left;
		margin:0% 2.5% 5% 2.5%;
		
	}
	.commodity_pic{
		width:100%;
		height:240upx;
		float:left;
		border-radius:5px;
	}
	.commodity_title{
		width:100%;
		height:auto;
		line-height:18px;
		font-size:0.9em;
		float:left;
		margin:10px 0 8px 0;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.pre_money{
		width:100%;
		height:24px;
		float:left;
	}
	.purchase{
		width:40%;
		height:24px;
		float:right;
		margin-right:3%;
		line-height:24px;
		text-align: center;
		background:#fa723a;
		color:#fff;
		font-size:0.9em;
		border-radius:20px;
	}
	.pre_adress{
		width:100%;
		height:auto;
		float:left;
	}
	.center_adress{
		width:70%;
		height:auto;
		float:left;
		font-size:0.9em;
		margin-left:2%;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.left_adress{
		width:20px;
		height:20px;
		float:left;
		margin-top:0px;
		
	}
	.right_adress{
		width:18%;
		height:20px;
		float:right;
		margin-top:8px;
		border-left:solid 1px #979797;
	}
	.adress_shop{
		width:20px;
		height:20px;
		float:left;
		margin-top:2px;
		background:url(../../static/images/地址@2x.png)no-repeat;
		background-size:100% 100%;
	}
	.call_shopPhone{
		width:20px;
		height:20px;
		float:left;
		margin-left:30%;
		background:url(../../static/images/电话@2x.png)no-repeat;
		background-size:100% 100%;
	}
	.archivesArea{
		width:100%;
		height:auto;
		float:left;
		border-bottom:dashed 1px #efefef;
	}
	.head_archivesArea{
		width:100%;
		height:20px;
		line-height:20px;
		float:left;
		margin-top:10px;
	}
	.headPic{
		width:20px;
		height:20px;
		float:left;
		margin-right:2%;
		margin-top:1px;
	}
	.headTitle{
		width:auto;
		height:20px;
		line-height:20px;
		float:left;
		font-size:0.9em;
	}
	.archivesPic{
		background:url(../../static/images/食品安全@2x.png)no-repeat;
		background-size:100% 100%;
	}
	.con_archivesArea{
		width:100%;
		height:auto;
		float:left;
		padding:3% 0% 3% 7%;
	}
	.con_pic{
		width:33%;
		height:90px;
		float:left;
		background:#f00;
		border:solid 1px #efefef;
	}
	.DeliveryArea,
	.shopPicArea{
		width:100%;
		height:auto;
		float:left;
		margin-top:10px;
		text{
			line-height:20px;
		}
	}
	.DeliveryPic{
		background:url(../../static/images/时间@2x.png)no-repeat;
		background-size:100% 100%;
	}
	.shopPic{
		background:url(../../static/images/相册@2x.png)no-repeat;
		background-size:100% 100%;
	}
	
</style>
