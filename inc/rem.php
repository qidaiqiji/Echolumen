<script type="text/javascript">
// 　　document.documentElement.style.fontSize = document.documentElement.clientWidth / 750*100 + 'px';
    var setFontSize = function(){
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 960) deviceWidth = 960;
        document.documentElement.style.fontSize = deviceWidth / 750*100 +'px';
    }
    setFontSize();
    window.addEventListener('resize', setFontSize);
</script>