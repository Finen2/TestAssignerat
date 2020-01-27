import { triggerButton } from '@/function/Trigger';

export default {
  name: 'combinedOutput',
  data: () => ({
    combinedOutputButtons : {},
  }),
  props: {
    buttons : {},
  },
  methods: {
    clickEvent(triggerId: any){
      triggerButton(triggerId);
    }
  },
  created(this: any){
    const index = this.buttons.map((element: any) => element.ButtonText).indexOf("Combined output");
    this.combinedOutputButtons = this.buttons[index];
  },
}
