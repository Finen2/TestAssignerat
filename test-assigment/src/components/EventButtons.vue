<template lang="html">
  <b-card no-body bg-variant="dark" header="Event Buttons" text-variant="white" class="eventButtons">
    <b-card-body class="flex-coloumn-space-evenly-center">
      <div v-for="btn in eventButtons.Buttons" :key="btn.QuickButtonGroupOid">
        <b-button variant="warning" v-on:click="clickEvent(btn.TriggerId)">{{btn.ButtonText}}</b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" src="./EventButtons.ts"></script>
<style lang="sass" src="./EventButtons.sass"></style>
