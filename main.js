var fs = require("fs");
var buf = Buffer.alloc(1024);

fs.open('welcome.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   
fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      
      // Print only read bytes to avoid junk.
      if(bytes > 0){
        console.log(buf.subarray(0, bytes).toString());
     }
   });
});