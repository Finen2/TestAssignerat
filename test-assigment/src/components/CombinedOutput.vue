<template lang="html">
  <b-card no-body bg-variant="dark" header="Combined Output" text-variant="white" class="combinedOutput">
    <b-card-body class="flex-coloumn-space-evenly-center">
      <div v-for="btn in combinedOutputButtons.Buttons" :key="btn.QuickButtonGroupOid">
        <b-button variant="light" v-on:click="clickEvent(btn.TriggerId)">{{btn.ButtonText}}</b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" src="./CombinedOutput.ts"></script>
<style lang="sass" src="./CombinedOutput.sass"></style>
