function btnclick(val)
{
    document.getElementById('screen').value+=val
}
function equate()
{
    var text=document.getElementById('screen').value
    var result=eval(text)
    document.getElementById('screen').value=result
}
function cleardisplay()
{
    document.getElementById('screen').value=""
}
function msg()
{
    window.alert("No use with this button :)")
}