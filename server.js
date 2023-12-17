const http = require("http");  // importing http
const { CLIENT_RENEG_LIMIT } = require("tls");
const port = 8000;  // getting a port number

const toDoList = ["hey everyone","hope you all","are doing","great in life."]; // initializing an array

// creating a server
http.createServer((req,res)=>{

     // callback functions
     const {method,url}=req;
     // console.log(method,url);
 
     if(url==="/todos"){
         if(method==="GET"){
             console.log("todos route, n its a GET Method");
             res.writeHead(200,{"Content-Type":"text/html"});
             res.write(toDoList.toString())
         }else if(method==="POST"){
            let body="";
            req.on('error',(err)=>{ 
                console.log(err) 
            }).on('data',(chunk)=>{
                body += chunk
                console.log("chunk: ", chunk);

            }).on('end',()=>{
                body = JSON.parse(body);
                console.log("data: ",body);
                let newToDo=toDoList;
                newToDo.push(body.item);
            })
         }else if(method==="PUT"){
         }else if(method==="DELETE"){
            let body="";
            req.on('error',(err)=>{
                console.log(err)
            }).on('data',(chunk)=>{
                body+=chunk;
            }).on('end',()=>{
                body=JSON.parse(body);
                let deleteThis= body.item;

                // for(let i=0; i<toDoList.length; i++){
                //     if (toDoList[i]===deleteThis){
                //         toDoList.splice(i,1);
                //         break;
                //     }
                // }
                
                // OR

                toDoList.find((elem,index)=>{
                    if(elem===deleteThis){
                        toDoList.splice(index,1)
                    }
                })
            })
         }else{
             res.writeHead(501);
         }
        }
     else if(url==="/"){
        console.log("/ home default route")
     }   
     res.end();

})
.listen(port,()=>{
    console.log(`NodeJs Server Started Running On Port ${port}`);
})