import { useEffect, useState } from "react";
import React from 'react'
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";

const TempProfilePage = () => {
    const [applications, setapplications] = useState([]);
    const [Myprojects, setMyprojects] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        onValue(ref(db, `MyApplications/${id}`), (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const dataKeys = Object.keys(data);
                let arr = [];
                for (let i = 0; i < dataKeys.length; i++) {
                    arr.push(data[dataKeys[i]]);
                }
                console.log(arr);
                setapplications(arr);
            }
        });
        onValue(ref(db, `myProjects/${id}`), (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const dataKeys = Object.keys(data);
                let arr = [];
                for (let i = 0; i < dataKeys.length; i++) {
                    arr.push(data[dataKeys[i]]);
                }
                console.log(arr);
                setMyprojects(arr);
            }
        });
    }, []);

  return (
    <div>
        <h1>my applications</h1>
        {applications.map((item) => (
            <div>
                <h3>{item.projname}</h3>
                <span>{item.status}</span>
            </div>
            
        ))}
        <h1>my projects</h1>
        {Myprojects.map((item) => (
            <>
            <h3>{item.projname}</h3>
            </>
        ))}
    </div>
  )
}

export default TempProfilePage