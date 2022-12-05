<script>
darkmode = true, 
ctaText = 'Get in Touch',
if (darkMode === true){
    color = 'black',
} else {
    color = '#056AFF',
}
</script>

<button id=cta href="/contact">${ctaText}</button> 
<style>
#cta{
    color:${color};
    border-color: white;
    background-color: white;
    text-align:center;
    display:inline-block; 
    border: 3px;
    font-size:30px;
    font-weight:600;
    padding:10px 30px;
    border-radius:100px}
    &:hover {
        color: white;
        background-color:${color};
        position: relative;
        transform: scale(1.1);
}
</style>