// JavaScript Document

$(function() {
    var tags = [];
    $('#srch').keypress(function(e){
        if($('#srch').val().length > 1){
            $.getJSON('https://api.bing.com/osjson.aspx?JsonType=callback&JsonCallback=?', {
                query: $('#srch').val()
            }, function(data) {
                for(i = 0; i < data[1].length; i++){
                    tags.push(data[1][i]);
                    $('#srch').autocomplete({
                        minLength:4,
                        delay:0,
                        source: tags
                    });
                }
                tags = [];
            });
        } else {
            // nothing
        }
    });
});