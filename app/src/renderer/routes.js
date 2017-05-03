export default [
  {
    path: '/',
    name: 'login',
    component: require('components/LoginView')
  },
  {
    path: '/buckets',
    name: 'buckets',
    component: require('components/BucketsView'),
    meta: {
      auth: true
    }
  },
  {
    path: '/buckets/:bucketId',
    name: 'files',
    component: require('components/FilesView'),
    meta: {
      auth: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: require('components/DashboardView'),
    meta: {
      auth: true
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: require('components/SettingsView'),
    meta: {
      auth: true
    }
  },
  {
    path: '/upload',
    name: 'upload',
    component: require('components/UploadView.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]
