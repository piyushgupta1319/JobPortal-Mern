import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from '@/FilterCard'
import Job from './Job'
import { useSelector } from 'react-redux';


const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                
                const titleMatch = typeof job.title === 'string' && job.title.toLowerCase().includes(searchedQuery.toLowerCase());
                const descriptionMatch = typeof job.description === 'string' && job.description.toLowerCase().includes(searchedQuery.toLowerCase());
                const locationMatch = typeof job.location === 'string' && job.location.toLowerCase().includes(searchedQuery.toLowerCase());

                return titleMatch || descriptionMatch || locationMatch;
            });
            setFilterJobs(filteredJobs);
        } else {
            setFilterJobs(allJobs);
        }
    }, [allJobs, searchedQuery]);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-20% shadow-xl'><FilterCard /></div>
                    {
                        filterJobs?.length <= 0 ? <span className='font-bold text-2xl mx-auto mt-5'>Job not found...</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        filterJobs?.map((job) => {
                                            return <Job job={job} key={job._id} />
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Jobs;
