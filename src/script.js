/**
 * 起動確認
 * @return {=>}
 */
const test = () => {
  console.log('ok')
}
test()

const alpineData = {
  data: '',
  isOpen: false,
  toggle() {
    console.log('toggle fire')
    this.isOpen = !this.isOpen
  },
  init() {
    this.data = data
  },
}

const doScript = (scriptName, args, optionNum) => {
  if (!optionNum) optionNum = 0
  args = JSON.stringify(args)
  if (mode != 'prod') {
    console.log(args)
  } else {
    FileMaker.PerformScriptWithOption(scriptName, args, optionNum)
  }
}
