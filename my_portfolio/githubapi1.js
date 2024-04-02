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
                  console.log("reponames[i]:", i,reponames[i]);
        }           

     }  
     setTimeout(dateFormatter,100);

});

function dateFormatter()
{
    for ( i = 0; i < reponames.length; i++)
    {
                  console.log("reponames.length",reponames.length);
                  console.log("in dateFormatter fn , reponames[i]",reponames[i]);
                  console.log("in dateFormatter fn before, reponames[i][0]",i,reponames[i][0]);

        reponames[i][0] = new Date(reponames[i][0]);

                   console.log("in dateFormatter fn after, reponames[i][0]",i,reponames[i][0]);
    }
        reponames.sort(function (a, b)
        {
                   console.log("in dateFormatter b[0]", b[0]);
                   console.log("in dateFormatter a[0]", a[0]);
                   
         return b[0] - a[0];
    
         
        });
        console.log("after sorting in dateformatter reponames", reponames);
        
    
}





