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
}

const convData = (data) => {
  return data.map((record) => {
    const fieldData = record.fieldData
    return {
      id: fieldData.id,
      employee_name: fieldData.employee_name,
      employee_salary: fieldData.employee_salary,
      employee_age: fieldData.employee_age,
      profile_image: fieldData.profile_image,
    }
  })
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
