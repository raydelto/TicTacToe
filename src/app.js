var HelloWorldLayer = cc.Layer.extend({
    sprite : null,
    pieza : null,
    size : null,
    tabla : [],
    turno : "X",
    jugadas : 0,
    
    check : function (event) {
        var juego = event.getCurrentTarget();
        var arr = juego.tabla;
        console.log(arr);
        
        if(arr[0]===arr[1] && arr[1]===arr[2]){
            return arr[0];
        } else if (arr[3]===arr[4] && arr[4]===arr[5]) {
            return arr[3];
        } else if (arr[6]===arr[7] && arr[7]===arr[8]) {
            return arr[6];
        } else if (arr[0]===arr[3] && arr[3]===arr[6]) {
            return arr[0];
        } else if (arr[1]===arr[4] && arr[4]===arr[7]) {
            return arr[1];
        } else if (arr[2]===arr[5] && arr[5]===arr[8]) {
            return arr[2];
        } else if (arr[0]===arr[4] && arr[4]===arr[8]) {
            return arr[0];
        } else if (arr[6]===arr[4] && arr[4]===arr[2] ){
            return arr[2];
        }
        if(juego.jugadas>=9){
            return "tie";
        }
        return 0;
    },
    
    RealizarJugada : function(location, event)
    {
        var evento = event.getCurrentTarget();
		var jugadores = ["X", "O"];
        var ubicacion = location.getLocation();
        var x = ubicacion.x;
        var y = ubicacion.y;
        evento.turno = jugadores[evento.jugadas%2];

        if(x >= 342 && x < 433 && y >= 323 && y < 426 && evento.tabla[0]==null){
            evento.asignarPos(385,376,evento.turno);
            evento.tabla[0]=evento.turno;
            evento.jugadas++;
        }else if(x >= 433 && x < 526 && y >= 323 && y < 426 && evento.tabla[1]==null){
            evento.asignarPos(481,376,evento.turno);
            evento.tabla[1]=evento.turno;
             
            evento.jugadas++;
        }else if(x >= 526 && x < 615 && y >= 323 && y < 426 && evento.tabla[2]==null){
            evento.asignarPos(580,376,evento.turno);
            evento.tabla[2]=evento.turno;
             
            evento.jugadas++;
        }else if(x >= 342 && x < 433 && y >= 221 && y < 323 && evento.tabla[3]==null){
            evento.asignarPos(385,266,evento.turno);
            evento.tabla[3]=evento.turno;
             
            evento.jugadas++;
        }else if(x >= 433 && x < 526 && y >= 221 && y < 323 && evento.tabla[4]==null){
            evento.asignarPos(481,266,evento.turno);
            evento.tabla[4]=evento.turno;
            evento.jugadas++;
        }else if(x >= 526 && x < 615 && y >= 221 && y < 323 && evento.tabla[5]==null){
            evento.asignarPos(580,266,evento.turno);
            evento.tabla[5]=evento.turno;
             
            evento.jugadas++;
        }else if(x >= 342 && x < 433 && y >= 116 && y < 221 && evento.tabla[6]==null){
            evento.asignarPos(385,168,evento.turno);
            evento.tabla[6]=evento.turno;
             
            evento.jugadas++;
        }else if(x >= 433 && x < 526 && y >= 116 && y < 221 && evento.tabla[7]==null){
            evento.asignarPos(481,168,evento.turno);
            evento.tabla[7]=evento.turno;
             evento.jugadas++;
        }else if(x >= 526 && x < 615 && y >= 116 && y < 221 && evento.tabla[8]==null){
            evento.asignarPos(580,168,evento.turno);
            evento.tabla[8]=evento.turno;
             evento.jugadas++;
        }
       
        var ganador = evento.check(event);
        if(ganador==="X") {
            alert("Ha ganado el jugador X");
            
            }
        if(ganador==="O") {
            alert("Ha ganado el jugador O");
            
            }
        if(ganador==="tie"){
            alert("han empatado");
        }
        
    },
    
    asignarPos : function(x,y,turn){
        if(turn=="X"){
            piezas = new cc.Sprite(res.X_png);
        }else if(turn=="O"){
            piezas = new cc.Sprite(res.O_png);
        }
        piezas.setPosition(x,y);
        this.addChild(piezas, 1);
},
    
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("TicTacToe", "BOLDfinger", 38);
         // position the label on the center of the screen
         helloLabel.x = size.width / 2;
         helloLabel.y = size.height / 2 + 190;

         // add the label as a child to this layer
         this.addChild(helloLabel, 1);
        

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.tablero_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
        });
        this.addChild(this.sprite, 0);
        
        cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			onTouchBegan: this.RealizarJugada
			
		}, this);
        
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});