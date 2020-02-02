document.getElementById('myForm').addEventListener('submit',saveBookmark);
function saveBookmark(e)
{
var site= document.getElementById("name").value;
var surl= document.getElementById("ur").value;
var bookmark={
NAM:site,
url:surl
}
if(localStorage.getItem('bookmarks')===null)
{
var bookmarks=[];
bookmarks.push(bookmark);
localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
else
{
var bookmarks=[];
var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
bookmarks.push(bookmark);
localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
result();}
function dele(url)
{
var bookmarks=[];
var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
console.log(url);
var i=0;
for(i=0;i<bookmarks.length;++i)
{
if(url==(bookmarks[i].url))
{
console.log(i);
bookmarks.splice(i,1);
break;
}}
localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
result();
}

function result()
{
var bookmarks=[];
var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
console.log(bookmarks.length);
var i;
var resul=document.getElementById("results");
resul.innerHTML="";
for(i=0;i<bookmarks.length;i++){
name=bookmarks[i].NAM;
urle=bookmarks[i].url;
resul.innerHTML+='<div class="hi">'+
                 '<h3>'
                 +name+
                  '<a>&nbsp&nbsp&nbsp&nbsp</a>'+'<a  id="butt1" target="_blank" href="'+urle+'">visit</a>'
                  +'<a>&nbsp&nbsp&nbsp</a>'+'<a onclick="dele(\''+urle+'\')" id="butt2" target="_self" href="#">delete</a>'
                  '+</h3>'+
                  '</div>';
}
reload();}