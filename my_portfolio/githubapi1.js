const axios = window.axios;
console.log("the github data you are now seeing is loaded at instant you visit my website . ");
var reponames = [];
const url = "https://api.github.com/users/antonyjohn/repos";
axios.get(url, {}).then(function (datas)
{
            console.log("datas.data",datas.data);
     for(var i = 0; i < datas.data.length; i++)
     {
            console.log("datas.data.length",datas.data.length);
        
        if (JSON.stringify(datas.data[i].fork) == "false")
        {
            reponames.push([
                datas.data[i].updated_at,
                datas.data[i].name,
                datas.data[i].language,
                datas.data[i].description,
                datas.data[i].language_url,
            ]);
        }           console.log("reponames:", reponames[i]);

     }  
          
});





