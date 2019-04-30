import Vue from "vue"
import app from "./app.vue"

import './assets/images/bg.png'
import './assets/styles/common.css'
import './assets/styles/global.less'

const root = document.createElement("div")
document.body.appendChild(root)

new Vue({
    render: (h)=> h(app)
}).$mount(root)