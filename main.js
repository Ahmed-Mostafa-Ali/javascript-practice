var myarray=["Be yourself; everyone else is already taken.― Oscar Wide",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.― Albert Einstein",
`So many books, so little time.<span>Frank Zappa</span>`]
document.getElementById("btnMain").onclick=function add() {
    var newText =(myarray[Number.parseInt(Math.random()*myarray.length)]);
    document.getElementById("textOver").innerHTML=newText
}
