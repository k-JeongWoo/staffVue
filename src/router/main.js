import Index from '@/components/Index'
import MainHome from '@/components/main/mainHome'
import InquiryDetail from '@/components/main/inquiryDetail'
import PdfView from '@/components/pdfview'
import PatientDetailCheckup from '@/components/patient/patientDetailCheckup'

export default [
  {
    path: '/',
    name: 'Index',
    component: Index
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
