import CombinedOutput from '@/components/CombinedOutput.vue'
import EventButtons from '@/components/EventButtons.vue'
import Groups from '@/components/Groups.vue'
import VideoInputs from '@/components/VideoInputs.vue'
import { getButtons } from '@/data/getButtons'

export default {
  name: 'app',
  components: {
    CombinedOutput,
    EventButtons,
    Groups,
    VideoInputs
  },
  data: () => ({
    buttons : {},
    excludedNumbers: []
  }),
  methods: {
    numbers(this: any, number: number){
      this.excludedNumbers.push(number)
    }
  },
  created(this: any){
    this.buttons = getButtons()
  }
}
