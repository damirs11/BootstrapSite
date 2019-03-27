$(document).ready(function(){

    console.log(db);
    var res = db.exec("SELECT * FROM myTable")
    console.log(res[0].values.length);

    function simpleTemplating(data) {
        var html = '<ul class="pagination">';
        $.each(data, function(index, item){
                console.log(item);
                html += '<li class="page-item"><a class="page-link" href="#">'+ (index + 1) + '</a></li>';
        });
        html += '</ul>';
        return html;
    }

    var html = simpleTemplating(res[0].values);
    $('#pagination-container').html(html);
            
    
    // init bootpag
    $('#page-selection').bootpag({
        total: res[0].values.length,
        maxVisible: 5
    }).on("page", function(event, /* page number here */ num){
            $("#content").html(num); // some ajax content loading...
    });
        
    
});


