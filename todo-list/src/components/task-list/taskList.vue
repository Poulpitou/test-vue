<template>
  <div>
    <input/>
    <button>Add</button>
    <ul>
      <li v-for="task in tasks">
      <task v-bind:label="task.label" v-bind:closed="task.closed"/>
      </li>
    </ul>
  </div>
</template>

<script src="./taskList.js"></script>
<style src="./taskList.css"></style>
