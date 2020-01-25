<template>
  <div class="flex-default app">
    <Groups class="app__gruops" :buttons="buttons" />
    <div class="flex-default app__buttons">
      <CombinedOutput :buttons="buttons" />
      <EventButtons :buttons="buttons" />
      <VideoInputs :buttons="buttons" />
    </div>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="sass" src="./App.sass"></style>
