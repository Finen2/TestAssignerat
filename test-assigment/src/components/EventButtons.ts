import { triggerButton } from '@/function/Trigger'

export default {
  name: 'EventButtons',
  data: () => ({
    eventButtons : {}
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
    const index = this.buttons.map((element: any) => element.ButtonText).indexOf("Event buttons")
    this.eventButtons = this.buttons[index]
  },
}
