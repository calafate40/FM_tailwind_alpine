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
  init() {
    this.data = convData(data)
  },
  sortFlg: false,
  toggleFlag() {
    this.sortFlg = !this.sortFlg
  },
  get sortCard() {
    if (this.data) {
      if (this.sortFlg) {
        return this.data.sort((a, b) => a.employee_salary - b.employee_salary)
      } else {
        return this.data.sort((a, b) => b.employee_salary - a.employee_salary)
      }
    }
  },
  showCard(id) {
    doScript('showCard', id, 0)
  },
}

const convData = (data) => {
  return data.map((e) => e.fieldData)
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
