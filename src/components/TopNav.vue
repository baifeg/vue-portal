<template>
    <ul class="header_menu fl clearfix">
      	<li>
      		<v-link href="/" menu="index">首页</v-link>
		</li>
		<li>
			<v-link href="/estimate" menu="estimate">测评</v-link>
		</li>
		<li>
			<v-link href="/practice" menu="practice">实训</v-link>
		</li>
		<li>
			<v-link href="/project" menu="project">项目</v-link>
		</li>
		<li>
			<v-link href="/job" menu="job">求职</v-link>
		</li>
    </ul>
</template>

<script>
import VLink from "../components/VLink.vue";

export default {
  components: {
    VLink
  },
};
</script>
