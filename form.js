class Form{
    constructor(){
        this.inputbox=createInput();
        this.playbutton=createButton("Play");
        this.greeting=createElement("h2");
    }

    //our function
    hidden(){
        this.inputbox.hide();
        this.playbutton.hide();
        this.greeting.hide()
    }
    
    //our function
    display(){
        var title=createElement("h1");
        title.html("Car racing game");
        title.position(130,0);

       this.inputbox.position(330,160);
    
       this.playbutton.position(350,200);        
       this.playbutton.mousePressed(()=>{

            //fetch the name entered by the player
            player.name=this.inputbox.value();
            this.inputbox.hide();
            this.playbutton.hide();

            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
        
            this.greeting.html("Hello "+player.name);
            this.greeting.position(330,160);
        });
        
    }
    
}
