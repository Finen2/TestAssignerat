<template lang="html">
  <b-card bg-variant="dark" header="Gruops" text-variant="white" class="groups">
    <div class="container" v-for="head in groupsButtons" :key="head.QuickButtonGroupOid">
      <div class="container__header">
        <h5>{{head.ButtonText}}</h5>
      </div>
      <div class="container__body" v-for="btn in head.Buttons" :key="btn.QuickButtonOid">
        <b-link class="container__body--light" v-on:click="clickEvent(btn.TriggerId)">{{btn.ButtonText}}</b-link>
      </div>
    </div>
  </b-card>
</template>

<script lang="ts" src="./Groups.ts"></script>
<style lang="sass" src="./Groups.sass"></style>
