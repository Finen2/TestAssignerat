export default {
  name: 'EventButtons',
  data: () => ({
    eventButtons : {}
  }),
  props: {
    buttons : {}
  },
  created(this: any){
    const index = this.buttons.map((element: any) => element.ButtonText).indexOf("Event buttons")
    this.eventButtons = this.buttons[index]
    this.$emit('excludedNum', index)
  },
}
