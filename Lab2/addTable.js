
function ShowTable(){
    if(localStorage.getItem("table")!=null){
        let del = document.getElementById("tableDiv");
        let repl = localStorage.getItem("table");
        del.innerHTML+="<div id='replace'>"+repl+"</div>";
        repl = document.getElementById("replace")
        let clone=repl.cloneNode(true)
        del.replaceWith(clone)}
    else
    {
        Create()
    }
}
function Create(){
    let position=document.getElementById("tableDiv")
    let htmlcode="<div id='replace'><table id='table'><tr class='output'><td contenteditable='true'><div class='...'>...</div></td></tr></table> <input type='button' value='New row' onclick='NewRow()'> <input type='button' value='Save' onclick='Save()'></div>"
    if(document.getElementById("table")==null){
        position.innerHTML+=htmlcode}
}
function Save(){
    localStorage.setItem("table",document.getElementById("replace").innerHTML)
}
function NewRow(){
    let position=document.getElementById("table")
    let htmlcode="<tr class='output'><td contenteditable='true'><div style='border: black thin'>...</div></td></tr>"
    position.insertAdjacentHTML("beforeend",htmlcode)
}