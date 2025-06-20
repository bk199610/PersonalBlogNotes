#### 两个有用的微前端框架
[乾坤](https://qiankun.umijs.org/zh/guide)  [无界](https://wujie-micro.github.io/doc/guide/degrade.html)	

#### 实际的前端开发
- 模块化（js的模块化，CSS的模块话，资源的模块化）
- 组件化（复用现有的UI结构、样式、行为）
- 规范化（目录结构的划分、编程规范化、接口规范化、文档规范化、Git分支管理）
- 自动化（自动化构建、自动部署、自动化测试）


## webpack实际应用
#### 指令
    - npm init -y                                           初始化包管理文件package.json
    - npm install packageName -S                            -S明确告诉npm所加载的包进入到dependencies目录下，该目录下的配置是开发环境和线上环境都能用到的
    - npm install webpack@版本号 wbpack-cli@版本号 -D         安装webpack，-D明确告诉npm所加载的包进入devDependencies目录下，该目录下放置只在开发环境能用到的资源
    
    - 注意：
        -S：是--save的简写
        -D：是--save-dev的简写
        
#### 基本使用
1. 在项目的根目录下创建一个webpack.config.js的webpack配置文件，并初始化如下的基础配置：
```javaScript
    module.exports = {
        mode: 'development'
    }
```
2. 在package.json的scripts节点下，新增的脚本如下：
```json
    "scripts": {
        "dev": "webpack"
    }
```
3. 在终端中运行npm run dev命令，启动webpack进行项目的打包构建
4. webpack的基本使用
    > **4.1：mode的可选值**
    >> mode节点的可选值有两个，分别是
            >>1. development
                >>>- <span style="color:red;">开发环境</span>
                >>>- 不会对打包生成的文件进行<span style="color:red;">代码压缩</span>和<span style="color:red;">性能优化</span>
                >>>- 打包<span style="color:red;">速度快</span>，适合在<span style="color:red;">开发阶段</span>使用
             >>2. production
                >>>- <span style="color:red;">生产环境</span>
                >>>- 会对打包生成的文件进行<span style="color:red;">代码压缩</span>和<span style="color:red;">性能优化</span>
                >>>- 打包<span style="color:red;">速度很慢</span>，仅适合在项目<span style="color:red;">发布阶段</span>使用

    > **4.2 webpack.config.js 文件的作用**
        >- webpack.config.js是webpack的配置文件。webpack 在真正开始打包构建之前，会先读取这个配置文件从而基于给定的配置，对项目进行打包。
        >- 注意:由于 webpack 是基于 node.is 开发出来的打包工具，因此在它的配置文件中，支持使用 node.js 相关的语法和模块进行 webpack 的个性化配置。

    > **4.3 webpack的默认约定**
    >>在webpack4.X和webpack5.X的版本中，有如下的默认约定：
        >>>1. 默认的打包入口文件为<span style="color:red;">src</span> -><span style="color:red;"> index.js</span>
        >>>2. 默认的输出文件路径为<span style="color:red;">dist</span> -> <span style="color:red;">main.js</span>
        >>>3. 注意：可以在<span style="color:red;">webpack.config.js</span>中修改打包的默认约定
    
    >**4.4自定义打包的入口与出口**
    >> 在webpack.config.js配置文件中通过<span style="color:red;">entry节点</span>指定<span style="color:red;">打包入口</span>。通过<span style="color:red;">output节点</span>指定<span style="color:red;">打包的出口</span>
    ```javascript
    const path = require('path')
    module.exports = {
        entry: path.join(__dirname, "../src/index.js"),     // 打包入口的文件路径
        output: {
            path: path.join(__dirname, "./dist"),       // 输出文件的存放路径
            filename: 'bundle.js'       // 输出文件的名称
        }
    }
    ```

#### webpack中的插件
1. 插件的作用
    - 通过安装第三方的插件，可以<span style="color: red;">拓展webpack的能力</span>，从而让webpack<span style="color:red;">用起来更方便</span>。最常用的webpack插件有以下两个：
    >1. <span style="color:red;">webpack-dev-server</span>
    >>- 类似于node.js阶段用到的nodemon工具
    >>- 每当修改了源代码，webpack会自动进行项目打包和构建
    >2. <span style="color:red;">html-webpack-plugin</span>
    >>- webpack中的Html插件（类似于一个模板引擎插件）
    >>- 可以通过此插件自定制index.html页面的内容
2. 
    >**2.1 安装webpack-dev-server**
    > 运行如下的命令，即可在项目中安装这个插件：npm install webpack-dev-server@版本号 -D
    >**2.2 配置webpack-dev-server**
    >>1. 修改<span style="color:red;">package.json</span>-><span style="color:red;">scripts</span>中的<span style="color:red;">dev</span>命令如下：
    ```javaScript
        "scripts": {
            "dev": "webpack serve"
        }
    ```
    >>2.    再次运行npm run dev命令
    >>3.    在浏览器中访问<span style="color:red;">http://localhost:8080/</span>地址，查看自动打包效果
    >>  注意：webpack-dev-server会启动一个<span style="color:red;">实时打包的http服务器</span>
    
    >**<span style="color: red">注意</span>：** 我配置完这些之后，访问http://localhost:8080/报错了，not get 404，我按照下面的步骤解决了一下：
    >>1. 我先是输入http://localhost:8080/webpack-dev-server看看能不能看到webpack仪表盘
    >>2. 再看http://localhost:8080/bundle.js看看能不能看到打包成功的文件(为了确保万无一失，全局搜索一下自己写的代码)
    >>3. 发现上面都没问题之后，查阅文档说要配置静态文件目录
    ```javaScript
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'), // 如果 HTML 在 src/ 目录
        },
    },
    ```
    >>4. 但是我配置完之后，发现我的js代码并没有生效，查阅资料说index.html什么默认不会注入打包的bundle.js，这个看上去不知道咋理解，以为我已经使用<script>标签注入了
    >>5. 反正后面也要学着使用html-webpack-plugin，我就安装了html-webpack-plugin，配置一下，上面的问题就都解决了
    
    
#### 错误类型与解决
> #### <div style="color:red;"> Uncaught SyntaxError: Cannot use import statement outside a module </div>
>> **SyntaxError**：语法错误