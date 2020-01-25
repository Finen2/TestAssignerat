<template lang="html">
  <b-card bg-variant="dark" header="Event Buttons" text-variant="white" class="eventButtons">
    <div v-for="btn in eventButtons.Buttons" :key="btn.QuickButtonGroupOid">
      <b-button variant="light" v-on:click="clickEvent(btn.TriggerId)">{{btn.ButtonText}}</b-button>
    </div>
  </b-card>
</template>

<script lang="ts" src="./EventButtons.ts"></script>
<style lang="sass" src="./EventButtons.sass"></style>
