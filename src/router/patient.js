import MedicineList from '@/components/patient/MedicineList'
// import Header from '@/components/layout/Header'
import Menu from '@/components/layout/LeftMenu'
// import Footer from '@/components/layout/Footer'

export default [
  {
    path: '/patient/medicineList',
    name: 'MedicineList',
    components: {
      // header: Header,
      default: MedicineList,
      leftMenu: Menu
      // footer: Footer
    }
  }
]
