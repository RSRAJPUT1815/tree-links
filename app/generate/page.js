"use client"

import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { useSearchParams } from 'next/navigation';

const Generate = () => {

    const searchParams = useSearchParams();
    const [links, setlinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchParams.get("handle") || "")
    const [picture, setpicture] = useState("")



    const handlechange = (index, link, linktext) => {
        setlinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i == index) {
                    return { link, linktext };
                }
                return item;
            });
        });
    };


    const addLink = (link, linktext, handle) => {
        if (link === "" || linktext === "" || handle === "") {
            toast("Please fill all the fields", {
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: false,
                theme: "dark",
            })
            return
        }
        setlinks(links.concat([{ link: "", linktext: "" }]))
    }

    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "Links": links,
            "handle": handle,
            "picture": picture
        });
        console.log(raw);


        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const res = await r.json()
        if (res.success) {
            toast.success(res.message, {
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: false,
                theme: "dark",
            })
            setlinks([])
            setpicture("")
            sethandle("")
        }
        else {
            toast.error(res.message, {
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: false,
                theme: "dark",
            })
        }

    }


    return (

        <div className='grid md:grid-cols-2 min-h-screen bg-[#E9C0E9] '>
            <div className='flex flex-col justify-center items-center gap-5 max-md:mt-14 mt-4'>
                <h1 className='font-bold text-4xl'>Create your links here</h1>
                <div className='flex flex-col gap-4 w-80 '>
                    <h2 className='font-semibold text-2xl'>Step 1: Create your Handle</h2>
                    <div className="mx-4 flex flex-col gap-2">
                        <input type="text" value={handle} onChange={e => { sethandle(e.target.value) }} placeholder='Choose a handle' className='bg-white focus:outline-[#e9c0e9] px-4 py-2  rounded-xl' />
                    </div>
                    <h2 className='font-semibold text-2xl'>Step 2:Add Links</h2>
                    {links && links.map((item, index) => {
                        return <div key={index} className="mx-4 flex flex-col gap-2">
                            <input type="text" value={item.linktext || ""} onChange={e => { handlechange(index, item.link, e.target.value) }} placeholder='Enter links text' className='bg-white focus:outline-[#e9c0e9] px-4 py-2 rounded-xl' />
                            <input type="text" value={item.link} onChange={e => { handlechange(index, e.target.value, item.linktext) }} placeholder='Enter links' className='bg-white  focus:outline-[#e9c0e9] px-4 py-2 rounded-xl' />
                        </div>
                    })}

                    <button onClick={() => addLink()} className='px-3 py-2 font-semibold text-xs rounded-xl bg-[#502274] text-[#E9C0E9] cursor-pointer'>+Add Link</button>
                    <h2 className='font-semibold text-xl'>Step 3:Add Picture and Finalize</h2>
                    <div className="mx-4 flex flex-col gap-2">
                        <input type="text" value={picture} onChange={e => { setpicture(e.target.value) }} placeholder='Enter link to your picture' className='bg-white focus:outline-[#e9c0e9] px-4 py-2 rounded-xl' />
                        <button disabled={picture == "" || handle == "" || links[0].linktext == ""} onClick={() => submitLinks()} className='py-2 font-semibold text-xs rounded-xl disabled:bg-slate-900 bg-[#502274] text-[#E9C0E9] cursor-pointer'>Finish</button>
                    </div>
                </div>
            </div>
            <div className='w-full h-screen flex items-center justify-center max-md:hidden'>
                <img src="/generate.png" alt="" className=' h-full object-contain' />
            </div>
            <ToastContainer />
        </div>
    )
}

export default Generate
