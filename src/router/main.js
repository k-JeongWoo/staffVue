import Index from '@/components/Index'
import MainHome from '@/components/main/mainHome'
import InquiryDetail from '@/components/main/inquiryDetail'
import PdfView from '@/components/pdfview'
import PatientDetailCheckup from '@/components/patient/patientDetailCheckup'
import Asid from '@/components/layout/Asid'
// import Menu from '@/components/layout/LeftMenu'
// import Footer from '@/components/layout/Footer'
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
      // header: Header,
      default: Index
      // leftMenu: Menu,
      // footer: Footer
    }
  },
  {
    path: '/mainhome',
    name: 'MainHome',
    components: {
      asid: Asid,
      default: MainHome
      // leftMenu: Menu,
      // footer: Footer
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
          console.log(response)
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
  },
  {
    path: '/patient/patientDetailCheckup',
    name: 'patientDetailCheckup',
    component: PatientDetailCheckup
  }
]
