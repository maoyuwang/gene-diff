<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import DataPanel from "./components/DataPanel.vue";
import ResultPanel from "./components/ResultPanel.vue";
import "@fontsource/roboto-mono";
import './style.css'
</script>

<template>
  <div class="pure-g" style="margin-top: 10px">
  <NavBar/>
  </div>
  <div class="pure-g" style="margin: 10px 16px">
    <div class="pure-u-5-5">
      <DataPanel />
    </div>
  </div>
  <div class="pure-g" style="margin: 10px 16px">
    <div class="pure-u-5-5">
      <ResultPanel />
    </div>
  </div>

</template>

<style scoped>
</style>
