export default {
  name: 'combinedOutput',
  data: () => ({
    combinedOutputButtons : {}
  }),
  props: {
    buttons : {}
  },
  created(this: any){
    const index = this.buttons.map((element: any) => element.ButtonText).indexOf("Combined output")
    this.combinedOutputButtons = this.buttons[index]
    this.$emit('excludedNum', index)
  },
}
