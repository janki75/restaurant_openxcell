var db=require('../dbconnection');
var rc={
getcuisinename(id,callback)
{
    return db.query('select c.c_name FROM restaurant r join res_cuisine_tbl rc on rc.res_id=r.r_id join cuisine_tbl c on c.c_id=rc.c_id WHERE r.r_id=?',[id],callback)
},
insert(item,callback)
{
    return db.query('insert into res_cuisine_tbl(c_id,res_id) values(?,?)',[item.c_id,item.res_id],callback);
},

getAllcuisine(callback)
{
    return db.query("select * from cuisine_tbl",callback);
}
}
module.exports=rc;