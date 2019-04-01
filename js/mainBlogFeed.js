var initBlogFeed_status = false;
var initAboutMeFeed_status = false;
var initMyProjectsFeed_status = false;

BlogFunction = 
{   
    init : function initBlogFeed(){

        $(document).ready(function(){
            var res = db.exec("SELECT * FROM postsTable")
            console.log(res[0].values.length);

            initAboutMeFeed_status = false;
            initMyProjectsFeed_status = false;

            if(!initBlogFeed_status) //initFirstPage
            {   
                initBlogFeed_status = true;

                $('html, body').stop().animate({ scrollTop: 0 }, 'fast');

                var posts = db.exec("SELECT * FROM postsTable WHERE id BETWEEN " + 
                (0 + 1) + 
                " AND " + 
                ((0 + 1) + 1))[0].values;

                console.log(posts);

                var html = '<div class="row" id="main-content-blog">'

                html += '<div class="blog-header">';
                html += '<h1 class="blog-title">Последнии обновления</h1>';
                html += '<p class="lead blog-description">Добро пожаловать!</p>';
                html += '</div>'; //blog-header
                
                //<!-- Posts of blog -->
                
                html += '<div class="col-sm-8 blog-main">';
                $.each(posts, function (index, value) { 
                    html += '<div class="blog-post">';
                    html += '<h2 class="blog-post-title">'+ value[1] +'</h2>';
                    html += '<p class="blog-post-meta">' + value[3] + ' by <a onclick="AboutMeFunction.init()">'+ value[4] +'</a></p>';
                    html += '<div class="blog-post-content">';

                    if(value[5].length > 260){
                        html += value[5].slice(0, 260);
                        html += '... <hr><a onclick="BlogFunction.generatePost('+ value[0] +'); BlogFunction.delete();" name="#main/' + value[0] + '" href="#main/' + value[0] + '">Продолжение...</a>';
                    }
                    else
                        html += value[5];

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

                $('html, body').stop().animate({ scrollTop: 0 }, 'fast');

                var countPage = pageNumber - 1;

                var posts = db.exec("SELECT * FROM postsTable WHERE id BETWEEN " + 
                (countPage + pageNumber) + 
                " AND " + 
                ((countPage + pageNumber) + 1))[0].values
                console.log(posts);

                var html = '<div class="row" id="main-content-blog">'

                html += '<div class="blog-header">';
                html += '<h1 class="blog-title">Последнии обновления</h1>';
                html += '<p class="lead blog-description">Добро пожаловать!</p>';
                html += '</div>'; //blog-header
                
                //<!-- Posts of blog -->
                
                html += '<div class="col-sm-8 blog-main">';
                $.each(posts, function (index, value) { 
                    html += '<div class="blog-post">';
                    html += '<h2 class="blog-post-title">'+ value[1] +'</h2>';
                    html += '<p class="blog-post-meta">' + value[2] + ' by <a onclick="AboutMeFunction.init()">'+ value[3] +'</a></p>';
                    html += '<div class="blog-post-content">';

                    if(value[5].length > 260){
                        html += value[5].slice(0, 260);
                        html += '... <hr><a onclick="BlogFunction.generatePost('+ value[0] +'); BlogFunction.delete();" name="#main/' + value[0] + '" href="#main/' + value[0] + '">Продолжение...</a>';
                    }
                    else
                        html += value[5];

                    html += '</div>'
                    html += '</div>';
                });
                html += '</div>'; //blog-main
                html += '</div>'; //main-content-blog

                

                $(".page-content").html(html); // content loading
            });
        });
    },

    reset : function resetBootpage(){
        $('ul.bootpag>li').not('.prev').first().trigger('click');
    },

    delete : function deleteBootpage(){
        $("#page-selection").empty();
    },

    generatePost : function generatePost(id){
        console.log("Генерация...")

        initBlogFeed_status = false;

        $('html, body').stop().animate({ scrollTop: 0 }, 'fast');

        var posts = db.exec("SELECT * FROM postsTable WHERE id = " + id)[0].values;
        console.log(posts);

        var html = '<div class="row" id="main-content-blog">'


        html += '<div class="col-sm-8 blog-main">';
        $.each(posts, function (index, value) { 
            html += '<div class="blog-post">';
            html += '<h2 class="blog-title">'+ value[1] +'</h2>';
            html += '<p class="lead blog-description">'+ value[2] +'</p>'
            html += '<p class="blog-post-meta">' + value[3] + ' by <a onclick="AboutMeFunction.init()">'+ value[4] +'</a></p>';
            html += '<div class="blog-post-content">';

            html += value[5];

            html += '</div>'
            html += '</div>';
        });
        html += '</div>'; //blog-main
        html += '</div>'; //main-content-blog
        
        $(".page-content").html(html); // content loading
    }
}

AboutMeFunction = {

    init : function (){
        $(document).ready(function(){

            initBlogFeed_status = false;
            initMyProjectsFeed_status = false;

            initAboutMeFeed_status = true;

            $('html, body').stop().animate({ scrollTop: 0 }, 'fast');
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
    },
    reset : function resetBootpage(){
        $('ul.bootpag>li').not('.prev').first().trigger('click');
    },

    generatePost : function generatePost(){
        
    }
}

MyProjectsFunction = 
{   
    init : function initBlogFeed(){

        $(document).ready(function(){
            var res = db.exec("SELECT * FROM projectsTable")
            console.log(res[0].values.length);

            initBlogFeed_status = false;
            initAboutMeFeed_status = false;

            if(!initBlogFeed_status) //initFirstPage
            {   
                initMyProjectsFeed_status = true;

                $('html, body').stop().animate({ scrollTop: 0 }, 'fast');

                var posts = db.exec("SELECT * FROM projectsTable WHERE id BETWEEN " + 
                (0 + 1) + 
                " AND " + 
                ((0 + 1) + 1))[0].values;

                console.log(posts);

                var html = '<div class="row" id="main-content-blog">'

                html += '<div class="blog-header">';
                html += '<h1 class="blog-title">The Bootstrap Blog</h1>';
                html += '<p class="lead blog-description">The official example template of creating a blog with Bootstrap.</p>';
                html += '</div>'; //blog-header
                
                html += '<div class="col-sm-8 blog-main">';
                $.each(posts, function (index, value) { 
                    html += '<div class="blog-post">';
                    html += '<h2 class="blog-post-title">'+ value[1] +'</h2>';
                    html += '<img alt="путь к картинке" src="'+ value[2] +'"></img>';
                    html += '<div class="blog-post-content">';

                    console.log(value[3].length);

                    if(value[3].length > 140){
                        html += value[3].slice(0, 140);
                        html += '... <hr><a href="#">Продолжение...</a>';
                    }
                    else
                        html += value[3];

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

                $('html, body').stop().animate({ scrollTop: 0 }, 'fast');

                var countPage = pageNumber - 1;

                var posts = db.exec("SELECT * FROM projectsTable WHERE id BETWEEN " + 
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
                    html += '<img alt="путь к картинке">'+ value[2] +'</img>';
                    html += '<div class="blog-post-content">';

                    if(value[3].length > 140){
                        html += value[3].slice(0, 140);
                        html += '... <hr><a href="#">Продолжение...</a>';
                    }
                    else
                        html += value[3];


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