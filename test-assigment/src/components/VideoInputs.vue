<template lang="html">
  <b-card bg-variant="dark" header="Video Inputs" text-variant="white" class="flex-coloumn-space-evenly-center videoInputs">
    <div v-for="btn in videoButtons.Buttons"  class="videoInputs__buttons" :key="btn.QuickButtonGroupOid">
      <b-button variant="secondary" v-on:click="clickEvent(btn.TriggerId)">{{btn.ButtonText}}</b-button>
    </div>
  </b-card>
</template>

<script lng="ts" src="./VideoInputs.ts"></script>
<style lang="sass" src="./VideoInputs.sass"></style>
