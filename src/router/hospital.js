import HospitalHome from '@/components/hospital/hospitalHome'
import Asid from '@/components/layout/Asid'

export default [
  {
    path: '/hospital/hospitalHome',
    name: 'HospitalHome',
    components: {
      asid: Asid,
      default: HospitalHome
    }
  }
]
