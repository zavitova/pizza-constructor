/**
 * Created by zaa on 27.12.2016.
 */
/**
 * Created by zaa on 23.12.2016.
 */
$(document).ready(function(){
    var tabs = $('#addIngreds');

    tabs.on('click', '.grid-cl_1-4', function(e){

        /* Предотвращаем стандартную обработку клика по ссылке */
        e.preventDefault();


        /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
       $(this).hide(0);
        var text = $( this ).html();

        $('.ordPizzaIncl > .grid_composition ').html(text);


    });
});