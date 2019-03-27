var db = new SQL.Database();

$(document).ready(function(){

      var dbtestcreate = 
            "CREATE TABLE 'myTable' (" +
            "'id'       INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
            "'name'     varchar(255) default NULL," +
            "'company'  varchar(255)," +
            "'email'    varchar(255) default NULL" +
      ");"
      var dbtestcreate_Data = 
      "INSERT INTO 'myTable' ('name','company','email') VALUES ('Cade','Pellentesque Associates','sociis.natoque.penatibus@adipiscingelitAliquam.ca'),('Basil','Vitae Risus Duis Consulting','mauris.id@Phasellusfermentum.com'),('Marvin','Pellentesque Habitant Morbi Ltd','elit.pretium.et@miDuis.co.uk'),('Carlos','Faucibus Leo In Inc.','dui@aliquamiaculislacus.com'),('Bert','Placerat Limited','luctus@ornaretortorat.com'),('Devin','Cum Sociis Natoque Inc.','enim.diam.vel@dictummiac.com'),('Rahim','Dictum Augue Limited','Donec@aptenttaciti.org'),('Jermaine','Risus Ltd','adipiscing.elit@tristiquepellentesque.co.uk'),('Julian','Faucibus Orci PC','Sed.et.libero@Sedeget.ca'),('Keaton','Interdum Sed Consulting','Donec.feugiat.metus@porttitor.com');"

      var dbBlogcreate = 
            "CREATE TABLE 'postsTable' (" +
            "'id'       INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
            "'title'    TEXT default NULL, " +
            "'date'     TEXT," +
            "'author'   TEXT default NULL," +
            "'mainText' TEXT default NULL" +
      ");"
      var dbBlogcreate_Data = 
      "INSERT INTO 'postsTable' ('title','date', 'author', 'mainText')" + 
      "VALUES ('TitleOfBlog1',      date('now'),                  '~Dew',     'Первая провека рабоыт текста с date(now)')," + 
      "('TitleOfBlog2',             date('now','-2 months'),      '~Dew',     'Вторая провека рабоыт текста с date(now - 2 месяца)')," + 
      "('TitleOfBlog3',             date('now','-4 months'),      '~Dew',     'Третья провека рабоыт текста с date(now - 4 месяца)')," + 
      "('TitleOfBlog4',             date('now','-6 months'),      '~Dew',     'Четвертая провека рабоыт текста с date(now - 6 месяца)');"

      db.run(dbtestcreate);
      db.run(dbtestcreate_Data);

      db.run(dbBlogcreate);
      db.run(dbBlogcreate_Data);



      var res = db.exec("SELECT * FROM myTable");
      console.log(res);

      var res = db.exec("SELECT * FROM postsTable");
      console.log(res);
});