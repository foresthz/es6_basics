
let gulp = require('gulp');
let child_process = require('child_process');
// console.info('gulp: ', gulp);
gulp.task('default', function(){
    console.info('default task ###');
    // child_process.spawn('calc');

    // 必须加后缀?
    // child_process.spawn('rollup');

    // child_process.spawn('rollup.cmd');
    // child_process.spawn('rollup.cmd',['--help']);
    // 不能运行
    // child_process.spawn('rollup.cmd', ['facade_import.js --file outxxx.js --format iife -n facade']).on(
    //     'error', function(error) {
    //         console.info(`lab0 error: ${error}`);
    //     }
    // );
    // child_process.spawn('rollup.cmd facade_import.js --file out.js --format iife -n facade');
    // child_process.spawn('rollup', ['facade_import.js --file out.js --format iife -n facade']).on(
    //     'error', function(error){
    //         console.info('error on spawn');
    //         debugger;
    //     }
    // )

    child_process.exec('rollup facade_import.js --file myout.js --format iife -n facade')
});