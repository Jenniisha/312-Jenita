//http module-in-built in NodeJs
const http=require('http');

const server=http.createServer((req,res)=>{
    res.write('Hello,Node\n');
    res.write('How are you node\n');
    res.write('Im Fine\n');
    res.write('Good Morning');
    res.end();
});

//Server is an "event emitter"
//all events of the emitters will have a method called "on"
//Some events of the HTTP server are ="listening","request","error"

server.on("request",(req,res)=>{
    console.log("received a request");
});
server.on("listening",()=>{
    console.log('Server is running on http://localhost:3000');
});

server.log("error",(err)=>{
    console.log(err.message);
});
//port number>1024
server.listen(3000);