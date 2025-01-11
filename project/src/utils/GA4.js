import axios from "axios";

export function getTotalActiveUsersAndScreenPageViews(setTotalActiveUsers,setScreenPageViews){
 
    axios.post('https://accounts.google.com/o/oauth2/token',{
        "client_id": `${process.env.REACT_APP_OAUTH_CLIENT_ID}`,
        "client_secret": `${process.env.REACT_APP_OAUTH_CLIENT_SECRET}`,
        "refresh_token": `${process.env.REACT_APP_OAUTH_REFRESH_TOKEN}`,
        "grant_type": "refresh_token"}
    )
    .then((response) => { 
        axios.post(`https://analyticsdata.googleapis.com/v1beta/properties/${process.env.REACT_APP_GA4_PROPERTY_ID}:runReport`,
            {"metrics":[{"name":"activeUsers"},{"name":"screenPageViews"}],"dateRanges":[{"startDate":"2024-11-01","endDate":"today"}],"keepEmptyRows":true}
            ,
            {
                headers: {
                        'Authorization': `Bearer ${response.data.access_token}`
                    }
            }
            )
            .then((response) => {
                console.log(response.data,"aaaa");  
                console.log(response.data.rows[0].metricValues,"aaaa");
                console.log(response.data.rows[0].metricValues[0].value,"activeUsers");
                console.log(response.data.rows[0].metricValues[1].value,"screenPageViews");
                setTotalActiveUsers(response.data.rows[0].metricValues[0].value);
                setScreenPageViews(response.data.rows[0].metricValues[1].value)
            })
            .catch((error) => {
            console.log(error);
            });
    })
    .catch((error) => { console.log(error,"ccc"); });
}