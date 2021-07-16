import InquiryHome from '@/components/inquiry/InquiryHome'
// import Header from '@/components/layout/Header'
import Menu from '@/components/layout/LeftMenu'
// import Footer from '@/components/layout/Footer'

export default [
  {
    path: '/inquiry/inquiryHome',
    name: 'InquiryHome',
    components: {
      // header: Header,
      default: InquiryHome,
      leftMenu: Menu
      // footer: Footer
    }
  }
]
