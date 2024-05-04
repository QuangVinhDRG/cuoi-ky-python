import { useState } from "react";
import ClientNavigation from "../ClientNavigation";
import { FaSearch, FaShoppingCart, FaSortDown } from "react-icons/fa";


interface ClinetHeaderProps {
    setKeyword: (keyword: string) => void
}

export default function ClientHeader(props: ClinetHeaderProps) {
    const [value, setValue] = useState('')

        console.log(props)

    return (
        <header className="bg-[#FFD400]">
            <div className="flex my-0 mx-auto justify-between pt-2 w-[1200px]">
                <img src={require(`../../assets/img/header/logo-tgdd-detail.png`)} alt="" className="w-56 h-10 inline-block object-contain"/>
                <button className="bg-amber-400 text-xs flex items-center px-2 h-10 rounded-md">
                    <span className="block">Xem giá, tồn kho tại: <span className="block font-bold text-left">Đà Nẵng</span></span>
                    <FaSortDown className="ml-2"/>
                </button>
                <div className="bg-white flex items-center justify-between w-1/5 px-2 rounded-md">
                    <input onChange={(e) => setValue(e.target.value)} type="text" placeholder="Bạn tìm gì..." className="text-xs w-full outline-none"/>
                    <FaSearch onClick={() => props.setKeyword(value)} className=""/>
                </div>
                <div className="bg-amber-400 text-xs flex justify-center items-center px-4 rounded-md">
                    Tài khoản &<br/>Đơn hàng
                </div>
                <div className="bg-amber-400 text-xs flex justify-center items-center font-semibold px-2 rounded-md">
                    <FaShoppingCart className="text-2xl mr-3"/>
                    Giỏ hàng
                </div>
                <div>
                    <ul className="flex items-center">
                        <li className="text-sm text-center px-2">24h<br/>Công nghệ</li>
                        <li className="text-sm px-2 border-x border-x-amber-200 leading-8">Hỏi Đáp</li>
                        <li className="text-sm px-2">Game App</li>
                    </ul>
                </div>
            </div>
            <ClientNavigation/>
        </header>
    )
}