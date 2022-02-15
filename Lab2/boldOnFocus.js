function SetBold()
{
    document.getElementById(5).style.fontWeight='bold'
}
function SetNormal(){
    document.getElementById(5).style.fontWeight='normal'
}

function Validate(){
    let isBold = localStorage.getItem('isBold')
    if(isBold==='true')
    {
        SetBold();
        localStorage.setItem('isBold','false')
    }
    else
    {
        SetNormal();
    }
}
function Check()
{
    if (document.getElementById('checkbox').checked)
    {
        localStorage.setItem('isBold','true')
        console.log(document.cookie)
    }
    else
    {
        localStorage.setItem('isBold','false')
        console.log(document.cookie)
    }
}
