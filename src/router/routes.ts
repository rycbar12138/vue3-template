const modules: Record<string, any> = import.meta.glob(["./modules/**/*.ts"], {
    eager: true,
  })

/** 原始静态路由（未做任何处理） */
const route: any[] = []

Object.keys(modules).forEach(key => {
  route.push(modules[key].default)
})
console.log(route)

const routes=[
    ...route
]

export default routes