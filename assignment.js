// feet To Mile (1st problem)
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}


// woodCalculator (2nd problem)
function woodCalculator(chair, table, khat){
    var isChair= chair*1;
    var isTable= table*3;
    var isKhat= khat*5;
    var resulte= isChair + isTable + isKhat;
    return resulte;
}
var result= woodCalculator(4, 4, 15);
console.log(result);


// brickCalculator (3rd problem)

function brickCalculator(storeBuilding){
    if(storeBuilding <= 10){
        var brick = storeBuilding*15*1000;
        return brick;
    }

else if(storeBuilding >= 11 && storeBuilding <= 20){
    var brick = 10*15*1000 + (storeBuilding - 10)*12*1000;
    return brick;
}
else if (storeBuilding >= 21){
    var brick = 10*15*1000 +10*12*1000 + (storeBuilding - 20)*10*1000;
    return brick;
}

}
 
var storeBuilding = 35;
var result = brickCalculator(storeBuilding);
console.log(result);



// tinyFriend (4th problem)

function tinyFriend(friendsName){
    var smallerName = friendsName[0];
    for( var i = 0 ; i < friendsName.length; i++){
    var currentName = friendsName[i];
    if(currentName.length < smallerName.length){
        smallerName = currentName;
    }
}
return smallerName;
}
var friendsName = ['urmita', 'moon', 'munni' ,'ma' , 'mim']
var smallestName = tinyFriend(friendsName);
console.log(smallestName);
