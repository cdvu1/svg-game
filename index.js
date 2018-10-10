"use-script";

        var svg = document.getElementById("game");
        var player = svg.children[0];
        var enemy = svg.children[1];
        var scoreElement = svg.children[2];
        var score = 0;
        
        function positionEnemy() {
            enemy.setAttribute("cx", Math.random() * window.innerWidth);
            enemy.setAttribute("cy", Math.random() * window.innerHeight);
        }        
    
        function destoryEnemy() {
            score += 10;
            scoreElement.textContent = "Score: " + score;
            positionEnemy();
        }
        
        window.addEventListener("mousemove", hitTest);
        
        function hitTest(e) {
        player.setAttribute("cx", e.clientX);
        player.setAttribute("cy", e.clientY);
        
            var playerBox = player.getBBox();
            var enemyBox = enemy.getBBox();
            
            
            if (playerBox.x + playerBox.width >= enemyBox.x &&
               playerBox.x < enemyBox.x + enemyBox.width) {
                
                 if (playerBox.y + playerBox.height >= enemyBox.y &&
               playerBox.y < enemyBox.y + enemyBox.height) {
                
                destoryEnemy();
                
                } 
            }
        }  