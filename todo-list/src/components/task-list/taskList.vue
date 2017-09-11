<template>
  <ul id="Todo">
    <li v-for="task in tasks">
    <task v-bind:label="tasks.label"/>
    </li>
  </ul>
</template>

<script src="./taskList.js"></script>
<style src="./taskList.css"></style>
