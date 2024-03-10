import { useState, useEffect } from 'react'
import useAxios from "../../utils/useAxios"
import { jwtDecode } from "jwt-decode";
export default function Dashboard() {

    const [res, setRes] = useState("")
    const api = useAxios();
    const token = localStorage.getItem("authTokens")

    let user_id = ''
    let username = ''
    let full_name = ''
    let image = ''

    if (token) {
        const decode = jwtDecode(token)
        user_id = decode.user_id
        username = decode.username
        full_name = decode.full_name
        image = decode.image

    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/dashboard/")
                setRes(response.data.response)
            } catch (error) {
                console.log(error);
                setRes("Something went wrong")
            }
        }
        fetchData()
    }, [])


    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await api.post("/dashboard/")
                setRes(response.data.response)
            } catch (error) {
                console.log(error);
                setRes("Something went wrong")
            }
        }
        fetchPostData()
    }, [])


    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Mon Tableau de bord</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <span>Bonjour {username} ! Découvre bientôt de nouvelles données et de nouvelles fonctionnalités.</span>
                </div>
            </main>
        </>
    )
}