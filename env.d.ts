/// <reference types="vite/client" />


//声明组件
declare module '*.vue' {
    import { Component } from 'vue'; const component: Component; export default component;
}


