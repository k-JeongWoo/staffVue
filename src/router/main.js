import Index from '@/components/Index'
import MainHome from '@/components/main/mainHome'
import InquiryDetail from '@/components/main/inquiryDetail'
import PdfView from '@/components/pdfview'
import Asid from '@/components/layout/Asid'
import axios from 'axios'

export default [
  {
    path: '/',
    name: 'Index',
    components: {
      default: Index
    },
    beforeEnter: (to, from, next) => {
      next('/mainhome')
    }
  },
  {
    path: '/login',
    name: 'Login',
    components: {
      default: Index
    }
  },
  {
    path: '/mainhome',
    name: 'MainHome',
    components: {
      asid: Asid,
      default: MainHome
    },
    children: [
      {
        path: '',
        component: InquiryDetail,
        props: true
      },
      {
        path: 'inquiryDetail',
        component: InquiryDetail,
        props: true
      }
    ],
    beforeEnter: (to, from, next) => {
      axios.get('/api/v1/api/emplystaff/emplystaffInfo')
        .then(function (response) {
          // console.log(response)
          if (response.data.resultCode === 'error') {
            next('/login')
          } else {
            next()
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    props: true
  },
  {
    path: '/pdfviewpopup',
    name: 'pdfview',
    component: PdfView
  }
]
