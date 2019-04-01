var db = new SQL.Database();

$(document).ready(function(){

      var dbtest_create = 
            "CREATE TABLE 'myTable' (" +
            "'id'       INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
            "'name'     varchar(255) default NULL," +
            "'company'  varchar(255)," +
            "'email'    varchar(255) default NULL" +
      ");"
      var dbtest_createData = 
      "INSERT INTO 'myTable' ('name','company','email') VALUES ('Cade','Pellentesque Associates','sociis.natoque.penatibus@adipiscingelitAliquam.ca'),('Basil','Vitae Risus Duis Consulting','mauris.id@Phasellusfermentum.com'),('Marvin','Pellentesque Habitant Morbi Ltd','elit.pretium.et@miDuis.co.uk'),('Carlos','Faucibus Leo In Inc.','dui@aliquamiaculislacus.com'),('Bert','Placerat Limited','luctus@ornaretortorat.com'),('Devin','Cum Sociis Natoque Inc.','enim.diam.vel@dictummiac.com'),('Rahim','Dictum Augue Limited','Donec@aptenttaciti.org'),('Jermaine','Risus Ltd','adipiscing.elit@tristiquepellentesque.co.uk'),('Julian','Faucibus Orci PC','Sed.et.libero@Sedeget.ca'),('Keaton','Interdum Sed Consulting','Donec.feugiat.metus@porttitor.com');"

      var dbBlog_create = 
            "CREATE TABLE 'postsTable' (" +
            "'id'       INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
            "'title'    TEXT default NULL, " +
            "'article'  TEXT default NULL, " +
            "'date'     TEXT," +
            "'author'   TEXT default NULL," +
            "'mainText' TEXT default NULL" +
      ");"
      var dbBlog_createData = 
      "INSERT INTO 'postsTable' ('title', 'article','date', 'author', 'mainText')" + 
      "VALUES ('Указатели',         'Что такое указатели',        date('now'),       '~Dew',     '" + post_1.toString() + "')," + 
      "('Динамическая память в C',             '',        date('now','-2 months'),      '~Dew',     '" + post_2.toString() + "')," + 
      "('TitleOfBlog3',             'описание',        date('now','-4 months'),      '~Dew',     'Третья провека рабоыт текста с date(now - 4 месяца)')," + 
      "('TitleOfBlog4',             'описание',        date('now','-6 months'),      '~Dew',     'Четвертая провека рабоыт текста с date(now - 6 месяца)');"

      var dbProjects_create = 
            "CREATE TABLE 'projectsTable' (" +
            "'id'             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
            "'title'          TEXT default NULL, " +
            "'picLocation'    TEXT default NULL," +
            "'mainText'       TEXT default NULL" +
      ");"
      var dbProjects_createData = 
      "INSERT INTO 'projectsTable' ('title','picLocation', 'mainText')" + 
      "VALUES ('TitleOfBlog1',            'assets/Logo.jpg',     'Первая провека рабоыт текста')," + 
      "('TitleOfBlog2',                   'path/to/pic',     'Вторая провека рабоыт текста')," + 
      "('TitleOfBlog3',                   'path/to/pic',     'Третья провека рабоыт текста')," + 
      "('TitleOfBlog4',                   'path/to/pic',     'Четвертая провека рабоыт текста');"

      db.run(dbtest_create);
      db.run(dbtest_createData);

      db.run(dbBlog_create);
      db.run(dbBlog_createData);

      db.run(dbProjects_create);
      db.run(dbProjects_createData);



      var res = db.exec("SELECT * FROM myTable");
      console.log(res);

      var res = db.exec("SELECT * FROM postsTable");
      console.log(res);

      var res = db.exec("SELECT * FROM projectsTable");
      console.log(res);
});