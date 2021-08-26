import MemberList from '@/components/member/memberList'
import MemberClinicList from '@/components/member/memberClinicList'
import MemberFunctionDetail from '@/components/member/memberFunctionDetail'
import MemberInbodyDetail from '@/components/member/memberInbodyDetail'
import MemberMedicineDetail from '@/components/member/memberMedicineDetail'
import MemberCheckupDetail from '@/components/member/memberCheckupDetail'
import MemberInquiryList from '@/components/member/MemberInquiryList'
import Asid from '@/components/layout/Asid'
import axios from 'axios'

export default [
  {
    path: '/member/memberList',
    name: 'MemberList',
    components: {
      asid: Asid,
      default: MemberList
    }
  },
  {
    path: '/member/memberClinicList',
    name: 'MemberClinicList',
    components: {
      asid: Asid,
      default: MemberClinicList
    }
  },
  {
    path: '/member/memberFunctionDetail',
    name: 'MemberFunctionDetail',
    components: {
      asid: Asid,
      default: MemberFunctionDetail
    },
    beforeEnter: (to, from, next) => {
      if (from.name !== null) {
        var params = {
          memberId: from.query.memberId,
          careProgramId: 1
        }
        var res = axios.get(`/api/v1/api/checkupDetail/functionCheckupList`, { params: params })
        res.then(function (response) {
          if (response.data.status === 9999) {
            alert(response.data.message)
          } else {
            next()
          }
        })
      } else {
        next()
      }
    }
  },
  {
    path: '/member/memberInbodyDetail',
    name: 'MemberInbodyDetail',
    components: {
      asid: Asid,
      default: MemberInbodyDetail
    }
  },
  {
    path: '/member/memberMedicineDetail',
    name: 'MemberMedicineDetail',
    components: {
      asid: Asid,
      default: MemberMedicineDetail
    }
  },
  {
    path: '/member/memberCheckupDetail',
    name: 'MemberCheckupDetail',
    components: {
      asid: Asid,
      default: MemberCheckupDetail
    }
  },
  {
    path: '/member/memberInquiryList',
    name: 'MemberInquiryList',
    components: {
      asid: Asid,
      default: MemberInquiryList
    }
  }
]
