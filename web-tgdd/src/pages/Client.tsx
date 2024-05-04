import { Outlet } from "react-router-dom";
import ClientHeader from "../components/ClientHeader";
import ClientFooter from "../components/ClientFooter";
import { useState } from "react";
import ClientHome from "./client-home";

export default function Client() {
    const [search, setSearch] = useState('')

    const setKeyword = (text : string) => {
        setSearch(text)
    }

    return (
        <>
            <ClientHeader setKeyword={setKeyword} />
            <ClientHome search={search}/>
            <ClientFooter/>
        </>
    )
}