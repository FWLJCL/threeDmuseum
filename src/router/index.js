// 引入依赖
import Vue from 'vue'
import VueRouter from 'vue-router'


// 使用路由中间件
Vue.use(VueRouter)

// 懒加载引入组件

const survey = () => import('../views/survey/index.vue')
const news = () => import('../views/news/index.vue')
const shuhuaA = () => import('../views/shuhuaA/index.vue')
const zhanlan = () => import('../views/zhanlan/index.vue')
const zaiqi = () => import('../views/zaiqi/index.vue')
const zixun = () => import('../views/zixun/index.vue')
const question = () => import('../views/question/index.vue')

//首页
const index0 = () => import('../views/index/index.vue')
// const shuhuaB = () => import('../views/shuhuaB/index.vue')
const index = () => import('../views/shuhuaB/index.vue')
const index2 = () => import('../views/shuhuaB/index2.vue')
const index3 = () => import('../views/shuhuaB/index3.vue')
const index4 = () => import('../views/shuhuaB/index4.vue')
const index5 = () => import('../views/shuhuaB/index5.vue')


// 路由表
const routes = [{
    path: '/',
    component: index0,
    meta: {
        title: '首页'
    }
},{
    path: '/question',
    component: question,
    meta: {
        title: '常见问题'
    }
},{
    path: '/zixun',
    component: zixun,
    meta: {
        title: '资讯'
    }
},{
    path: '/zaiqi',
    component: zaiqi,
    meta: {
        title: '在期展览'
    }
}, {
    path: '/zhanlan',
    component: zhanlan,
    meta: {
        title: '展览'
    }
},{
    path: '/shuhuaA',
    component: shuhuaA,
    meta: {
        title: '书画A'
    }
}, 
{
    // path: '/shuhuaB',
    // component: shuhuaB,
    // meta: {
    //     title: '书画B'
    // },
    // children: [
    //     {
            path: '/shuhuaB/index',
            component: index,
            meta: {
              title: '书画B下的index'
            }
          },
        {
          path: '/shuhuaB/index2',
          component: index2,
          meta: {
            title: '书画B下的index2'
          }
        },
        {
            path: '/shuhuaB/index3',
            component: index3,
            meta: {
              title: '书画B下的index3'
            }
          },
          {
            path: '/shuhuaB/index4',
            component: index4,
            meta: {
              title: '书画B下的index4'
            }
          },
          {
            path: '/shuhuaB/index5',
            component: index5,
            meta: {
              title: '书画B下的index5'
            }
          },
//       ]
// },
{
    path: '/survey',
    component: survey,
    meta: {
        title: '概况'
    },
    children: [
        {
            path: '/survey/overview',
            name: 'overview',
            id: 0,
            type: 1,
            icon: 'el-icon-edit-outline',
            component: () => import('../../src/views/survey/page/overview.vue'),
            meta: {
                title: '本馆概况'
            }
        },
        {
            path: '/survey/museum',
            name: 'museum',
            id: 1,
            type: 1,
            icon: 'el-icon-edit-outline',
            component: () => import('../../src/views/survey/page/museum.vue'),
            meta: {
                title: '馆内设施'
            }
        },
        {
            path: '/survey/instructions',
            name: 'instructions',
            id: 2,
            type: 1,
            icon: 'el-icon-edit-outline',
            component: () => import('../../src/views/survey/page/instructions.vue'),
            meta: {
                title: '游览须知'
            }
        },

    ]
}, {
    path: '/news',
    component: news,
    meta: {
        title: '资讯'
    },
    children: [
        {
            path: '/news/overview',
            name: 'aboutUs',
            id: 0,
            type: 1,
            icon: 'el-icon-edit-outline',
            component: () => import('../../src/views/news/page/aboutUs.vue'),
            meta: {
                title: '关于我们'
            }
        },
        {
            path: '/news/announcement',
            name: 'announcement',
            id: 1,
            type: 1,
            icon: 'el-icon-edit-outline',
            component: () => import('../../src/views/news/page/announcement.vue'),
            meta: {
                title: '通知公告'
            }
        },
        {
            path: '/news/collection',
            name: 'instructions',
            id: 2,
            type: 1,
            icon: 'el-icon-edit-outline',
            component: () => import('../../src/views/news/page/collection.vue'),
            meta: {
                title: '专栏集锦'
            }
        },

    ]
},
{
    path: '/coll',
    name: 'instructions',
    id: 2,
    type: 1,
    icon: 'el-icon-edit-outline',
    component: () => import('../../src/views/coll/index.vue'),
    meta: {
        title: '藏品'
    }
},]


// 修改路由模式
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//暴露
export default router