/**
 * 起動確認
 * @return {=>}
 */
const test = () => {
  console.log('ok')
}
test()

const alpineData = {
  data: mode !== 'prod' ? dummyData : '___DATA___',
  isOpen: false,
  toggle() {
    console.log('firefire')
    this.isOpen = !this.isOpen
  },
}

const doScript = (scriptName, args) => {
  args = JSON.stringify(args)
  if (mode != 'prod') {
    console.log(args)
  } else {
    FileMaker.PerformScriptWithOption(scriptName, args, 0)
  }
}
