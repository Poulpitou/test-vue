<template>
  <div>
    <input v-model="inputLabel" v-on:keyup.enter="addTask"/>
    <button v-on:click="addTask">Add</button>
    <ol>
      <li v-for="(task, index) in tasks">
        <task v-bind:label="task.label" v-bind:closed="task.closed" />
        <button v-on:click="deleteTask(index)">Delete</button>
        <button v-on:click="upTask(index)">Up</button>
        <button v-on:click="downTask(index)">Down</button>
      </li>
    </ol>
  </div>
</template>

<script src="./taskList.js"></script>
<style src="./taskList.css"></style>
