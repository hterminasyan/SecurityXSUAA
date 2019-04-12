/*eslint no-console: 0, no-unused-vars: 0, dot-notation: 0, no-use-before-define: 0, no-redeclare: 0*/
"use strict";

/**
@param {connection} Connection - The SQL connection used in the OData request
@param {beforeTableName} String - The name of a temporary table with the single entry before the operation (UPDATE and DELETE events only)
@param {afterTableName} String -The name of a temporary table with the single entry after the operation (CREATE and UPDATE events only)
*/

function create_insert(param) {
   $.trace.debug("entered function");
  /* let after = param.afterTableName;
   let pStmt = param.connection.prepareStatement('select * from "'+ after '"');
   if(pStmt) {
   	pStmt.connection.executeUpdate('INSERT INTO "SecurityTest.db::TEST.SECURITY" VALUES (?,?)', 10, 'fa');
   } else {
   	throw "an error occured"
   }*/
   
	var connection = $.hdb.getConnection();
	connection.executeUpdate('INSERT INTO "SecurityTest.db::TEST.SECURITY" VALUES (?,?)', 12, 'fas');
	connection.commit();

}