<template>
  <h2>Results: </h2>
<div class="result-panel">
  <!-- Display the count-->
  <pre>{{count}}</pre>
  <pre>{{lines}}</pre>
  <!-- Display the sequences -->
  <p v-for="(row, i) in result">
    <span v-for="(col, j) in result[i]" :class="{'diff': col === 0, 'same': col === 1}">
      {{sequences[i][j]}}
    </span>
  </p>
</div>
</template>

<script>

export default {
  name: "ResultPanel"
}
</script>

<script setup>
  import {useResultStore} from "../stores/result";
  import {useSequenceStore} from "../stores/sequence";
  import {storeToRefs} from "pinia";

  const {result,count,lines} = storeToRefs(useResultStore())
  const {sequences} = storeToRefs(useSequenceStore())

</script>

<style scoped>
.result-panel{
  border: gray;
  border-width: 2px;
  border-style: solid;
  font-family: "Roboto Mono",monospace;
}
.same{
  color: red;
}
.diff{
  color: darkblue;
}
p{
  margin: 0
}
pre{
  margin: 0;
}
</style>