<template lang="html">
  <b-card no-body bg-variant="dark" header="Video Inputs" text-variant="white" class="videoInputs">
    <b-card-body class="flex-space-evenly-center videoInputs__body">
      <div v-for="btn in videoButtons.Buttons" :key="btn.QuickButtonGroupOid">
        <b-button variant="success" v-on:click="clickEvent(btn.TriggerId)">{{btn.ButtonText}}</b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script lng="ts" src="./VideoInputs.ts"></script>
<style lang="sass" src="./VideoInputs.sass"></style>
