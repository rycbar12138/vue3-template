

export default {
    path:'/',
    redirect:'/home',
    children:[
        {
            path:'/home',
            component:()=>import('@/views/Home/HomeView.vue')
        },
        {
            path:'/about',
            component:()=>import('@/views//About/AboutView.vue')
        }
    ]
}