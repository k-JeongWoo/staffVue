import Asid from '@/components/layout/Asid'
import StaffDetail from '@/components/mypage/StaffDetail'

export default [
  {
    path: '/mypage/StaffDetail',
    name: 'StaffDetail',
    components: {
      asid: Asid,
      default: StaffDetail
    }
  }
]
