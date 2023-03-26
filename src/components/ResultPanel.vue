<template>

<div class="error-panel" v-if="errored">
  <aside><p>{{ log }}</p></aside>
</div>
<div v-if="result.length != 0" class="result-panel">
  <h3>Results: </h3>
  <!-- Display the count-->
  <pre>{{count}}</pre>
  <pre>{{lines}}</pre>
  <!-- Display the sequences with names -->
  <p v-for="(row, i) in result">
    <pre class="inline">{{names[i]}}</pre>
    <span v-for="(col, j) in result[i]" :class="{'diff': col === 0, 'same': col === 1}">
      {{sequences[i][j]}}
    </span>
  </p>
</div>
</template>

<script lang="ts" setup>
  import {useResultStore} from "../stores/result";
  import {useSequenceStore} from "../stores/sequence";
  import {storeToRefs} from "pinia";

  const {result,count,lines,names,errored,log} = storeToRefs(useResultStore())
  const {validate_sequences} = useResultStore()

  const {sequences} = storeToRefs(useSequenceStore())

</script>

<style scoped>
.result-panel{
  border: gray;
  padding: 2em;
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
pre.inline{
  display: inline;
}

aside {
	background: red;
	border-radius: 3px;
	color: #fff;
	padding: .3em 2em;
  margin: 1em 0;
}
</style>