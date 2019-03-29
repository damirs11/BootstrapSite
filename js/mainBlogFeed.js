var initBlogFeed_status = false;

BlogFunction = 
{   
    init : function initBlogFeed(){

        $(document).ready(function(){
            var res = db.exec("SELECT * FROM postsTable")
            console.log(res[0].values.length);

            if(!initBlogFeed_status) //initFirstPage
            {   
                initBlogFeed = true;

                $('html, body').animate({ scrollTop: 0 }, 'fast');

                var posts = db.exec("SELECT * FROM postsTable WHERE id BETWEEN " + 
                (0 + 1) + 
                " AND " + 
                ((0 + 1) + 1))[0].values;

                console.log(posts);

                var html = '<div class="row" id="main-content-blog">'

                html += '<div class="blog-header">';
                html += '<h1 class="blog-title">The Bootstrap Blog</h1>';
                html += '<p class="lead blog-description">The official example template of creating a blog with Bootstrap.</p>';
                html += '</div>'; //blog-header
                
                //<!-- Posts of blog -->
                
                html += '<div class="col-sm-8 blog-main">';
                $.each(posts, function (index, value) { 
                    html += '<div class="blog-post">';
                    html += '<h2 class="blog-post-title">'+ value[1] +'</h2>';
                    html += '<p class="blog-post-meta">' + value[2] + ' by <a onclick="AboutMeFunction.init()">'+ value[3] +'</a></p>';
                    html += '<div class="blog-post-content">';
                    html += value[4]
                    html += '</div>'
                    html += '</div>';
                });
                html += '</div>'; //blog-main
                html += '</div>'; //main-content-blog
                
                
                

                $(".page-content").html(html); // content loading
            }

            // init bootpag
            $('#page-selection').bootpag({
                total: res[0].values.length / 2,
                maxVisible: 5
            }).on("page", function(event, pageNumber){

                $('html, body').animate({ scrollTop: 0 }, 'fast');

                var countPage = pageNumber - 1;

                var posts = db.exec("SELECT * FROM postsTable WHERE id BETWEEN " + 
                (countPage + pageNumber) + 
                " AND " + 
                ((countPage + pageNumber) + 1))[0].values
                console.log(posts);

                var html = '<div class="row" id="main-content-blog">'

                html += '<div class="blog-header">';
                html += '<h1 class="blog-title">The Bootstrap Blog</h1>';
                html += '<p class="lead blog-description">The official example template of creating a blog with Bootstrap.</p>';
                html += '</div>'; //blog-header
                
                //<!-- Posts of blog -->
                
                html += '<div class="col-sm-8 blog-main">';
                $.each(posts, function (index, value) { 
                    html += '<div class="blog-post">';
                    html += '<h2 class="blog-post-title">'+ value[1] +'</h2>';
                    html += '<p class="blog-post-meta">' + value[2] + ' by <a onclick="AboutMeFunction.init()">'+ value[3] +'</a></p>';
                    html += '<div class="blog-post-content">';
                    html += value[4]
                    html += '</div>'
                    html += '</div>';
                });
                html += '</div>'; //blog-main
                html += '</div>'; //main-content-blog

                

                $(".page-content").html(html); // content loading
            });
        });
    }
}

AboutMeFunction = {

    init : function (){
        $(document).ready(function(){

            $('html, body').animate({ scrollTop: 0 }, 'fast');
            $('#page-selection').empty();

            var html = '<div class="blog-header">';
            html += '<h1 class="blog-title">Обо мне</h1>';
            html += '<p class="lead blog-description">Краткое описания о себе и роде моей деятельности</p>';
            html += '</div>';
            
            html += '<div class="col-sm-8 blog-main">';
            
                html += '<div class="blog-post">';
                html += '<h2 class="blog-post-title"> Заголовок </h2>';
                html += '<div class="blog-post-content">';
                html += '<p> Контент </p>'
                html += '</div>'
                html += '</div>';
            
            html += '</div>';

            $(".page-content").html(html); // content loading
        });
    } 
}

MyProjectsFunction = 
{   
    init : function initBlogFeed(){

        $(document).ready(function(){
            var res = db.exec("SELECT * FROM projectsTable")
            console.log(res[0].values.length);

            // init bootpag
            $('#page-selection').bootpag({
                total: res[0].values.length / 2,
                maxVisible: 5
            }).on("page", function(event, pageNumber){

                $('html, body').animate({ scrollTop: 0 }, 'fast');

                var countPage = pageNumber - 1;

                var posts = db.exec("SELECT * FROM postsTable WHERE id BETWEEN " + 
                (countPage + pageNumber) + 
                " AND " + 
                ((countPage + pageNumber) + 1))[0].values
                console.log(posts);

                var html = '<div class="row" id="main-content-blog">'

                html += '<div class="blog-header">';
                html += '<h1 class="blog-title">The Bootstrap Blog</h1>';
                html += '<p class="lead blog-description">The official example template of creating a blog with Bootstrap.</p>';
                html += '</div>'; //blog-header
                
                //<!-- Posts of blog -->
                
                html += '<div class="col-sm-8 blog-main">';
                $.each(posts, function (index, value) { 
                    html += '<div class="blog-post">';
                    html += '<h2 class="blog-post-title">'+ value[1] +'</h2>';
                    html += '<p class="blog-post-meta">' + value[2] + ' by <a onclick="AboutMeFunction.init()">'+ value[3] +'</a></p>';
                    html += '<div class="blog-post-content">';
                    html += value[4]
                    html += '</div>'
                    html += '</div>';
                });
                html += '</div>'; //blog-main
                html += '</div>'; //main-content-blog

                

                $(".page-content").html(html); // content loading
            });
        });
    }
}