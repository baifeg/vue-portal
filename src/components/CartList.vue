<template>
	<div class="shopping">
		<table class="layui-form" width="100%">
			<thead>
				<tr>
					<th width="54%" style="padding-left:17px;">商品名称</th>
					<th width="14%">原价</th>
					<th width="13%">现价</th>
					<th width="6%">操作</th>
				</tr>
			</thead>
			<tbody>
				<template v-for="(item,index) in filteredValues">
					<tr class="tr-normal"> 
						<td v-show=false></td>
						<td>
							<sftp-img :src="item.image"/>{{item.title}}
						</td>
						<td class="original">￥{{item.price}}</td>
						<td class="current-price">￥{{item.promotePrice}}</td>
						<h1 v-show=false>{{goodsIds[index] = item.goodsId}}</h1>
						<h1 v-show=false>{{nums[index] = item.num}}</h1>
						<td><i class="iconfont icon-delete" @click="remove(index)"></i></td>
					</tr>
				</template>
			</tbody>
		</table>
		<div class="options clearfix">
			<ul class="clearfix fr ul-2">
				<li class="li-2">总价：<span>￥{{totalPrice}}</span></li>
				<li class="li-3" @click="submit()"><b>去结算</b></li>
			</ul>
		</div>
	</div>
</template>
<script>
    import axios from 'axios';
    import VueListBase from './VueListBase';
    import tradeService from '../api/tradeService';
    import SftpImg from './SftpImg';
    export default {
        name: "CartList",
        mixins: [VueListBase],
        components: {
        	SftpImg,
        },
        data: function () {
            return {
            	goodsIds:[],
            	nums:[]
            };
        },
        methods:{
        	remove : function(index){
        		//操作数据库删除购物车
        		tradeService.deleteCart(this.filteredValues[index].id).then(response =>{
        			
        		});
            	this.filteredValues.splice(index,1)
        		
        	},
        	submit : function(){
        		//确认下单
        		const data = {
        				'goodsIds' : this.goodsIds.join(","),
                    	'nums' : this.nums.join(",")
        		}
        		var self = this;
        		tradeService.submit(data).then(function(response){
        			const orderIds = response.data.object;
        			self.$router.push({ path: "/trade/pay/"+orderIds});
        		});
        	}
        },
        computed:{
        	totalPrice:function(){
        		var totalPrice = 0;
        		for(var i=0;i<this.filteredValues.length;i++){
        			totalPrice += this.filteredValues[i].num * this.filteredValues[i].promotePrice;
        		}
        		return  parseFloat(totalPrice.toFixed(2)); ;
        	}
        }
    }
</script>