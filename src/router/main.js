import Index from '@/components/Index'
import MainHome from '@/components/main/mainHome'
import InquiryDetail from '@/components/main/inquiryDetail'
import PdfView from '@/components/pdfview'
import PatientDetailCheckup from '@/components/patient/patientDetailCheckup'
// import Header from '@/components/layout/Header'
// import Menu from '@/components/layout/LeftMenu'
// import Footer from '@/components/layout/Footer'

export default [
  {
    path: '/',
    name: 'Index',
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
