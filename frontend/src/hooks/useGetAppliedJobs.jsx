import { setAllAppliedJobs } from '@/redux/jobSlice';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAppliedJobs = async () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchAppliedJobs=async()=>{
            try {
                const res= await axios.get("http://localhost:3000/api/v1/application/get",{
                    withCredentials:true
                });
            
                
                if(res.data.success){
                   dispatch(setAllAppliedJobs(res.data.application))
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchAppliedJobs();
    },[])
}

export default useGetAppliedJobs
