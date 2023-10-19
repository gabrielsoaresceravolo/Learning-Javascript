function colorInformation()
{
    var $color = document.getElementById('colorInformation').innerHTML;
    document.getElementById('colorInformation').innerHTML = "";

    if($color)
    {
        $color.style.color = "$color";
    }
}