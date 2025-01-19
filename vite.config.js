// const path = require('path')

export default {
    root: 'src',
    publicDir: '../static/',
    base: './', 
    server:
    {
        host: true,
    },
    build:
    {
        outDir: '../docs',
        emptyOutDir: true,
        sourcemap: true
    }
    // resolve: 
    // {
    //     alias: 
    //     {
    //       '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    //     }
    // }    
}