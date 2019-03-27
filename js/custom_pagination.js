var initBlogFeed_status = false;

$(document).ready(function(){

    var res = db.exec("SELECT * FROM postsTable")
    console.log(res[0].values.length);

    if(!initBlogFeed_status)
    {   
        var posts = db.exec("SELECT * FROM postsTable WHERE id BETWEEN " + 
        (0 + 1) + 
        " AND " + 
        ((0 + 1) + 1))[0].values;

        //countPage(pageNumber - 1) + pageNumber
        console.log(posts);
        
        var html = '<div class="col-sm-8 blog-main">';
        $.each(posts, function (index, value) { 
            html += '<div class="blog-post">';
            html += '<h2 class="blog-post-title">'+ value[1] +'</h2>';
            html += '<p class="blog-post-meta">' + value[2] + ' by <a href="#">'+ value[3] +'</a></p>';
            html += '<div class="blog-post-content">';
            html += value[4]
            html += '</div>'
            html += '</div>';
        });
        html += '</div>';

        $("#main-content-blog").html(html); // some ajax content loading...
    }

    // init bootpag
    $('#page-selection').bootpag({
        total: res[0].values.length / 2,
        maxVisible: 5
    }).on("page", function(event, pageNumber){

        var countPage = pageNumber - 1;

        var posts = db.exec("SELECT * FROM postsTable WHERE id BETWEEN " + 
        (countPage + pageNumber) + 
        " AND " + 
        ((countPage + pageNumber) + 1))[0].values;

        //countPage(pageNumber - 1) + pageNumber
        console.log(posts);
        
        var html = '<div class="col-sm-8 blog-main">';
        $.each(posts, function (index, value) { 
            html += '<div class="blog-post">';
            html += '<h2 class="blog-post-title">'+ value[1] +'</h2>';
            html += '<p class="blog-post-meta">' + value[2] + ' by <a href="#">'+ value[3] +'</a></p>';
            html += '<div class="blog-post-content">';
            html += value[4]
            html += '</div>'
            html += '</div>';
        });
        html += '</div>';

        $("#main-content-blog").html(html); // some ajax content loading...
    });
    
});


