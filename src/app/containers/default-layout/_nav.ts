import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: ''
    }
  },
  {
    name: 'Quản lý hồ sơ bệnh án',
    title: true
  },
  {
    name: 'Quản lý nhân viên',
    url: '/employee',
    iconComponent: { name: 'cil-people' },
    children: [
      {
        name: 'Danh sách nhân viên',
        url: '/employee/list'
      },
      {
        name: 'Thêm mới nhân viên',
        url: '/employee/add'
      },
    ]
  },
  {
    name: 'Quản lý khoa phòng',
    url: '/department',
    iconComponent: { name: 'cilHospital' },
    children: [
      {
        name: 'Danh sách khoa phòng',
        url: '/department/list',
      },
      {
        name: 'Thêm mới khoa phòng',
        url: '/department/add'
      },
    ]
  },
  {
    name: 'Bệnh án nội trú',
    url: '/inpatient-records',
    iconComponent: { name: 'cilBookmark' },
    children: [
      {
        name: 'Danh sách bệnh án',
        url: '/inpatient-records/list',
      },
      {
        name: 'Thêm mới bệnh án',
        url: '/inpatient-records/add'
      },
    ]
  },
  {
    name: 'Bệnh án ngoại trú',
    url: '/outpatient-records',
    iconComponent: { name: 'cilBookmark' },
    children: [
      {
        name: 'Danh sách khoa phòng',
        url: '/department/list',
      },
      {
        name: 'Thêm mới khoa phòng',
        url: '/department/add'
      },
      {
        name: 'Cập nhật khoa phòng',
        url: '/department/edit'
      },
    ]
  },
  {
    name: 'Sổ theo dõi bệnh án',
    url: '/logbook',
    iconComponent: { name: 'cilBook' },
    children: [
      {
        name: 'Danh sách khoa phòng',
        url: '/department/list',
      },
      {
        name: 'Thêm mới khoa phòng',
        url: '/department/add'
      },
      {
        name: 'Cập nhật khoa phòng',
        url: '/department/edit'
      },
    ]
  },

  ///////////////////////*****************////////////////////////////
  // {
  //   name: 'Forms',
  //   url: '/forms',
  //   iconComponent: { name: 'cil-notes' },
  //   children: [
  //     {
  //       name: 'Form Control',
  //       url: '/forms/form-control'
  //     },
  //     {
  //       name: 'Select',
  //       url: '/forms/select'
  //     },
  //     {
  //       name: 'Checks & Radios',
  //       url: '/forms/checks-radios'
  //     },
  //     {
  //       name: 'Range',
  //       url: '/forms/range'
  //     },
  //     {
  //       name: 'Input Group',
  //       url: '/forms/input-group'
  //     },
  //     {
  //       name: 'Floating Labels',
  //       url: '/forms/floating-labels'
  //     },
  //     {
  //       name: 'Layout',
  //       url: '/forms/layout'
  //     },
  //     {
  //       name: 'Validation',
  //       url: '/forms/validation'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   iconComponent: { name: 'cil-chart-pie' }
  // },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges'
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/notifications/modal'
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
];
