import {createStore} from "vuex";
let modules=import.meta.glob('../store/modules/*.js')

for (let path in modules) {
    modules[path]().then((mod) => {
        mod=>modules[path]=mod
    })
    path=path.split('/').slice(-1)[0].split('.')[0]
}

const store=createStore({
    modules:modules
})

export default store
