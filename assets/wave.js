var canvas, ctx;
var vertexes = [];
var diffPt = [];
var autoDiff = 1000;
var verNum = 250;
var canvasW = window.innerWidth+40;

var addListener = function( e, str, func ) {
    if (e.addEventListener) {
        e.addEventListener( str, func, false );
    }
    else if (e.attachEvent) {
        e.attachEvent( "on" + str, func );
    }
};

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

function resize(){
    canvasW = document.body.offsetWidth + 40;   
    if (isMobile) {
        document.getElementById("first").style.height = window.outerHeight + "px"
        document.getElementById("second").style.height = window.outerHeight + "px"
        document.getElementById("intro").style.height = window.outerHeight * 0.4 + "px" 
        document.getElementById("water").style.height = window.outerHeight * 0.6 + "px"
        initCanvas(canvasW, window.outerHeight);
    } 
    else {
        initCanvas(canvasW, window.innerHeight);
    }
    var cW = canvas.width;
    var cH = canvas.height;
    for(var i = 0;i < verNum;i++)
        vertexes[i] = new Vertex(cW / (verNum -1) * i , cH / 2, cH / 2);
    initDiffPt();
}

function init() {
    resize();
    var FPS = 30;
    var interval = 1000 / FPS >> 0;
    var timer = setInterval( update, interval );
    if (!isMobile)
        addListener(window, "resize", resize);

    // var waves = setInterval( function() {
    //     autoDiff = 1000;
    // }, 5000)
    
    canvas.onclick = function(e) {
        var mouseX, mouseY;
        if (e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        }
        else {
            mouseX = event.x + document.body.scrollLeft;
            mouseY = event.y + document.body.scrollTop;
        }
        
        if (canvas.height/2 - mouseY < 80 && canvas.height/2 - mouseY > -80) {
            autoDiff = 1000;
            if (mouseX < canvas.width - 2) {
                xx = 1 + Math.floor((verNum - 2) * mouseX / canvas.width);
                diffPt[xx] = autoDiff;
            }
            
        }
    }
}

function initDiffPt(){
    for (var i = 0; i < verNum; i++)
        diffPt[i] = 0;
}
var xx = 150;
var dd = 15;

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    autoDiff -= autoDiff*0.9;
    diffPt[xx] = autoDiff;
    for (var i = xx - 1; i > 0; i--) {
        var d = xx - i;
        if (d > dd) 
            d = dd;
        diffPt[i] -= (diffPt[i]-diffPt[i+1])*(1-0.01*d);
    }
    for (var i = xx + 1; i < verNum; i++) {
        var d = i - xx;
        if (d > dd) 
            d = dd;
        diffPt[i] -= (diffPt[i]-diffPt[i-1])*(1-0.01*d);
    }
    
    for (var i = 0; i < vertexes.length; i++) {
        vertexes[i].updateY(diffPt[i]);
    }

    draw();
    
}

var color1 = "#00d0e1";
var color2 = "#00c3df";

function draw() {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.fillStyle = color1;
    ctx.lineTo(vertexes[0].x, vertexes[0].y);

    for(var i = 1; i < vertexes.length; i++) {
        ctx.lineTo(vertexes[i].x,vertexes[i].y);
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.fillStyle = color2;
    ctx.lineTo(vertexes[0].x + 15, vertexes[0].y + 5);

    for(var i = 1; i < vertexes.length; i++){
        ctx.lineTo(vertexes[i].x + 15, vertexes[i].y + 5);
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.fill();
}

function initCanvas(width,height) {
    canvas = document.getElementById("canvas");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");

    // set color2 as gradient
    color2 = ctx.createLinearGradient(0, 0, 0, height);
    color2.addColorStop(0, "#00e1a3");
    color2.addColorStop(0.25, "#00e1b9");
    color2.addColorStop(0.50, "#00e1d0");
    color2.addColorStop(0.75, "#00d0e1");
    color2.addColorStop(1, "#00c3df");

}
    
function Vertex(x,y,baseY) {
    this.baseY = baseY;
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.targetY = 0;
    this.friction = 0.15;
    this.deceleration = 0.95;
}
    
Vertex.prototype.updateY = function(diffVal) {
    this.targetY = diffVal + this.baseY;
    this.vy += this.targetY - this.y
    this.y += this.vy * this.friction;
    this.vy *= this.deceleration;
}

var scene, camera, renderer;
var terrain, geometry, data, material;
var worldWidth, worldHeight, gridSize;
var fadeIn = 0;
var background = 0x00c3df;
var surface = 0x006f91;

/*
* 	Deep
*/
function initDeep() {
    
    setupScene();
    
    createShader();
    
    createTerrain();
        
    setupEventListeners();
    
    render();
        
}

function setupScene() {

    var w, h;

    if (isMobile) {
        w = window.outerWidth
        h = window.outerHeight
    }
    else {
        w = window.innerWidth
        h = window.innerHeight
    }
    
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 60, (w-256) / h, 1, 20000 );

    renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize( w, h );
    renderer.setClearColor( background, 1 );
    document.querySelector("#second").appendChild( renderer.domElement );		
    
}


function createShader() {
    material = new THREE.MeshBasicMaterial({ color: surface });
}



function createTerrain() {
        
    gridSize = 128;
    worldWidth = 5000;
    worldHeight = 5000;

    geometry = new THREE.PlaneGeometry( worldWidth, worldHeight, gridSize-1, gridSize-1 );
    geometry.applyMatrix( new THREE.Matrix4().makeRotationX( Math.PI / 2 ) );

    data = [];
    var highestPoint = 0;
    var inc = 0;
    for (var x = 0; x < gridSize; x++) {
        data.push([]);
    
        for (var y = 0; y < gridSize; y++) {
            data[x].push(getval(x,y));
            geometry.vertices[ inc ].y = data[x][y];
            if (data[x][y] > highestPoint) highestPoint = data[x][y];
            inc++;
        }
        
    }
    
    camera.position.y = 500;
    camera.position.x = -worldHeight/2;
    camera.lookAt( new THREE.Vector3(0,0,0));

    terrain = new THREE.Mesh( geometry, material );
    terrain.position.y = 250;
    scene.add( terrain );

    scene.fog = new THREE.FogExp2(background, .001);
    
};



function getval(x,y) {
    var val = 0;
    
    val = Math.random()*25;
    val += (Math.sin((x*2)/gridSize) * 5);
    
    return val;
}
    
function updateTerrain() {
    
    var inc = 0;
    
    for (var x = 0; x < gridSize; x++) {
        for (var y = gridSize; y > 0; y--) {
        
            if (y==1) {
                data[x][y] = getval(x,y);
            } 
            else {
                data[x][y] = data[x][y-1];
            }
        
            geometry.vertices[ inc ].y = data[x][y];// * fadeIn;
            inc++;
        }
    }

    geometry.verticesNeedUpdate = true;
    
}
    
function setupEventListeners() {
    
    if (!isMobile) {
        window.addEventListener('resize', function () {
            renderer.setSize( window.innerWidth, window.innerHeight );
            camera.aspect	= window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
        });
    
        window.addEventListener('mousemove', function (e) {
        
            var y = 200 * (e.y / (window.innerHeight));
            var z = 200 * (e.x / (window.innerWidth));
            if ( y > 200) y = 200;
            camera.position.y = y;
            camera.position.z = z;
        
        });
    }  
}
              

/*
    * 	Render loop
    */
function render () {
    
    requestAnimationFrame( render );

    terrain.position.x -= 5;
    
    if (terrain.position.x < -(worldWidth / gridSize)) {
        terrain.position.x += (worldWidth / gridSize);
        updateTerrain();
    }
    

    renderer.render(scene, camera);
    
};

      
addListener( window, "load", init );
addListener( window, "load", initDeep );
