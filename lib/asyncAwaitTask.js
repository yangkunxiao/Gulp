//使用async/await
async function asyncAwaitTask(){
    const version  = fs.readFileSync('package.json');
    console.log(JSON.parse(version.toString()).version);
    await Promise.resolve('async await')
}

exports.default = asyncAwaitTask;