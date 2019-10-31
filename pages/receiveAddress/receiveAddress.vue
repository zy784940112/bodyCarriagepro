<template>
	<view>
		<view class="uni-status-bar example-body" >
			<uni-nav-bar left-icon="back"  right-text="保存" title="送货地址" titleColor="#222" rightTextColor="#fb9741" backgroundColor="rgba(255,255,255)" @click-left="back"  @click-right="saveadress"></uni-nav-bar>
		</view>
		<view class='center_address'>
			<view class="input-row border pre_inp">
			    <text class="title">用户名</text>
				<view class='pre_is-input1'>
			       <input type="text" minlength='0' maxlength="4" clearable focus v-model="login.username" placeholder="请输入用户名" @input="onKeyUserNameInput" @blur="blurUserName" class="is-input1 " />  
			    </view>
			</view>
			<view class="input-row border pre_inp">
			    <text class="title">手机号码</text>
				<view class='pre_is-input1'>
			        <input type="text" minlength='0' maxlength="11" clearable focus v-model="login.phone" placeholder="请输入手机号码" @input="onKeyPhoneInput"  @blur="blurPhone" class="is-input1 " />    
			    </view>
			</view>
			<view class="input-row border pre_inp">
			    <text class="title">所在地</text>
				<view class='pre_is-input1'>
			       <input type="text" minlength='0' clearable focus v-model="login.location" placeholder="请输入所在地" @input="onKeyLocationInput" class="is-input1 " />   
			    </view>
			</view>
			<view class="input-row border last_ipn">
			    <text class="title">详细地址</text>
				<view class='pre_is-input1'>
					<textarea   cols="2"    style="OVERFLOW:   hidden" minlength='0' placeholder-style="color:#d9d9d9;line-height:50px;" clearable focus v-model="login.address" placeholder="请输入详细地址" @input="onKeyAddressInput" class="is-input2"></textarea>
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
				  login: {  
					    userName:"",
						phone: "",  
						location: "",  
						address:"",
					},  
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
			saveadress(){
				var regPhone= /^[1][3,4,5,7,8][0-9]{9}$/;//验证手机号
				//验证姓名非空
				if ((this.username=="")||(this.username==undefined)||(this.username==null)) {
				    uni.showToast({
				        icon: 'none',
				        title: '请输入姓名'
				    });
				    return;
				}
				//验证手机号
				if ((this.phone=="")||(this.phone==undefined)||(this.phone==null)) {
				    uni.showToast({
				        icon: 'none',
				        title: '请输入手机号'
				    });
				    return;
				}else if(!regPhone.test(this.phone)){
					uni.showToast({
					    icon: 'none',
					    title: '请输入正确格式的手机号'
					});
					return;
				}
				//验证所在地非空
				if ((this.location=="")||(this.location==undefined)||(this.location==null)) {
				    uni.showToast({
				        icon: 'none',
				        title: '请输入手机号'
				    });
				    return;
				}
				//验证详细地址非空
				if ((this.address=="")||(this.address==undefined)||(this.address==null)) {
				    uni.showToast({
				        icon: 'none',
				        title: '请输入手机号'
				    });
				    return;
				}
			},
			onKeyUserNameInput: function(event) {  
				this.username = event.target.value;//输入时出发@input事件 获取输入值
			},
			onKeyPhoneInput:function(event){
				this.phone = event.target.value;
			},
			onKeyLocationInput:function(event){
				this.location = event.target.value 
			},
			onKeyAddressInput:function(event){
				this.address = event.target.value 
			},
			blurUserName:function(event){
				this.username = event.target.value;//失去焦点时出发@blur事件
				//console.log(this.username);
			},
			blurPhone:function(event){
				this.phone = event.target.value;
				//console.log(this.phone);
			}
		}
		
	}
</script>

<style>
	.example-body{
		background:#fff;
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
	.center_address{
		width:100%;
		height:auto;
		display:block;
		float:left;
		padding:0 3%;
		margin-top:45px;
		background:#fff;
	}
	.pre_inp{
		width:100%;
		height:50px;
		float:left;
		border-bottom:solid 1px #efefef;
		
	}
	.last_ipn{
		width:100%;
		min-height:50px;
		float:left;
		
		margin-top:15px;
	}
	text{
		height:50px;
		line-height:50px;
		width:22%;
		float:left;
		color:#8c8c8c;
		
	}
	.pre_is-input1{
		height:50px;
		line-height:50px;
		width:78%;
		float:Left;
	}
	.is-input1{
		height:50px;
		line-height:50px;
		
	}
	.is-input2{
		min-height:50px;
		line-height:22px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.uni-input-placeholder,
	.uni-textarea-placeholder{
		height:50px;
		line-height:50px;
		color:#d9d9d9;
	}
	
</style>
