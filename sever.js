var http=require('http');
var fs=require('fs');
http.createServer(
	function(request,response)
	{
		var url=request.url;
		switch(url)
		{
			case '/':
				getfilecontent(response,'MERGE.html','text/html');
				break;
			case '/css/styling.css':
				getfilecontent(response,'css/styling.css','text/css');
				break;
			case '/images/logo.png':
				getfilecontent(response,'images/logo.png','image/png');
				break;
			case '/images/header.PNG':
				getfilecontent(response,'images/header.PNG','image/PNG');
				break;
			case '/images/BG.jpeg':
				getfilecontent(response,'images/BG.jpeg','image/jpeg');
				break;
			default:
				response.writeHead(404,{'Content-Type':'text/plain'});
				response.end('404-Page not found');
		}
	}
).listen(1234);
console.log('server running at http://localhost:1234');
function getfilecontent(response,filepath,ContentType)
{
	fs.readFile(filepath,function(error,data)
	{
		if(error)
		{
			response.writeHead(500,{'Content-Type':'text/plain'});
			response.end('500-Internal Server error');
		}
		if(data)
		{
			response.writeHead(200,{'Content-Type':ContentType});
			response.end(data);
		}
	});
}