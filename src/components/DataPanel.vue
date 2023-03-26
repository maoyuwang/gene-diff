<template>
  <table class="pure-table pure-table-bordered full-width">
    <thead>
    <tr>
      <th style="width: 5%">#</th>
      <th>Sequence</th>
      <th style="width: 25%">Action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(sequence, index) in sequences" :class="{'pure-table-odd': referenceIndex === index}">
      <td>{{index}}</td>
      <td>
        <input id="{{index}}" v-model="sequences[index]" style="width: 100%"/>
      </td>
      <td>
        <div class="pure-g">
          <div class="pure-u-1-2">
            <button class="button-success pure-button full-width" @click="setReference(index)">Reference</button>
          </div>
          <div class="pure-u-1-2">
            <button class="button-error pure-button full-width"  @click="deleteSequence(index)">Delete</button>
          </div>
        </div>

      </td>
    </tr>
    </tbody>
  </table>
  <button style="margin-top: 10px" class="pure-button-primary pure-button full-width" @click="validate() && calculate()">Run</button>

</template>

<script setup lang="ts">
import { useSequenceStore } from '../stores/sequence'
import { storeToRefs } from 'pinia'
import {useResultStore} from "../stores/result";
const { referenceIndex,sequences } = storeToRefs(useSequenceStore())
const { setReference,deleteSequence } = useSequenceStore()
const { validate, calculate } = useResultStore()

</script>

<style scoped>
.pure-table-odd td{
  background-color: darkseagreen;
}
table {
  font-family: "Roboto Mono",monospace;
}
</style>