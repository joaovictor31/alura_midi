let lista = document.querySelectorAll(".tecla")
let som01 = document.querySelector('#som_tecla_pom');
let som02 = document.querySelector('#som_tecla_clap');


    lista.forEach(function(item,index){
    if (index === 0){
        item.addEventListener('click',function(){
            som01.play();
        });
    } else if (index === 1){
        item.addEventListener('click',function(){
            som02.play();
        })
    }
});


