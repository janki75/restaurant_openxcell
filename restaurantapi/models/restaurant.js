var db=require('../dbconnection');
var restaurant={

    getAllRestaurants(callback)
    {
        return db.query("select * from restaurant",callback);
    },
    getRestaurantById(id,callback)
    {
        return db.query("select * from restaurant where r_id=?",[id],callback);
    },
    creatRestaurant(item,filename,callback)
    {
        return db.query('insert into restaurant(r_name,r_city,r_area,r_contactno,r_start_time,r_end_time,r_img) values(?,?,?,?,?,?,?)',[item.r_name,item.r_city,item.r_area,item.r_contactno,item.r_start_time,item.r_end_time,filename],callback)
    },
    searchByRestaurantName(name,callback)
    {
        return db.query('select * from restaurant where lower(r_name)=?',[name],callback);
    },
    searchBycity(name,callback)
    {
        return db.query('select * from restaurant where lower(r_city)=?',[name],callback);
    },

}
module.exports=restaurant;