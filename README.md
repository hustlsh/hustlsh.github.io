# hustlsh.github.io

express init 默认使用jade viewEngine，添加express-react-views库，调用createEngine方法添加新的viewEngine，回到熟悉的react组件方式

node中运行es6，require('babel-register')，仅此而已？No！Babel常规配置流程还是要走一遍的。所有的babel工具都得写好.babelrc

babel-register:改写require，加载完成后都执行一次Babel，开发环境下使用，而且不能放在同一个文件下运行

babel-preset-env:可以指定运行环境版本，维护浏览器版本与plugins之间的映射关系

通过process.env.npm_package_config_port读取package.json config.port