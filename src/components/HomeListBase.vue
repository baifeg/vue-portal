<script>
export default {
	mounted: function() {
		this.$on('addListFilterEvent', function(filter, item) {
			this.selected.push({
				filterName: filter.name,
				filterValue: item.Value,
				label: filter.label + '：' + item.Text
			})
		});
		this.$on('clearListFilterEvent', function(filter) {
			var temp = [];
			for(var i in this.selected) {
				if(this.selected[i].filterName !== filter.name)
					temp.push(this.selectd[i]);
			}
			this.selected = temp;
		});
		this.$on('ajaxLoadingError', function(error) {
			console.log(error);
			this.$pop.error("加载数据失败！");
		})
	},
	methods: {
		removeFilter: function(item) {
			var index = this.selected.indexOf(item);
			if(index > -1) {
				this.$emit('removeListFilterEvent', item);
				this.selected.splice(index, 1);				
			}
		},
		search: function() {
			this.$refs.list0.$emit('searchFormSubmitEvent');
		}
	}
}
</script>