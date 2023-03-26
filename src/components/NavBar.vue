<template>
  <div class="pure-menu pure-menu-horizontal">
    <a href="#" class="pure-menu-heading pure-menu-link">Gene Diff Tool</a>
    <ul class="pure-menu-list">
      <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
        <a href="#" id="menuLink1" class="pure-menu-link">File</a>
        <ul class="pure-menu-children">
          <li class="pure-menu-item">
            <a href="#" class="pure-menu-link">Email</a>
          </li>
          <li class="pure-menu-item">
            <a href="#" class="pure-menu-link">Twitter</a>
          </li>
          <li class="pure-menu-item">
            <a href="#" class="pure-menu-link">Tumblr Blog</a>
          </li>
        </ul>
      </li>
      <li class="pure-menu-item">
        <a @click="newSequence()" class="pure-menu-link">Add Row</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useSequenceStore } from '../stores/sequence'
const { newSequence } = useSequenceStore()
</script>

<style scoped>
</style>