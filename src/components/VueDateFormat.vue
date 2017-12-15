<template>
  <!-- 过滤器 -->
  <span>{{time | formatDate}}</span>
  <!-- 输出结果 -->
  <!-- <div>2016-07-23 21:52</div> -->
</template>
<script>
import {formatDate} from '../utils/dateFormat.js';
export default {
 props:{
	 time: {
			type: Number,
			required: true,
		}
 },
  data() {
    return {
      
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }
  }
}
</script>