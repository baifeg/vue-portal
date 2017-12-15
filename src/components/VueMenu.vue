<template>
<li>
<a href="javascript:;" @click="mianClick($event, itemKey)" :class="{menus_main:true,menus_mainOn:mainOn}">
	<i :class="item.cssClass" aria-hidden="true"></i>
	{{item.label}}
</a>
<div v-if="item.children" class="menus_sub" :style="getStyle(itemKey)">
	<template v-for="(subItem, subKey) in item.children">
		<router-link :to="subItem.path" :class="{menus_subOn:isActive(expend(itemKey,subKey))}"  @click="subClick($event)">
			<i class="fa fa-angle-right" aria-hidden="true"></i>
			{{subItem.label}}
		</router-link>
	</template>
</div>
</li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    itemKey: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      mainOn: false
    };
  },
  methods: {
    getStyle: function(path) {
      if (this.$root.currentRoute.startsWith(path))
        return "overflow: hidden; display: block;";
    },
    isActive: function(href) {
      var on = this.$root.currentRoute.startsWith(href);
      this.mainOn = this.mainOn || on;
      return on;
    },
    expend: function(prefix, suffix) {
      return (prefix + "/" + suffix).replace("/$", "");
    },
    mianClick: function(event, itemKey) {
      if (itemKey != "menuFlag") this.$router.push({ path: itemKey });
      var target = $(event.target);
      $(".menusList li a.menus_main").removeClass("menus_mainOn");
      target.addClass("menus_mainOn");
      var iclass = target.attr("class");

      if (iclass == "current") {
        target.next().slideUp();
      } else {
        target
          .addClass("current")
          .next()
          .slideDown()
          .parent()
          .siblings()
          .children("a")
          .removeClass("current")
          .next()
          .slideUp();
        return false;
      }
    },
    subClick: function(event) {
      $(".menus_sub a").removeClass("menus_subOn");
      $(event.target).addClass("menus_subOn");
    }
  }
};
</script>