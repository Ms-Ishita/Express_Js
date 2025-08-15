const homeController = (req,res)=>{
    const data={
        title: "Home Page",
        message: ["ishita", "Arun", "Smriti", "Abhishek", "Deepika"]
    };
    res.render("index",data);
};
export default homeController;