import { triggerButton } from '@/function/Trigger'

export default {
  name: 'videoInputs',
  data: () => ({
    videoButtons : {}
  }),
  props: {
    buttons : {}
  },
  methods: {
    clickEvent(triggerId: any){
      triggerButton(triggerId)
    }
  },
  created(this: any){
    const index = this.buttons.map((element: any) => element.ButtonText).indexOf("Video Inputs")
    this.videoButtons = this.buttons[index]
  },
}
