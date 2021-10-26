/*
    Loads external html files through jquery ajax.
    Overkill for a small website but important in the long run.

    Made by Shivank Kacker
*/
function loadComponent(url, element, append){
    var componentUrl = url;
    var posting = $.post( componentUrl, {} );
    posting.done(function( data ) {
        if(append == 1){
            $(element).append(data);
        }else{
            $(element).html(data);
        }
        
    });
}
