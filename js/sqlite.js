var db = new SQL.Database();

$(document).ready(function(){

      var dbcreate = 
            "CREATE TABLE 'myTable' (" +
            "'id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
            "'name' varchar(255) default NULL," +
            "'company' varchar(255)," +
            "'email' varchar(255) default NULL" +
      ");"

      var dataForDB = 
      "INSERT INTO 'myTable' ('name','company','email') VALUES ('Cade','Pellentesque Associates','sociis.natoque.penatibus@adipiscingelitAliquam.ca'),('Basil','Vitae Risus Duis Consulting','mauris.id@Phasellusfermentum.com'),('Marvin','Pellentesque Habitant Morbi Ltd','elit.pretium.et@miDuis.co.uk'),('Carlos','Faucibus Leo In Inc.','dui@aliquamiaculislacus.com'),('Bert','Placerat Limited','luctus@ornaretortorat.com'),('Devin','Cum Sociis Natoque Inc.','enim.diam.vel@dictummiac.com'),('Rahim','Dictum Augue Limited','Donec@aptenttaciti.org'),('Jermaine','Risus Ltd','adipiscing.elit@tristiquepellentesque.co.uk'),('Julian','Faucibus Orci PC','Sed.et.libero@Sedeget.ca'),('Keaton','Interdum Sed Consulting','Donec.feugiat.metus@porttitor.com');"

      

      db.run(dbcreate);
      db.run(dataForDB);

      var res = db.exec("SELECT * FROM myTable");

      console.log(res);

      function ArrayToBinString (arr) {
            var uarr = new Uint8Array(arr);
            var strings = [], chunksize = 0xffff;
            // There is a maximum stack size. We cannot call String.fromCharCode with as many arguments as we want
            for (var i=0; i*chunksize < uarr.length; i++){
                  strings.push(String.fromCharCode.apply(null, uarr.subarray(i*chunksize, (i+1)*chunksize)));
            }
            return strings.join('');
      }

      function StrToBinArray (str) {
            var l = str.length,
            arr = new Uint8Array(l);
            for (var i=0; i<l; i++) arr[i] = str.charCodeAt(i);
            return arr;
      }
});