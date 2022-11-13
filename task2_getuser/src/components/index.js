import React,{useState,useEffect} from 'react';
import './index.css'
import Loader from './loader';
const Fetchdata=()=>{
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(0)
    const Fetch=()=>{
            fetch('https://reqres.in/api/users?page=1')
            // Handle success
            .then(response => response.json())  // convert to json
            .then(json => setUser(json.data))    //print data to console
            .then(setLoading(1))
            .catch(err => console.log('Request Failed', err)); 
    }
    setTimeout(Fetch,3000)
    
    return(
        <>
        {loading==0?<Loader/>:
        
        user.map(userdata=>
        <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={userdata.avatar} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{userdata.first_name} {userdata.last_name}</h5>
                        <p className="card-text">Hi I'm {userdata.first_name} {userdata.last_name} and my email id is {userdata.email} </p>
                    </div>
                    </div>
                </div>
        </div>
        )
    }
        </>
    )
}
export default Fetchdata