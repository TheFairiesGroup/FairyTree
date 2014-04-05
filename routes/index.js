
/*
 * GET home page.
 */

exports.index = function(req, res){

    var circles = [{cx: 100, cy: 100, r: 40, stroke:'green', strW: 3, fill: 'red'}]


  res.render('index',
      { title: 'Express',
          subtitle: 'janko',
          circles: circles
        });

};