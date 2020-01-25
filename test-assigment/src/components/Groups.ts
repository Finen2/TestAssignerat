import { triggerButton } from '@/function/Trigger'

export default {
  name: 'Groups',
  data: () => ({
    groupsButtons : {},
  }),
  props: {
    buttons : {},
  },
  methods: {
     excludeValues(this: any, identifier: string){
       const index = this.groupsButtons.map((element: any) => element.ButtonText).indexOf(identifier)
       if(index > -1) this.groupsButtons.splice(index, 1)
     },
     clickEvent(triggerId: any){
       triggerButton(triggerId)
     }
  },
  created(this: any){
    this.groupsButtons = JSON.parse(JSON.stringify(this.buttons));
    this.excludeValues("Video Inputs");
    this.excludeValues("Event buttons");
    this.excludeValues("Combined output");
    console.log(this.groupsButtons)
  }
}
