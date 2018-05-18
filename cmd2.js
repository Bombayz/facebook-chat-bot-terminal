var nrc = require('node-run-cmd');
if(nrc.run('mkdir foo2')){
    console.log("Success")
}else{
    console.log("Fail")

}
// nrc.run('mkdir foo');