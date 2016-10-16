var container;
var camera, scene, renderer;
var group;

init();
animate();

function init() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, - 500, 1000 );
	camera.position.x = 200;
	camera.position.y = 100;
	camera.position.z = 200;

	scene = new THREE.Scene();
    group = new THREE.Group();
    scene.add(group);
/*
	// Grid

	var size = 500, step = 50;

	var geometry = new THREE.Geometry();

	for ( var i = - size; i <= size; i += step ) {

		geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
		geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );

		geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
		geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );

	}

	var material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } );

	var line = new THREE.LineSegments( geometry, material );
	scene.add( line );

	// Cubes

	var geometry = new THREE.BoxGeometry( 50, 50, 50 );
	var material = new THREE.MeshLambertMaterial( { color: 0xffffff, overdraw: 0.5 } );

	for ( var i = 0; i < 100; i ++ ) {

		var cube = new THREE.Mesh( geometry, material );

		cube.scale.y = Math.floor( Math.random() * 2 + 1 );

		cube.position.x = Math.floor( ( Math.random() * 1000 - 500 ) / 50 ) * 50 + 25;
		cube.position.y = ( cube.scale.y * 50 ) / 2;
		cube.position.z = Math.floor( ( Math.random() * 1000 - 500 ) / 50 ) * 50 + 25;

		scene.add( cube );

	}
*/

//-180, 0, 0, 0, 0, 0, 1
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo(  80, 20 );
    triangleShape.lineTo(  40, 80 );
    triangleShape.lineTo( 120, 80 );
    triangleShape.lineTo(  80, 20 ); // close path

    function drawFill(shape, color, x, y, z) {
        var geometry = new THREE.ShapeGeometry(shape);
    	var material = new THREE.MeshBasicMaterial( { color: color, overdraw: 0.5, side: THREE.DoubleSide } );
    	var mesh = new THREE.Mesh( geometry, material );
    	mesh.position.set(x, y, z);
    	group.add(mesh);

        console.log('added fill');
    }

    function drawOutline(shape, color, x, y, z) {
        var geometry = shape.createPointsGeometry();
    	geometry.vertices.push( geometry.vertices[ 0 ].clone() );
    	var material = new THREE.LineBasicMaterial( { linewidth: 10, color: color, transparent: true } );
    	var line = new THREE.Line( geometry, material );
    	line.position.set(x, y, z);
    	group.add( line );

        console.log('added outline');
    }

    function random(min, max) {
        // generate random integer
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateColor() {
        // generate color
        var color = new THREE.Color('rgb(' + random(0, 255) + ', ' + random(0, 255) + ', ' + random(0, 255) + ')');
        return color;
    }

    drawFill(triangleShape, generateColor(), 0, 0, 0);
    drawOutline(triangleShape, generateColor(), 0, 0, 0);
    drawFill(triangleShape, generateColor(), 100, 0, 0);
    drawOutline(triangleShape, generateColor(), 100, 0, 0);
/*
    var geometry = new THREE.ShapeGeometry(triangleShape);
	var material = new THREE.MeshBasicMaterial( { color: 0x000000, overdraw: 0.5 } );
	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.set(0, 0, 0);
	mesh.rotation.set(0, 0, 0);
	mesh.scale.set(1, 1, 1);
	group.add(mesh);

	var geometry = triangleShape.createPointsGeometry();
	geometry.vertices.push( geometry.vertices[ 0 ].clone() );
	var material = new THREE.LineBasicMaterial( { linewidth: 10, color: 0x333333, transparent: true } );
	var line = new THREE.Line( geometry, material );
	line.position.set(0, 0, 0);
	line.rotation.set(0, 0, 0);
	line.scale.set( 1, 1, 1 );
	group.add( line );*/

	// Lights

	var ambientLight = new THREE.AmbientLight( Math.random() * 0x10 );
	scene.add( ambientLight );

	var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
	directionalLight.position.x = Math.random() - 0.5;
	directionalLight.position.y = Math.random() - 0.5;
	directionalLight.position.z = Math.random() - 0.5;
	directionalLight.position.normalize();
	scene.add( directionalLight );

	var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
	directionalLight.position.x = Math.random() - 0.5;
	directionalLight.position.y = Math.random() - 0.5;
	directionalLight.position.z = Math.random() - 0.5;
	directionalLight.position.normalize();
	scene.add( directionalLight );

	renderer = new THREE.CanvasRenderer();
	renderer.setClearColor( 0xf0f0f0 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.left = window.innerWidth / - 2;
	camera.right = window.innerWidth / 2;
	camera.top = window.innerHeight / 2;
	camera.bottom = window.innerHeight / - 2;

	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function animate() {

	requestAnimationFrame( animate );

	render();

}

function render() {

	var timer = Date.now() * 0.0001;

	camera.position.x = Math.cos( timer ) * 200;
	camera.position.z = Math.sin( timer ) * 200;
	camera.lookAt( scene.position );

	renderer.render( scene, camera );

}
