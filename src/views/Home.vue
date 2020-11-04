<template>
  <div class="home">
    <img alt="Vue logo" src="~@img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@c/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private mounted() {
    console.log(this.$store.getters);
  }
}
</script>
