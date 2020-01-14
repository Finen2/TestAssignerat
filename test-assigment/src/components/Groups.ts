export default {
  name: 'Groups',
  data: () => ({
    groupsButtons : [],
    sortArray : []
  }),
  props: {
    buttons : {},
    indexNums : {},
  },
  updated(this: any){
    this.indexNums.forEach((index: any) => {
      this.sortArray.push(this.buttons[index])
    });
    this.groupsButtons = this.buttons.filter((obj: any) => {
      return this.sortArray.indexOf(obj) == -1;
    });
    console.log(this.groupsButtons)
  },
}
