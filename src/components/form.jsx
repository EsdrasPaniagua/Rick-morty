import { useState } from "react";
import validation from "./validation";

const Form = ({login}) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
    email: "",
    password: ""
})

    const handleCange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input type = "email" name="email" value={userData.email} onChange={handleCange}/>
            {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
        
            <label htmlFor="password">password: </label>
            <input type = "password" name = "password" value={userData.password} onChange={handleCange}/>
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

            <button>Submit</button>
        </form>

    )


}

export default Form;