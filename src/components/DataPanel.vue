<template>
  <table class="pure-table pure-table-bordered full-width">
    <thead>
    <tr>
      <th style="width: 5%">#</th>
      <th style="width: 15%">Name</th>
      <th>Sequence</th>
      <th style="width: 25%">Action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(sequence, index) in sequences" :class="{'pure-table-odd': referenceIndex === index}">
      <td>{{index}}</td>
      <td>
        <input id="{{index}}" v-model="sequenceNames[index]" @change="reset_result()" style="width: 100%"/>
      </td>
      <td>
        <input id="{{index}}" v-model="sequences[index]" @change="reset_result()" style="width: 100%"/>
      </td>
      <td>
        <div class="pure-button-group" role="group">
          <button class="button-success pure-button" @click="setReference(index)"><fa :icon="['fas', 'check']" /></button>
          <button class="button-error pure-button"  @click="deleteSequence(index)"><fa :icon="['fas', 'trash']" /></button>
          <button class="pure-button"  @click="moveUp(index)"><fa :icon="['fas', 'arrow-up']" /></button>
          <button class="pure-button"  @click="moveDown(index)"><fa :icon="['fas', 'arrow-down']" /></button>
        </div>

      </td>
    </tr>
    </tbody>
  </table>
  <button style="margin-top: 10px" class="pure-button-primary pure-button full-width" @click="calculate()"><fa :icon="['fas', 'circle-play']" /> Run</button>

</template>

<script setup lang="ts">
import { useSequenceStore } from '../stores/sequence'
import { storeToRefs } from 'pinia'
import {useResultStore} from "../stores/result";
const { referenceIndex,sequences,sequenceNames } = storeToRefs(useSequenceStore())
const { setReference,deleteSequence,moveDown,moveUp } = useSequenceStore()
const { calculate,reset_result } = useResultStore()

</script>

<style scoped>
.pure-table-odd td{
  background-color: darkseagreen;
}
table {
  font-family: "Roboto Mono",monospace;
}
</style>