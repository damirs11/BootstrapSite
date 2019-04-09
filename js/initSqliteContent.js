var db = new SQL.Database();

$(document).ready(function(){
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
      "VALUES ('Указатели',                                       'Что такое указатели',        date('now'),                  '~Dew',     '" + post_1.toString() + "')," + 
      "('Динамическая память в C',                                '',                           date('now','-2 months'),      '~Dew',     '" + post_2.toString() + "')," +
      "('Инструкция по использованию программы Cheat Engine',     'описание',                   date('now','-4 months'),      '~Dew',     '" + post_3.toString() + "')," +
      "('Пример формы с использованием BootStrap 3',              '',                           date('now','-6 months'),      '~Dew',     '" + post_4.toString() + "');" 


      var dbProjects_create = 
            "CREATE TABLE 'projectsTable' (" +
            "'id'             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
            "'title'          TEXT default NULL, " +
            "'picLocation'    TEXT default NULL," +
            "'mainText'       TEXT default NULL" +
      ");"
      var dbProjects_createData = 
      "INSERT INTO 'projectsTable' ('title','picLocation', 'mainText')" + 
      "VALUES     ('Реализация документооборота по средством JavaEE',   'assets/projects/1/mainpic.jpg',     '" + project_1.toString() + "')," + 
                  "('Internal чит с интерфейсом для CS:GO',             'assets/projects/2/mainpic.jpg',     '" + project_2.toString() + "');"

      
      db.run(dbBlog_create);
      db.run(dbBlog_createData);

      db.run(dbProjects_create);
      db.run(dbProjects_createData);


      var res = db.exec("SELECT * FROM postsTable");
      console.log(res);

      var res = db.exec("SELECT * FROM projectsTable");
      console.log(res);
});