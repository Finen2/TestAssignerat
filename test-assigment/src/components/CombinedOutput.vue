<template lang="html">
  <b-card bg-variant="dark" header="Combined Output" text-variant="white" class="combinedOutput">
    <div v-for="btn in combinedOutputButtons.Buttons" :key="btn.QuickButtonGroupOid">
      <b-button variant="warning" v-on:click="clickEvent(btn.TriggerId)">{{btn.ButtonText}}</b-button>
    </div>
  </b-card>
</template>

<script lang="ts" src="./CombinedOutput.ts"></script>
<style lang="sass" src="./CombinedOutput.sass"></style>
