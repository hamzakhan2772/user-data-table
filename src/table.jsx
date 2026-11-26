import { useState } from "react"

function Box({ Data }) {

    const [Userdata, setUserdata] = useState(Data)

    return (
        <>

            <h1>USER  DATA</h1>
            <table border="3">
                <thead>
                    <tr>
                       
                        <th>NAME</th>
                        <th>PHONE</th>
                        <th>EMAIL</th>
                        <th style={{ backgroundColor: "red" }}>Delete</th>
                         <th>id</th>
                    </tr>
                </thead>
                {Userdata.map((data) => (
                    <tr>
                        <td>{data.NAME}</td>
                        <td>{data.Phone}</td>
                        <td>{data.email}</td>
                        <td><button
                            onClick={() =>
                                setUserdata(
                                    Userdata.filter((user) => user.NAME !== data.NAME)
                                )
                            }
                        >
                            REMOVE
                        </button></td>


                    </tr>

                ))}
            </table>

        </>
    )

}
export default Box
