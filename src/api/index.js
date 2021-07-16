import axios from 'axios'

const config = {
  baseUrl: 'api/v1/api'
}

// 진료 및 투약 이력
function fetchMedicineList (stringValue) {
  return axios.get(`${config.baseUrl}medicine/myMedicineList`,
    {
      prams: {
        endDate: '20200709',
        startDate: '20200409'
      }
    })
}

export {
  fetchMedicineList
}
