import { TNavItems } from '@/types/navItems';

export const navItems: TNavItems[] = [
  {
    name: 'Dashboard',
    icon: '/assets/icons/dashboard.svg',
    url: '/',
    items: [
      {
        name: 'Dashboard 1',
        icon: '/assets/icons/dashboard.svg',
        url: '/',
      },
      {
        name: 'Dashboard 2',
        icon: '/assets/icons/dashboard.svg',
        url: '/',
        items: [
          {
            name: 'Dashboard 1.1',
            icon: '/assets/icons/dashboard.svg',
            url: '/',
          },
          {
            name: 'Dashboard 1.2',
            icon: '/assets/icons/dashboard.svg',
            url: '/',
          },
          {
            name: 'Dashboard 1.3',
            icon: '/assets/icons/dashboard.svg',
            url: '/',
          },
        ]
      },
      {
        name: 'Dashboard 3',
        icon: '/assets/icons/dashboard.svg',
        url: '/',
      },
    ]
  },
  {
    name: 'Settings',
    icon: '/assets/icons/documents.svg',
    url: '/settings',
  },
  {
    name: 'Profile',
    icon: '/assets/icons/others.svg',
    url: '/profile',
  }
]


// const items = [
//  { name: "home", label: "Home", Icon: HomeIcon },
//  {
//    name: "billing",
//    label: "Billing",
//    Icon: ReceiptIcon,
//    items: [
//      {
//        name: "statements", label: "Statements", onClick, items: [
//          { name: "statements", label: "Statements", onClick },
//          {
//            name: "reports", label: "Reports", onClick, items: [
//              { name: "statements", label: "Statements", onClick },
//              { name: "reports", label: "Reports", onClick }
//            ]
//          }
//        ]
//      },
//      { name: "reports", label: "Reports", onClick }
//    ]
//  },
//  "divider",
//  {
//    name: "settings",
//    label: "Settings",
//    Icon: SettingsIcon,
//    items: [
//      { name: "profile", label: "Profile" },
//      { name: "insurance", label: "Insurance", onClick },
//      "divider",
//      {
//        name: "notifications",
//        label: "Notifications",
//        Icon: NotificationsIcon,
//        items: [
//          { name: "email", label: "Email", onClick },
//          {
//            name: "desktop",
//            label: "Desktop",
//            Icon: DesktopWindowsIcon,
//            items: [
//              { name: "schedule", label: "Schedule" },
//              { name: "frequency", label: "Frequency" }
//            ]
//          },
//          { name: "sms", label: "SMS" }
//        ]
//      }
//    ]
//  }
// ];
