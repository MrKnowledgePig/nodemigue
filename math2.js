window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;


    context.translate(width / 2, height / 2);
    var p3 = {
            x: -278,
            y: -321
        },
        p1 = {
            x: 278,
            y: 160
        },
        p2 = {
            x: -278,
            y: 160
        },
        p0 = {
            x: 278,
            y: -321
        }

    square(p0, p1, p2, p3)

    function square(p0, p1, p2, p3) {

        var pa = {
            x: (p0.x + p1.x) / 3,
            y: (p0.y + p1.y) / 3
        };
        var pb = {
            X: ((p0.x + p1.x) / 3) * 2,
            y: ((p0.y + p1.y) / 3) * 2
        };
        var pc = {
            x: (p1.x + p2.x) / 3,
            y: (p1.y + p2.y) / 3
        };
        var pd = {
            X: ((p1.x + p2.x) / 3) * 2,
            y: ((p1.y + p2.y) / 3) * 2
        };
        var pe = {
            x: (p2.x + p3.x) / 3,
            y: (p2.y + p3.y) / 3
        };
        var pf = {
            X: ((p2.x + p3.x) / 3) * 2,
            y: ((p2.y + p3.y) / 3) * 2
        };
        var pg = {
            x: (p3.x + p0.x) / 3,
            y: (p3.y + p0.y) / 3
        };
        var ph = {
            X: ((p3.x + p0.x) / 3) * 2,
            y: ((p3.y + p0.y) / 3) * 2
        };

        var pi = {
            x: pa.x,
            y: ph.y
        };
        var pj = {
            X: pb.x,
            y: pc.y
        };
        var pk = {
            X: pe.x,
            y: pd.y
        };
        var pl = {
            x: pf.x,
            y: pg.y
        };
        console.log('p0', p0);
        console.log('pa', pa);
        console.log('pi', pi);
        console.log('ph', ph);

        drawTriangle(p0, pa, pi, ph);
        //drawTriangle(pb, p1, pc, pj);
        //drawTriangle(pk, pd, p2, pe);
        //drawTriangle(pg, pl, pf, p3);
        //drawTriangle(pi, pj, pk, pl);
    }



    function drawTriangle(p0, p1, p2, p3) {
        context.moveTo(p0.x, p0.y);
        context.lineTo(p1.x, p1.y);
        context.lineTo(p2.x, p2.y);
        context.lineTo(p3.x, p3.y);
        context.fill();

    }

};