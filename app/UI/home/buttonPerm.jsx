import { useRouter } from "next/navigation";
import { useState } from "react"

export default function ButtonPerm() {
    const [formData, setFormData] = useState({
        password: ""
    })
    const router = useRouter()

    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };

    function handleSubmit(event) {
        event.preventDefault();        
        if (formData.password === "IamManager") {
            router.push("/home/addEvent")
        }
        
    }


    return (
        <div className="h-screen">
        <div className=" flex flex-col justify-center items-center h-full">
            <form onSubmit={handleSubmit} className="bg-red-300 p-6 flex flex-col rounded-lg gap-4">
             <label htmlFor="password">Please Enter Password to Create Event:</label>
            <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            />
            <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
}