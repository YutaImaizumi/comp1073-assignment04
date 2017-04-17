(function(window){
        var cj = createjs,
            stage, bitmap, text;
 
        function init() {
            stage = new cj.Stage('banner01');


            bitmap1 = new cj.Bitmap('http://yuta-pf.azurewebsites.net/mypf-4/Assets/base1.jpg');
            bitmap1.y = 0;
            bitmap1.x = 0;
            stage.addChild(bitmap1);
            stage.update();


            bitmap3 = new cj.Bitmap('http://yuta-pf.azurewebsites.net/mypf-4/Assets/basae2.jpg');
            bitmap3.y = -60;
            bitmap3.x = 0;
            stage.addChild(bitmap3);
            stage.update();

            

 
            bitmap2 = new cj.Bitmap('http://yuta-pf.azurewebsites.net/mypf-4/Assets/logo.jpg');
            bitmap2.y = 0;
            bitmap2.x = 358;
            stage.addChild(bitmap2);
            stage.update();

            

 
            var t = new cj.Text("Cute, Trad, Japanese Candies", "24px sans-serif", "black");
            t.textAlign = "start";
            t.y = 17;
            t.x = 5;
            stage.addChild(t);
            stage.update();


            var t2 = new cj.Text("Homemade, Sweet, Try this!", "24px sans-serif", "black");
            t2.textAlign = "start";
            t2.y = -43;
            t2.x = 5;
            stage.addChild(t2);
            stage.update();


            createjs.Ticker.addEventListener("tick", handleTick);
            function handleTick(){

                bitmap1.y += 0.2;
                bitmap3.y += 0.2;
                t.y += 0.2;
                t2.y += 0.2;
                stage.update();
            }


        }


 
        window.addEventListener('load', function(){
            window.removeEventListener('load', arguments.callee);
 
            init();
        }, false);
    }(window));