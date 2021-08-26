// 휴대전화번호 포맷
import dayjs from 'dayjs'

const neoMethod = {
  'phoneFomatter': function (num) {
    var formatNum = ''
    if (num.length === 11) {
      formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
    } else if (num.length === 8) {
      formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2')
    } else {
      if (num.indexOf('02') === 0) {
        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3')
      } else {
        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      }
    }

    var phoneRule = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/
    if (!phoneRule.test(formatNum)) {
      formatNum = 'error'
    }
    return formatNum
  },
  'dateFomatter': function (str) {
    return dayjs(String(str)).format('YYYY-MM-DD')
  },
  'ageConvert': function (str) {
    const today = new Date()
    const getDate = dayjs(String(str)).format('YYYY')
    return today.getFullYear() - getDate
  }
}

export {
  neoMethod
}
