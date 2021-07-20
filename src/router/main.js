import Index from '@/components/Index'
import MainHome from '@/components/main/mainHome'
import InquiryDetail from '@/components/main/inquiryDetail'
import PdfView from '@/components/pdfview'
import PatientDetailCheckup from '@/components/patient/patientDetailCheckup'
// import Header from '@/components/layout/Header'
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
    component: MainHome,
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
            // sessionStorage.clear()
            /* sessionStorage.setItem('usr_name', '게스트') */
            next('/login')
          } else {
            /*
            console.log('Add Session Storage ! - User Name = ' + response.data.data.name)
            sessionStorage.setItem('usr_name', response.data.data.name)
            sessionStorage.setItem('usr_mail', response.data.data.mail)
            sessionStorage.setItem('usr_tel', response.data.data.tel)
            sessionStorage.setItem('usr_age', response.data.data.age)
            */
            next()
          }
        })
        .catch(function (error) {
          console.log(error)
          // next('/')
          // 서비스 블랭크 페이지로
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
