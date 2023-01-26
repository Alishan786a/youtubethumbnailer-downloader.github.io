var pasturl=document.querySelector('#url');
let dbtn=document.querySelector('a');
let preview=document.querySelector('img');
pasturl.addEventListener('input',()=>{
    var index_slash=pasturl.value.lastIndexOf('/')+1;
   var nurl=pasturl.value.slice(index_slash)
   var thumburl=`https://i.ytimg.com/vi/${nurl}/hq720.jpg
   `;
   dbtn.attributes[0].value=thumburl;
preview.src=thumburl;
   dbtn.attributes[1].value=thumburl;
   console.log(dbtn.attributes[1].value)
//  console.log(nurl);
})
