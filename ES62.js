const options={
    name:'my-app',
    version:'1.0.0',
    author:'John Doe',
    description:'A simple Node.js application',
   
}

const {name,version,...others}=options;

console.log(`Name: ${name}, Version: ${version}`,others);