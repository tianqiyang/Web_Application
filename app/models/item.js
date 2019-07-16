function createPerson(){
    var itemName;
    var itemPrice;
    var returnObj = {
        "getFirstName": function (){
            return firstName;
        },
        "getLastName": function(){
            return lastName;
        },
        "setFirstName": function (name){
            firstName = name;
        },
        "setLastName": function(name){
            lastName = name;
        }
    };
    return returnObj;
}
