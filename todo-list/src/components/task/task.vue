<template>
  <span v-bind:class="{ closed: closed }">
    {{label}}
    <input type="checkbox" v-model="closed"/>
  </span>
</template>

<script src="./task.js"></script>
<style src="./task.css"></style>
