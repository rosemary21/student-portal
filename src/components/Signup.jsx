import {useState} from 'react';

const signup= ({addStudent}) =>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');


    const handleSubmit= (e) =>{

        e.preventDefault();
        if(!name|| !email) return ;

        addStudent ({name,email});
        setName('')
        setEmail('')
    }


    return(
        <form onSubmit={handleSubmit} className="mb-4 space-y-2">

            <input  type="text"
            placeholder="name" 
            value={name}
            onChange={(e)=>setEmail(e.target.value)}
            className="border p-2 w-full"
            />
            <button className="bg-blue 500 text-white px-4 py-2">Add Student</button>
        </form>
    )

}

    export default signup
