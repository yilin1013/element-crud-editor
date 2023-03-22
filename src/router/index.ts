import { createRouter, createWebHistory } from 'vue-router'
import EditorPage from '../views/editor-page/index.vue'
import PreviewPage from '../views/preview-page/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'editor',
      component: EditorPage
    },
    {
      path: '/preview',
      name: 'preview',
      component: PreviewPage
    }
  ]
})

export default router
