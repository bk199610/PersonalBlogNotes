# vue2_lifecycle_interview_demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

##  前端面试题vue2 -- 生命周期部分
### 1.vue2的生命周期函数有哪些？发送请求是放在created还是放在mounted
    - beforeCreate
    - created
    - beforeMount
    - mounted
    - beforeUpdate
    - updated
    - beforeDestroy
    - destroyed

    发型请求放在created还是mounted？
    这个问题具体要看业务情况，因为组件的加载顺序是先执行父组件的前三个生命周期，然后去执行子组件的前四个生命周期，最后执行父组件的mounted周期。
    如果我们的业务是父组件引入了子组件，并且子组件优先于父组件来展示的话，那么我们就应该把父组件的请求放在mounted中。
    如果我们没有这方面的依赖的话，那我们放在哪个生命周期函数里都是可以的
### 2.组件初次渲染的时候执行哪些生命周期？
    - beforeCreate
    - created
    - beforeMount
    - mounted
### 3.父子组件渲染，生命周期
    - 生命周期函数：beforeCreate undefined undefined
    - 生命周期函数：created undefined {__ob__: Observer}
    - 生命周期函数：beforeMount undefined {__ob__: Observer}
    - 子组件-生命周期函数：beforeCreate undefined undefined
    - 子组件-生命周期函数：created undefined {__ob__: Observer}
    - 子组件-生命周期函数：beforeMount undefined {__ob__: Observer}
    - 子组件-生命周期函数：mounted <div data-v-469af010 class=​"hello">​…​</div>​ {__ob__: Observer}
    - 生命周期函数：mounted <div id=​"app">​…​</div>​ {__ob__: Observer}
### 4.父子组件销毁时的生命周期执行顺序
    - 父：beforeDestroy
    - 子：beforeDestroy destroyed
    - 父：destroyed
### 5. 在create阶段（beforeCreate 和 created）中获取dom
    1. 只要写异步代码，在异步中获取Dom，就可以了
        例如：setTimout、请求、promise.xxx等
    2. 使用vue系统内置的this.$nextTixk()
### 6. 为什么我们的请求不写在beforeCreate里面？beforeCreate和created有什么区别？
    因为，如果我们的请求是封装在methods中的一个方法，在beforeCreate阶段去调用的话是拿不到methods中的方法的，会报错。如果不考虑封装，那么在beforeCreate中也是可以请求的

    区别：beforeCreate阶段没有$data
         created阶段有$data
         beforeCreate阶段拿不到methods中的方法
         created阶段可以拿到methods中的方法

### 7. 加入keep-alive以后会执行哪些生命周期
    首先，keep-alive是用来缓存组件的，他的应用场景是例如商品详情，列表详情这些只是根据接口返回数据的不同，其实展示的是一个相同的组件，这时候就可以考虑使用keep-alive
    activated: 执行是在mounted后面
    deactivated：这样进行页面（组件切换的时候）就不再执行销毁函数了，执行这个函数

### 8. 你在什么情况下使用过哪些生命周期函数？说一说生命周期的应用场景
    created：单页面请求
    mounted：页面中引入了子组件，并且子组价要优先展示的话，请求放在mounted比较合适。还有就是需要同步获取dom的话，在mounted比较合适
    activated：比如说我有一个列表，点击列表当中的每一项进入一个详情页，不同的item对应的详情页面模版都是一样的，只是里面的数据不一样，我就要根据itemId来判断一下此次进入的
                和上一次是不是同一个页面，如果是同一个就不用重新请求数据，如果不是同一个，就需要重新发起请求数据
    destroyed：这个在有关一些视频和音频播放类的业务，当我跳出这个页面时需要记录当前播放进度，二次进入从当前进度继续播放
