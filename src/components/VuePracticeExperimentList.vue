<template>
	<div>
		<table class="table tableList"><!-- if you want a grid table, please add ClassName "tableGrid" -->
			<thead>
				<tr>
					<td>实验名称</td>
					<td>实验时长</td>
					<td>难度</td>
					<td>状态</td>
					<td>实训报告</td>
					<td>操作</td>
				</tr>
			</thead>
			<tbody>
				<template v-for="item in filteredValues">
					<tr>
						<td>
							<a href="#">{{item.name}}</a>
						</td>
						<td>{{item.minutes}}分钟	</td>
						<td>
							<template v-if="item.difficulty == 'SIMPLE'">初级</template>
							<template v-if="item.difficulty == 'MEDIUM'">中级</template>
							<template v-if="item.difficulty == 'ADVANCED'">高级</template>
						</td>
						<td>
							<span class="active">
								<template v-if="item.userExperiment">
									<template v-if="item.userExperiment.status == 'LEARNING'">进行中</template>
									<template v-else-if="item.userExperiment.status == 'PENDING_LEARN'">未开始</template>
									<template v-else-if="item.userExperiment.status == 'LEARNED'">已结束</template>
									<template v-else="item.userExperiment.status == 'NEW'">未激活</template>
								</template>
								<template v-else>
									进行中
								</template>
							</span>
						</td>
						<td>
							<button title="编辑"  @click="editReport(item.userExperiment.id,item.userExperiment.reportContent)"><i class="fa fa-file-pdf-o fa-lg" aria-hidden="true"></i></button>
						</td>
						<td>
							<template v-if="item.userExperiment.status === 'LEARNING' || item.userExperiment.status === 'PENDING_LEARN'">
								<button title="开始实验" @click="startExperiment(item.userExperiment.id)"><i class="fa fa-desktop fa-lg" aria-hidden="true"></i></button>
							</template>
							<template v-else>--</template>
						</td>
					</tr>
				</template>
			</tbody>
		</table>
		
		<!-- 分页 -->
		<div class="pages clearfix">
			<pagination ref="pagination" 
				@current-page="updateCurrentPage" 
			></pagination>
		</div>
		<div id="content" v-show=false>
			<textarea id="editor"></textarea>
			<input type="hidden" id="userExperimentId"/>
			<button class="blueBtn position" @click="submit()" >提交</button>
		</div> 
	</div>
	
</template>
<style scoped>
.position{border-color:#DDDDDD;background-color:#DDDDDD;}
</style>
<script>
import VueListBase from './VueListBase.vue';
import studentPracticeService from '../api/studentPracticeService';
import vmService from '../api/vmService';
import pagination from './Pagination';
import http from '../config/http';
export default {
	mixins: [VueListBase],
	components: {
		pagination
	},
	data:function(){
		return{
			index : 0,
			content : ''
		}
	},
	methods:{
		editReport:function(userExperimentId,reportConent){
		
			$("#editor").val(reportConent);
	 		layer.open({
			  title: "编辑实验报告",
			  type: 1,
			  closeBtn:1,
			  shadeClose: true,
		      shade: false,
		      maxmin: true, //开启最大化最小化按钮
			  skin: 'layui-layer-rim', //加上边框
			  area: ['800px', '416px'], //宽高
			  content: $('#content'),
			  end: function () {
	           	$("#content").hide();
	           }
			}); 

			layui.use('layedit', function(){
			  var layedit = layui.layedit;
			  layedit.set({
                  uploadImage: {
                       url: `${http.gwApiPrefix}/api/scapi/zhisuLayeditUploadFile` //接口url
                      ,type: 'post' //默认post
                  }
              });
			  var index = layedit.build('editor'); //建立编辑器
			  this.index = index;
			});
			$("#userExperimentId").val(userExperimentId);
		},
		submit:function(){
			const userExperimentId = $("#userExperimentId").val();
			var content = "";
			layui.use('layedit', function(){
				var layedit = layui.layedit;
				content = layui.layedit.getContent(this.index);
			});
			const data = {
				userExperimentId : userExperimentId,
				reportContent : content
			}
			const self = this;
			studentPracticeService.addExperimentReport(data).then(response =>{
				//操作成功
				if(response.data.code == 0){
					layer.closeAll();
					location.reload() ;
				}else{
				}
			});
		},
		startExperiment: function(userExperimentId) {
			var self = this;
			vmService.startExperiment(userExperimentId).then(res => {
				if(res.data.code != "0") {
					self.$pop.error(res.data.message);
					return;
				};
				var tokens = res.data.object.split(',');
				var url = "/desktop.html?id=" + userExperimentId;
				for(var i in tokens) {
					if(tokens[i]) {
						url += '&token=' + tokens[i];
					}
				}
				window.open(url, 'myExperiment' + userExperimentId);
			})
		}
	}, 
	watch: {
    	filteredSize: function() {
    		this.$refs.pagination.initCount(this.filteredSize, this.pageSize);
    	}
    }
}
</script>