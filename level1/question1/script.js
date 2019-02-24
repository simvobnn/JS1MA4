document.getElementById('button').addEventListener('click', function(e){
    alert('Success');
    e.stopPropagation();
})