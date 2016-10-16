var visualizer = {
    width: 0,
    height: 0,
    points: [],
    polys: [],
    displayPolys: [],
    opacity: 0,
    fadingOut: false,
    left: true,
    range: {
        x: {
            min: 0,
            max: 0
        },
        y: {
            min: 0,
            max: 0
        }
    },
    config: {
        connections: 5,
        points: 30
    },
    wait: 300,
    style: 1,
    init: firstTime,
    update: updateOptions
}

function updateOptions(connections, points, wait, style) {
    visualizer.config.connections = connections;
    visualizer.config.points = points;
    visualizer.wait = wait;
    visualizer.style = style;
    visualizer.fadingOut = true;
}

function resize() {
    visualizer.width = view.size.width;
    visualizer.height = view.size.height;
}

function firstTime() {
    paper.install(window);
    var canvas = document.getElementById('visualizerCanvas');
    paper.setup(canvas);
    resize();
    init();
}

function init() {
    setRange();

    visualizer.points = [];
    visualizer.polys = [];
    visualizer.displayPolys = [];

    for(var i = 0; i < visualizer.config.points; i++) {
        var newPoint = new Point(0, 0);
        visualizer.points.push({
            id: uuid(),
            point: newPoint
        });
    }

    generatePoints();

    for(var i = 0; i < visualizer.points.length; i++) {
        var currPoint = visualizer.points[i];
        var newPoly = createPoly(currPoint);
        visualizer.polys.push(newPoly);
    }

    convertToDisplayPolys();

    drawPolys();

    view.draw();
    view.onFrame = onFrame;
    view.onResize = resize;
    frames = 0;
}

function setRange() {
    visualizer.range.x.min = 0 * visualizer.width;
    visualizer.range.y.min = 0 * visualizer.height;
    visualizer.range.x.max = 1 * visualizer.width;
    visualizer.range.y.max = 1 * visualizer.height;
}

function generatePoints() {
    // generate random points across canvas
    for(var i = 0; i < visualizer.points.length; i++) {
        var currPoint = visualizer.points[i].point;
        currPoint.x = random(visualizer.range.x.min, visualizer.range.x.max);
        currPoint.y = random(visualizer.range.y.min, visualizer.range.y.max);
    }
}

function createPoly(point) {
    // create polygon based on points nearest to give point
    var nearestArray = getNearestPoints(point);

    var path = [];

    for(var j = 0; j < visualizer.config.connections; j++) {
        var nearestPoint = nearestArray[j];
        path.push(nearestPoint);
    }

    return {
        path: path,
        color: generateColor()
    };
}

function generateColor() {
    // generate color
    return {
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255)
    }
}

function drawPolys() {
    for(var i = 0; i < visualizer.displayPolys.length; i++) {
        drawPoly(visualizer.displayPolys[i]);
    }
}

function drawPoly(poly) {
    // draw given poly
    var path = new Path(poly.path);
    path.fillColor = 'rgba(' + poly.color.r + ', ' + poly.color.g + ', ' + poly.color.b + ', ' + 0.15 + ')';
    path.strokeColor = 'rgba(0, 0, 0, ' + 0.18 + ')'
    path.closed = true;
}

function getNearestPoints(point) {
    // returns sorted array of nearest points
    var distances = [];
    var sortedArray = [];

    for(var i = 0; i < visualizer.points.length; i++) {
        if(visualizer.points[i] != point) {
            distances.push({
                point: visualizer.points[i],
                distance: point.point.getDistance(visualizer.points[i].point)
            });
        }
    }

    distances.sort(function(a, b) {
        return a.distance - b.distance;
    });

    for(var i = 0; i < distances.length; i++) {
        sortedArray.push(distances[i].point);
    }

    return sortedArray;
}

function getPointById(id) {
    for(var i = 0; i < visualizer.points.length; i++) {
        if(id == visualizer.points[i].id) {
            return visualizer.points[i];
        }
    }
}

function convertToDisplayPolys() {
    visualizer.displayPolys = JSON.parse(JSON.stringify(visualizer.polys));
    for(var i = 0; i < visualizer.polys.length; i++) {
        for(var j = 0; j < visualizer.polys[i].path.length; j++) {
            var displayPoint = visualizer.displayPolys[i].path[j];
            var truePoint = visualizer.polys[i].path[j];
            displayPoint.point = new Point(displayPoint.point[1], displayPoint.point[2]);
        }
    }
}

function clearScreen() {
    project.clear();
}

function scramble() {
    setRange();
    if(visualizer.style == 0) {
        convertToDisplayPolys();
        generatePoints();
        for(var i = 0; i < visualizer.polys.length; i++) {
            visualizer.polys[i].color = generateColor();
        }
    }
    if(visualizer.style == 1) {
        convertToDisplayPolys();
        generatePoints();
        for(var i = 0; i < visualizer.points.length; i++) {
            var currPoint = visualizer.points[i];
            var newPoly = createPoly(currPoint);
            visualizer.polys[i] = newPoly;
        }
    }
    frames = 0;
}

function onFrame(event) {
    view.draw();
}


function uuid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function random(min, max) {
    // generate random integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
