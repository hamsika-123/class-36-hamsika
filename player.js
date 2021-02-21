//fetch playerCount
//update name in database
//update new playerCount in database

class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.distance=0;
    }

    getCount(){
       
            var playerCountRef=database.ref("playerCount");
    
            //anonymous function
            playerCountRef.on("value",function(data){
                playerCount=data.val();
            });
    }

    
    //update playerName and distance in database
    update(){
        var playerIndex="players/player"+playerCount;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        });
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        });
    }


    //fetch all players info and store in a variable allPlayers
    static getPlayersInfo(){
        var playerInfoRef=database.ref("players");
        playerInfoRef.on("value",function(data){
            allPlayers=data.val();
        });

    }

}