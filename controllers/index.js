exports.index = function(req, res, next) {
  res.render('index', { title: 'Express App' });
}

exports.submit_form = function(req, res, next) {
  console.log("Name is:", req.body.name);
  console.log("Spouse name is:", req.body.spouseName);
  console.log("Email is:", req.body.email);
  res.redirect('/users/');
}