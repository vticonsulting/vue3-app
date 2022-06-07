import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/inspection/:id?',
      props: true,
      component: () => import('../views/Inspections/InspectionLayout.vue'),
      children: [
        {
          path: '',
          name: 'inspection',
          component: () => import('../views/Inspections/InspectionView.vue'),
        },
        {
          path: 'admin',
          name: 'inspection-admin',
          component: () => import('../views/Inspections/InspectionAdminView.vue'),
        },
        {
          path: 'report-overview',
          name: 'inspection-report-overview',
          component: () => import('../views/Reports/ReportOverviewView.vue'),
        },
        {
          path: 'details',
          name: 'inspection-report-details',
          component: () => import('../views/Reports/ReportDetailsView.vue'),
        },
        {
          path: 'photos',
          name: 'inspection-report-photos',
          component: () => import('../views/Reports/ReportPhotosView.vue'),
        },
        {
          path: 'scope',
          name: 'inspection-report-scope',
          component: () => import('../views/Reports/ReportScopeView.vue'),
        },
        {
          path: 'summary',
          name: 'inspection-report-summary',
          component: () => import('../views/Reports/ReportSummaryView.vue'),
        },
        {
          path: 'details',
          name: 'inspection-details',
          component: () => import('../views/Reports/ReportDetailsView.vue'),
        },
        {
          path: 'photos',
          name: 'inspection-photos',
          component: () => import('../views/Reports/ReportPhotosView.vue'),
        },
        {
          path: 'scope',
          name: 'inspection-scope',
          component: () => import('../views/Reports/ReportScopeView.vue'),
        },
        {
          path: 'summary',
          name: 'inspection-summary',
          component: () => import('../views/Reports/ReportSummaryView.vue'),
        },
      ],
    },
  ],
})

export default router
