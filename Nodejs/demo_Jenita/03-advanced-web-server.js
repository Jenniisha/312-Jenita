//http module-in-built in NodeJs
const http=require('http');
const url=require('url');

const server=http.createServer((req,res)=>
{
    //req url has the "request path"{for "http://localhost:3000/hello?format=upper&showDate=true",it is "/hello"}
const urlParts=url.parse(req.url,true);//url.parse("/hello?format="upper")
    console.log(urlParts);

    const word=urlParts.pathname.substring(1);

    let formattedWord;

    if(urlParts.query.format=="upper")
    {
        formattedWord=word.toUpperCase();
    }
    else if(urlParts.query.format=='lower')
    {
        formattedWord.word.toLowerCase();
    }
    else
    {
        formattedWord=word;
    }
    
    res.write(formattedWord+'Jenita\n ');

    
    date=new Date().toDateString();
    
    if(urlParts.query.showDate="true")
        {
            res.write(date);
    
                   }  
                            res.end();

  
});

//Server is an "event emitter"
//all events of the emitters will have a method called "on"
//Some events of the HTTP server are ="listening","request","error"


server.on("listening",()=>{
    console.log('Server is running on http://localhost:3000');
});

server.on("error",(err)=>{
    console.log(err.message);
});
//port number>1024
server.listen(3000);