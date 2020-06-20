function displayMenu()
{
    var nav = document.getElementsByTagName('nav');
    var menuIcon = document.getElementById('menu-icon');
    if(nav[0].style.display == 'block')
    {
        nav[0].style.display = 'none';
        menuIcon.style.transform = 'rotate(0deg)';
        menuIcon.style.left = '0px';
    }
    else
    {
        nav[0].style.display = 'block';
        menuIcon.style.transform = 'rotate(90deg)';
        menuIcon.style.left = '20%';
    }
    
}

function display1stSubMenu()
{
    var ulIcon = document.getElementsByClassName("ul-icons");
    var subMenu = document.getElementsByClassName('sub-menu');
    if(subMenu[0].style.display == 'block')
    {
        subMenu[0].style.display = 'none';
        ulIcon[0].style.transform = 'rotate(0deg)';
    }
    else
    {
        subMenu[0].style.display = 'block';
        ulIcon[0].style.transform = 'rotate(90deg)';
    }
    
}
function display2ndSubMenu()
{
    var ulIcon = document.getElementsByClassName("ul-icons");
    var subMenu = document.getElementsByClassName('sub-menu');
    if(subMenu[1].style.display == 'block')
    {
        subMenu[1].style.display = 'none';
        ulIcon[1].style.transform = 'rotate(0deg)';
    }
    else
    {
        subMenu[1].style.display = 'block';
        ulIcon[1].style.transform = 'rotate(90deg)';
    }
        
}
function calculate()
{
    var d = 0;
    while(d<10)
    {
        if(d % 2 != 0)
        {
            d += 2;
        }
        else
        {
            d -= 2;
        }
    }
    alert(d);
}
function changeBackgroundToLoveImg()
{   
    calculate();
    document.body.style.background = " url(images/L.O.V.E.jpeg) no-repeat"; 
    document.body.style.backgroundSize = 'cover';
}
function changeBackgroundToGardenImg()
{
    document.body.style.background = "url(images/garden-background.jpeg) no-repeat 100% 100%"; 
    document.body.style.backgroundSize = 'cover';
}
// window.onclick = function hideMenu()
// {
//     var nav = document.getElementsByTagName('nav');
//     document.onclick = function(div)
//     {
//         if(div.target !== nav[0])
//         {
//             nav[0].style.display = 'none';
//         }
//     };
// }
