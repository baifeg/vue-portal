<template>
  <a
    v-bind:href="href"
    v-bind:class="{ on: isActive }"
    v-on:click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
  import routes from '../config/routes'

  export default {
    props: {
      href: {
        type:String,
        required: true 
      },
      menu: String,
    },
    computed: {
      isActive () {
    	  if(this.$route.meta.topMenu)
    	  	return this.$route.meta.topMenu === this.menu;
    	  else
    		return false;
      }
    },
    methods: {
      go (event) {
       	event.preventDefault()
        this.$root.currentRoute = this.href;
        this.$router.push(this.href);
      }
    }
  }
</script>
