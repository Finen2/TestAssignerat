<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <CombinedOutput :buttons="buttons" @excludedNum="numbers" />
    <EventButtons :buttons="buttons" @excludedNum="numbers" />
    <Groups :buttons="buttons" :indexNums="excludedNumbers" />
    <VideoInputs :buttons="buttons" @excludedNum="numbers" />
  </div>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="sass" src="./App.sass"></style>
