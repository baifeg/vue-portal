<template>
   <div id="pagination" :style="{'text-align': align}">

   </div>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
      limit: 10
    };
  },
  props: {
	  layout: {
		  type: Array,
		  default: () => ['prev', 'page', 'next'],
	  },
	  align: {
		  type: String,
		  default: 'center',
	  }
  },
  methods: {
    initCount: function(count, limit) {
      let self = this;
      layui.use("laypage", function() {
        var laypage = layui.laypage;
        //执行一个laypage实例
        laypage.render({
          elem: "pagination",
          count: count,
          limit: limit,
          theme: "#1E9FFF",
          layout: self.layout,
          jump: function(obj) {
            //console.log(obj);
            self.$emit("current-page", obj.curr);
            self.$emit("update-limit", obj.limit);
          }
        });
      });
    },
    updateCount: function(count) {
      this.count = count;
    }
  },
  mounted: function() {},
  watch: {
    count: function() {
      this.initCount(this.count, this.limit);
    }
  }
};
</script>


