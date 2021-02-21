//empty constructor
//to get gameState value from database and put it in variable gameState
//to update gameState in database with the value
//start with initial game 

class Game{
    constructor(){
    }
 
    //get gamestate from database
    getState(){
        var gameStateRef=database.ref("gameState");

        //anonymous function
        gameStateRef.on("value",function(data){
            gameState=data.val();
        });
    }


    //update gameState in database
    updateState(state){
        database.ref("/").update({
            gameState:state
        });
    }



    //starting part of game
    start(){
        if(gameState==0){
            //create a new player, show a form, input player name and register in database .
            player=new Player();

            //get playerCount
            player.getCount();

            //show new form
            form=new Form();
            form.display();
        }
    }


    //play when all 4 have registered and gamestate become 1            
    play(){
        form.hidden();
        textSize(30);
        text("Game start",230,100);

        //fetch all players info and display name,distance 
        Player.getPlayersInfo();

        if(allPlayers!=undefined){
            var display_position=130;
            for(var plr in allPlayers){
                display_position+=20;
                textSize(15);
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);
                
            }
        }
        console.log(player.index)
        if(keyIsDown(UP_ARROW) && player.index!=null){
            player.distance+=50;
            player.update();
            console.log(player.distance);
        }

    }
}