var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database.db');
 
db.serialize(function() {
  db.run("CREATE TABLE order_entity_transaction (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, order_id  NUMBER, item_number NUMBER, item_name TEXT, quantity NUMBER, price NUMBER");
 
  /*
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) 
  {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
  */
});
 
db.close();