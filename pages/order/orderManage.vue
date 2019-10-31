<template>
	<view>
		<view>
			<view class="uni-status-bar example-body" >
				<uni-nav-bar left-icon="back"   title="订单列表" titleColor="#222" rightTextColor="#fb9741" backgroundColor="rgba(255,255,255)" @click-left="back"  ></uni-nav-bar>
			</view>
		</view>
		
		<view class='list_con'>
			<view class='orderList'>
				<view class='left_orderList'>
					<text class='title_orderList'>贝特倍护全能王贝特倍护全能王贝特倍护全能王贝特倍护全能王贝特倍护全能王贝特倍护全能王</text>
				</view>
				<view class='right_orderList'>
					<view class='pre_money'>
						<text class='text_momey floatR'>200.00</text>
						<text class='text_money_dw floatR'>￥</text>
					</view>
				</view>
				<view class='leaseDateArea'>
					<view class='pre_leaseDate'>
						<text class='lable_leaseDate'>租赁日期：</text>
						<text class='leaseDate'>2019-05-05</text>
					</view>
					<view class='pre_leaseDate'>
						<text class='lable_leaseDate'>归还日期：</text>
						<text class='leaseDate'>2019-05-05</text>
					</view>
					<view class='statue_orderList'>
					   <text class='lable_statue'>状态：</text>
					   <text class='text_statue'  v-if='!overtime'>未还</text>
					   <text class='text_statue'  v-if='overtime' style='color:#fb4343'>超时</text>
					</view>
				</view>
			</view>
			<view class='orderList'>
				<view class='left_orderList'>
					<text class='title_orderList'>贝特倍护全能王贝特倍</text>
				</view>
				<view class='right_orderList'>
					<view class='pre_money'>
						<text class='text_momey floatR'>200.00</text>
						<text class='text_money_dw floatR'>￥</text>
					</view>
				</view>
				<view class='leaseDateArea'>
					<view class='pre_leaseDate'>
						<text class='lable_leaseDate'>租赁日期：</text>
						<text class='leaseDate'>2019-05-05</text>
					</view>
					<view class='pre_leaseDate'>
						<text class='lable_leaseDate'>归还日期：</text>
						<text class='leaseDate'>2019-05-05</text>
					</view>
					<view class='statue_orderList'>
					   <text class='lable_statue'>状态：</text>
					   <text class='text_statue'  v-if='!overtime'>未还</text>
					   <text class='text_statue'  v-if='overtime' style='color:#fb4343'>超时</text>
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
				 textStatue:"#fb4343",
				 overtime:false,
			}
		},
		onLoad() {
			
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
		
	}
</script>

<style>
	.list_con{
		width:100%;
		height:auto;
	}
	.orderList{
		width:100%;
		height:auto;
		float:left;
		margin-top:1px;
		background:#fff;
		padding:3% 0 1% 0;
		border-bottom:solid 1px #efefef;
	}
	.left_orderList{
		width:67%;
		height:auto;
		float:left;
		margin-left:3%;
	}
	.right_orderList{
		width:25%;
		height:auto;
		float:left;
		margin-left:2%;
	}
	.title_orderList{
		width:100%;
		min-height:18px;
		float:left;
		margin-bottom:5px;
		font-size:1.1em;
		line-height:18px;
		font-weight:600;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.pre_leaseDate{
		width:65%;
		height:24px;
		float:left;
		color:#8e8d8d;
		text{
			width:auto;
			height:24px;
			line-height:24px;
			
		}
	}
	.statue_orderList{
		width:20%;
		height:24px;
		float:right;
		color:#8e8d8d;
		text-align: right;
		text{
			width:auto;
			height:24px;
			line-height:24px;
			
		}
	}
	.leaseDateArea{
		width:94%;
		height:auto;
		float:left;
		margin-left:3%;
	}
	
</style>
