### 1. 组件传值（通信）有哪些方式？
    - 父组件传给后代组件
        1. 父组件引入子组件，绑定数据
            ```html
                <List :str="str1" :list="list"/>
            ```
            子组件通过props来接收
            ```javascript
                props: {
                    list: {
                        type: Array,
                        default: () => []
                    },
                    str: {
                        type: String,
                        default: ''
                    }
                },
            ```
            **注意** : 这种父传子很方便，但是当父传孙的时候就要通过父 -> 子 -> 孙，就很麻烦了
