const controller ={};

controller.home = (req,res) => {
    res.render('index');
}

controller.aboutCourse = (req,res) =>{
    res.render('aboutCourse');
}

controller.content = (req,res) =>{
    res.render('content');
}

controller.map =(req,res) => {
    res.render('map');
}

controller.resume = (req,res) =>{
    res.render('resume');
}
module.exports = controller;