export default {
  name: 'videoInputs',
  data: () => ({
    videoButtons : {}
  }),
  props: {
    buttons : {}
  },
  created(this: any){
    const index = this.buttons.map((element: any) => element.ButtonText).indexOf("Video Inputs")
    this.videoButtons = this.buttons[index]
    this.$emit('excludedNum', index)
  },
}
