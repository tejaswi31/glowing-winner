/**
 * Created by Tejaswi on 6/6/2017.
 */
d3.csv("pres_polls.csv", function(d){
    return {
        state : d.State,
        votes : +d.ElectoralVotes,
        democ:+d.Dem,
        repub:+d.Rep

    }
},function(data) {
    //console.dir(data[0].state);
    var map = new Datamap({
        scope: 'usa',
        element: document.getElementById('mapContainer'),
        responsive: true

    });

    for (var i = 0; i < data.length; i++) {
        var republican = 'FF0000';
        var democrat = '0000FF';
        var x = d3.select('.' + data[i].state);

        if (data[i].democ >= data[i].repub) {
            x.style('fill', democrat);
        } else
            x.style('fill', republican);
    }
    d3.select(window).on('resize',function(){
        map.resize;
    })
});

