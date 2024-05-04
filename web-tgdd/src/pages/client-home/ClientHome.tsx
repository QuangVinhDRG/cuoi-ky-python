import React, { useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { FaBoltLightning } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import Loading from "../../components/Loading";

const brands: {
    brandId: string;
    brandName: string;
    brandLogo: string;
}[] = [
    {
        brandId: "1",
        brandName: "Samsung",
        brandLogo: "samsung.png"
    },
    {
        brandId: "2",
        brandName: "iPhone",
        brandLogo: "iphone.png"
    },
    {
        brandId: "3",
        brandName: "Oppo",
        brandLogo: "oppo.jpg"
    },
    {
        brandId: "4",
        brandName: "Xiaomi",
        brandLogo: "xiaomi.png"
    },
    {
        brandId: "5",
        brandName: "Vivo",
        brandLogo: "vivo.png"
    },
    {
        brandId: "6",
        brandName: "Realme",
        brandLogo: "realme.png"
    },
    {
        brandId: "7",
        brandName: "TCL",
        brandLogo: "tcl.jpg"
    },
    {
        brandId: "8",
        brandName: "Honor",
        brandLogo: "honor.png"
    },
    {
        brandId: "9",
        brandName: "Nokia",
        brandLogo: "nokia.jpg"
    },
    {
        brandId: "10",
        brandName: "Masstel",
        brandLogo: "masstel.png"
    },
    {
        brandId: "11",
        brandName: "Mobell",
        brandLogo: "mobell.jpg"
    },
    {
        brandId: "12",
        brandName: "Itel",
        brandLogo: "itel.jpg"
    }
]

interface ClientHomeProps {
    search: string
}

interface Product {
    discount: string,
    display: string,
    id: number,
    image_url: string
    init_price: string
    installment: string
    memory: string
    name: string
    policy: string
    price: string
    rating_star: number
    rating_total: number
    resolution: string
}

interface Result {
    products: Product[]
}

const products: {
    prodId: string,
    installment: number,
    image: string,
    promotion: {
        type: string,
        content: string
    },
    name: string,
    screen: string[],
    memory: string[],
    isOnline: boolean,
    oldPrice: number,
    percentDiscount: number,
    price: number,
    ratingPoint: number,
    ratingQuantity: number
}[] = [
    {
        prodId: "1",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "2",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "3",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "4",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "5",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "6",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "7",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "8",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "9",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "10",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "11",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "12",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "13",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "14",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "15",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "16",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "17",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "18",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "19",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    },
    {
        prodId: "20",
        installment: 0,
        image: "iphone-15-pro-max.jpg",
        promotion: {
            type: "iPhone",
            content: "Giảm giá mạnh"
        },
        name: "iPhone 15 Pro Max",
        screen: ['6.7"', 'Super Retina XDR'],
        memory: ['256GB', '512GB', '1T'],
        isOnline: true,
        oldPrice: 34990000,
        percentDiscount: 0.16,
        price: 34990000 - 34990000*0.16,
        ratingPoint: 4,
        ratingQuantity: 106
    }
]

const filters: {
    filterId: string,
    filterStatus: boolean
}[] = [
    {
        filterId: 'brand',
        filterStatus: false
    },
    {
        filterId: 'price',
        filterStatus: false
    },
    {
        filterId: 'type',
        filterStatus: false
    },
    {
        filterId: 'demand',
        filterStatus: false
    },
    {
        filterId: 'ram',
        filterStatus: false
    },
    {
        filterId: 'memory',
        filterStatus: false
    },
    {
        filterId: 'charge',
        filterStatus: false
    },
    {
        filterId: 'special',
        filterStatus: false
    }
]
export default function ClientHome(props: ClientHomeProps) {
    const [isShow, setIsShow] = useState(filters)   
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<Result>({products: []})
    
    useEffect(() => {  
        callApi(props.search)
    }, [props.search])

    const callApi = async (searchKeyword: string) => {
        let url = ''
        if(searchKeyword === '') {
            url = 'http://crud-api:3000/database-api'
        }
        else {
            url = `http://crud-api:3000/database-api/search?name=${searchKeyword}`
        }
        const data = await fetch(url, {
            method: 'GET'
        })
        const jsonData = await data.json()
        setData(jsonData)
        setIsLoading(false)
    }

    const renderRatingDivs = (rating_start : number) => {
        const divs = [];
        for (let i = 0; i < rating_start; i++) {
            divs.push(<FaStar className='text-[#FA6D2A]'/>);
        }
        if(rating_start === 5)
            return divs;
        
        for(let i = 0; i < 5 - rating_start; i++) {
            divs.push(<FaStar className='text-gray-500'/>);
        }

        return divs;
    }

    return isLoading ? <Loading /> : <main style={{width: "1200px"}} className="my-0 mx-auto">
        {/* Banner */}
        <div className="flex my-4">
            <div className="relative mr-2 group cursor-pointer">
                <div className="absolute w-8 h-16 left-2 top-1/2 -translate-y-1/2 flex justify-center items-center bg-gray-50 rounded-md opacity-70 group-hover:opacity-100">
                    <FaChevronLeft className=""/>
                </div>
                <img src={require(`../../assets/img/home/banner-main-1.png`)} alt="" />
                <div className="absolute w-8 h-16 right-2 top-1/2 -translate-y-1/2 flex justify-center items-center bg-gray-50 rounded-md opacity-70 group-hover:opacity-100">
                    <FaChevronRight className=""/>
                </div>
            </div>
            <div className="flex flex-col justify-between cursor-pointer">
                <img src={require(`../../assets/img/home/banner-extra-1.png`)} alt="" />
                <img src={require(`../../assets/img/home/banner-extra-2.png`)} alt="" />
            </div>
        </div>

        {/* Filter */}
        <div className="mb-5">
            <div className="flex text-base">                    
                <div className="flex items-center py-1 px-2 m-1 border rounded-md border-gray-200 cursor-pointer">
                    <CiFilter className="mr-1"/>
                    <span>Bộ lọc</span>
                </div>
                <div onClick={() => {
                    const newIsShow = isShow.map(item => ({
                        filterId: item.filterId,
                        filterStatus: item.filterId === 'brand' ? !item.filterStatus : false
                    }))
                    setIsShow(newIsShow)
                }} className="flex relative items-center py-1 pl-3 pr-6 m-1 border rounded-md border-gray-200 cursor-pointer">
                    <span className="after:content-[''] after:absolute after:right-2 after:top-1/2 after:border-[4px] after:border-transparent after:border-t-black">Hãng</span>
                    <div className={`absolute flex flex-wrap w-[485px] bg-white z-10 shadow-[0_0_20px_3px_rgba(0,0,0,0.3)] p-1 rounded-md top-10 left-0 before:content-[''] before:border-[15px] before:border-transparent before:border-b-white before:absolute before:-top-7 before:left-3 ${isShow.find(item => item.filterId === 'brand' && item.filterStatus === true) ? '' : 'hidden'}`
                }>
                        {brands.map((value) =>{
                            return <div className="p-1 m-1 w-[110px] border border-gray-200">
                                <img className="h-5" src={require(`../../assets/img/home/${value.brandLogo}`)} alt="" />
                            </div>
                        })}
                    </div>
                </div>
                <div onClick={() => {
                    const newIsShow = isShow.map(item => ({
                        filterId: item.filterId,
                        filterStatus: item.filterId === 'price' ? !item.filterStatus : false
                    }))
                    setIsShow(newIsShow)
                }} className="flex relative items-center py-1 pl-3 pr-6 m-1 border rounded-md border-gray-200 cursor-pointer">
                    <span className="after:content-[''] after:absolute after:right-2 after:top-1/2 after:border-[4px] after:border-transparent after:border-t-black">Giá</span>
                    <div className={`absolute flex flex-wrap w-[600px] bg-white z-10 shadow-[0_0_20px_3px_rgba(0,0,0,0.3)] p-1 rounded-md top-10 left-0 before:content-[''] before:border-[15px] before:border-transparent before:border-b-white before:absolute before:-top-7 before:left-3 ${isShow.find(item => item.filterId === 'price' && item.filterStatus === true) ? '' : 'hidden'}`}>
                        <div className="p-1 m-1 w-[110px] border border-gray-200">
                            <span className="text-sm text-center w-full inline-block">Dưới 2 triệu</span>
                        </div>
                        <div className="p-1 m-1 w-[110px] border border-gray-200">
                            <span className="text-sm text-center w-full inline-block">Từ 2 - 4 triệu</span>
                        </div>
                        <div className="p-1 m-1 w-[110px] border border-gray-200">
                            <span className="text-sm text-center w-full inline-block">Từ 4 - 7 triệu</span>
                        </div>
                        <div className="p-1 m-1 w-[110px] border border-gray-200">
                            <span className="text-sm text-center w-full inline-block">Từ 7 - 13 triệu</span>
                        </div>
                        <div className="p-1 m-1 w-[110px] border border-gray-200">
                            <span className="text-sm text-center w-full inline-block">Từ 13 - 20 triệu</span>
                        </div>
                        <div className="p-1 m-1 w-[110px] border border-gray-200">
                            <span className="text-sm text-center w-full inline-block">Trên 20 triệu</span>
                        </div>
                    </div>
                </div>
                <div onClick={() => {
                    const newIsShow = isShow.map(item => ({
                        filterId: item.filterId,
                        filterStatus: item.filterId === 'type' ? !item.filterStatus : false
                    }))
                    setIsShow(newIsShow)
                }} className="flex relative items-center py-1 pl-3 pr-6 m-1 border rounded-md border-gray-200 cursor-pointer">
                    <span className="after:content-[''] after:absolute after:right-2 after:top-1/2 after:border-[4px] after:border-transparent after:border-t-black">Loại điện thoại</span>
                    <div className={`absolute flex flex-wrap w-[385px] bg-white z-10 shadow-[0_0_20px_3px_rgba(0,0,0,0.3)] p-1 rounded-md top-10 left-0 before:content-[''] before:border-[15px] before:border-transparent before:border-b-white before:absolute before:-top-7 before:left-3 ${isShow.find(item => item.filterId === 'type' && item.filterStatus === true) ? '' : 'hidden'}`}>
                        <div className="p-1 m-1 border border-gray-200">
                            <img className="h-14 mx-auto" src={require(`../../assets/img/home/android-phone.jpg`)} alt="" />
                            <span className="text-sm text-center w-full inline-block">Android</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <img className="h-14 mx-auto" src={require(`../../assets/img/home/iphone-phone.jpg`)} alt="" />
                            <span className="text-sm text-center w-full inline-block">iPhone &#40;iOS&#41;</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <img className="h-14 mx-auto" src={require(`../../assets/img/home/popular-phone.jpg`)} alt="" />
                            <span className="text-sm text-center w-full inline-block">Điện thoại phổ thông</span>
                        </div>
                    </div>
                </div>
                <div onClick={() => {
                    const newIsShow = isShow.map(item => ({
                        filterId: item.filterId,
                        filterStatus: item.filterId === 'demand' ? !item.filterStatus : false
                    }))
                    setIsShow(newIsShow)
                }} className="flex relative items-center py-1 pl-3 pr-6 m-1 border rounded-md border-gray-200 cursor-pointer">
                    <span className="after:content-[''] after:absolute after:right-2 after:top-1/2 after:border-[4px] after:border-transparent after:border-t-black">Nhu cầu</span>
                    <div className={`absolute flex flex-wrap w-[550px] bg-white z-10 shadow-[0_0_20px_3px_rgba(0,0,0,0.3)] p-1 rounded-md top-10 left-0 before:content-[''] before:border-[15px] before:border-transparent before:border-b-white before:absolute before:-top-7 before:left-3 ${isShow.find(item => item.filterId === 'demand' && item.filterStatus === true) ? '' : 'hidden'}`}>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">Chơi game / Cấu hình cao</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">Pin khủng trên 5000 mAh</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">Chụp ảnh, quay phim</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">Livestream</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">Mỏng nhẹ</span>
                        </div>                            
                        <span className="flex items-center text-blue-600 p-2 h-7 w-full text-sm">
                            <IoIosInformationCircleOutline className="text-xl"/>
                            <span className="px-1">Tìm hiểu về nhu cầu</span>
                            <BsChevronDown />
                        </span>
                    </div>
                </div>
                <div onClick={() => {
                    const newIsShow = isShow.map(item => ({
                        filterId: item.filterId,
                        filterStatus: item.filterId === 'ram' ? !item.filterStatus : false
                    }))
                    setIsShow(newIsShow)
                }} className="flex relative items-center py-1 pl-3 pr-6 m-1 border rounded-md border-gray-200 cursor-pointer">
                    <span className="after:content-[''] after:absolute after:right-2 after:top-1/2 after:border-[4px] after:border-transparent after:border-t-black">RAM</span>
                    <div className={`absolute flex flex-wrap w-[350px] bg-white z-10 shadow-[0_0_20px_3px_rgba(0,0,0,0.3)] p-1 rounded-md top-10 left-0 before:content-[''] before:border-[15px] before:border-transparent before:border-b-white before:absolute before:-top-7 before:left-3 ${isShow.find(item => item.filterId === 'ram' && item.filterStatus === true) ? '' : 'hidden'}`}>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">2 GB</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">3 GB</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">4 GB</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">6 GB</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">8 GB</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">12 GB</span>
                        </div>
                        <span className="flex items-center text-blue-600 p-2 h-7 w-full text-sm">
                            <IoIosInformationCircleOutline className="text-xl"/>
                            <span className="px-1">Tìm hiểu về RAM</span>
                            <BsChevronDown />
                        </span>
                    </div>
                </div>
                <div onClick={() => {
                    const newIsShow = isShow.map(item => ({
                        filterId: item.filterId,
                        filterStatus: item.filterId === 'memory' ? !item.filterStatus : false
                    }))
                    setIsShow(newIsShow)
                }} className="flex relative items-center py-1 pl-3 pr-6 m-1 border rounded-md border-gray-200 cursor-pointer">
                    <span className="after:content-[''] after:absolute after:right-2 after:top-1/2 after:border-[4px] after:border-transparent after:border-t-black">Dung lượng lưu trữ</span>
                    <div className={`absolute flex flex-wrap w-[400px] bg-white z-10 shadow-[0_0_20px_3px_rgba(0,0,0,0.3)] p-1 rounded-md top-10 left-0 before:content-[''] before:border-[15px] before:border-transparent before:border-b-white before:absolute before:-top-7 before:left-3 ${isShow.find(item => item.filterId === 'memory' && item.filterStatus === true) ? '' : 'hidden'}`}>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">32 GB</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">64 GB</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">128 GB</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">256 GB</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">512 GB</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">1 TB</span>
                        </div>
                    </div>
                </div>
                <div onClick={() => {
                    const newIsShow = isShow.map(item => ({
                        filterId: item.filterId,
                        filterStatus: item.filterId === 'charge' ? !item.filterStatus : false
                    }))
                    setIsShow(newIsShow)
                }} className="flex relative items-center py-1 pl-3 pr-6 m-1 border rounded-md border-gray-200 cursor-pointer">
                    <span className="after:content-[''] after:absolute after:right-2 after:top-1/2 after:border-[4px] after:border-transparent after:border-t-black">Tính năng sạc</span>
                    <div className={`absolute flex flex-wrap w-[450px] bg-white z-10 shadow-[0_0_20px_3px_rgba(0,0,0,0.3)] p-1 rounded-md top-10 right-0 before:content-[''] before:border-[15px] before:border-transparent before:border-b-white before:absolute before:-top-7 before:right-3 ${isShow.find(item => item.filterId === 'charge' && item.filterStatus === true) ? '' : 'hidden'}`}>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">Sạc nhanh &#40;từ 20W&#41;</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">Sạc siêu nhanh &#40;từ 60W&#41;</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">Sạc không dây</span>
                        </div>                            
                    </div>
                </div>
                <div onClick={() => {
                    const newIsShow = isShow.map(item => ({
                        filterId: item.filterId,
                        filterStatus: item.filterId === 'special' ? !item.filterStatus : false
                    }))
                    setIsShow(newIsShow)
                }} className="flex relative items-center py-1 pl-3 pr-6 m-1 border rounded-md border-gray-200 cursor-pointer">
                    <span className="after:content-[''] after:absolute after:right-2 after:top-1/2 after:border-[4px] after:border-transparent after:border-t-black">Tính năng đặc biệt</span>
                    <div className={`absolute flex flex-wrap w-[390px] bg-white z-10 shadow-[0_0_20px_3px_rgba(0,0,0,0.3)] p-1 rounded-md top-10 right-0 before:content-[''] before:border-[15px] before:border-transparent before:border-b-white before:absolute before:-top-7 before:right-3 ${isShow.find(item => item.filterId === 'special' && item.filterStatus === true) ? '' : 'hidden'}`}>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">Kháng nước, bụi</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">Hỗ trợ 5G</span>
                        </div>
                        <div className="p-1 m-1 border border-gray-200">
                            <span className="text-sm text-center w-full inline-block px-1">Bảo mật khuôn mặt 3D</span>
                        </div>                            
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                {brands.map((value) => {
                    return <div className="border border-gray-200 px-3 py-2 m-1 rounded-full cursor-pointer transition-colors hover:border-blue-600">
                        <img className="h-5" src={require(`../../assets/img/home/${value.brandLogo}`)} alt="" />
                    </div>
                })}
                <div className="border border-gray-200 m-1 px-6 py-2 rounded-full cursor-pointer transition-colors hover:border-blue-600">
                    <span className="">Tecno</span>
                </div>
            </div>
            <span className="mt-4 block">Chọn điện thoại theo nhu cầu:</span>
            <div className="flex">
                <div className="group border border-gray-200 px-3 py-2 m-1 rounded-full cursor-pointer transition-colors hover:border-blue-600">
                    <span className="transition-colors group-hover:text-blue-600">Chơi game / Cấu hình cao</span>
                </div>
                <div className="group border border-gray-200 px-3 py-2 m-1 rounded-full cursor-pointer transition-colors hover:border-blue-600">
                    <span className="transition-colors group-hover:text-blue-600">Pin khủng trên 5000 mAh</span>
                </div>
                <div className="group border border-gray-200 px-3 py-2 m-1 rounded-full cursor-pointer transition-colors hover:border-blue-600">
                    <span className="transition-colors group-hover:text-blue-600">Chụp ảnh, quay phim</span>
                </div>
                <div className="group border border-gray-200 px-3 py-2 m-1 rounded-full cursor-pointer transition-colors hover:border-blue-600">
                    <span className="transition-colors group-hover:text-blue-600">Livestream</span>
                </div>
                <div className="group border border-gray-200 px-3 py-2 m-1 rounded-full cursor-pointer transition-colors hover:border-blue-600">
                    <span className="transition-colors group-hover:text-blue-600">Mỏng nhẹ</span>
                </div>
            </div>
            <span className="flex items-center text-blue-600 mb-10 mt-2 h-7">
                <IoIosInformationCircleOutline className="text-xl"/>
                <span className="px-1">Tìm hiểu về nhu cầu</span>
                <BsChevronDown />
            </span>
            <div className="flex justify-between text-sm">
                <div className="flex w-7/12 justify-between items-center">
                    <span className="font-bold">113 Điện thoại</span>
                    <div className="flex items-center bg-green-100 py-1 px-2 rounded-sm">
                        <input type="checkbox" name="" id="giao-nhanh" className="mr-1 cursor-pointer scale-125"/>
                        <label htmlFor="giao-nhanh" className="flex items-center italic font-bold text-green-500">
                            <FaBoltLightning />
                            GIAO NHANH
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input className="scale-125 mr-1" type="checkbox" name="" id="giam-gia" />
                        <label htmlFor="giam-gia">Giảm giá</label>
                    </div>
                    <div className="flex items-center">
                        <input className="scale-125 mr-1" type="checkbox" name="" id="dac-quyen" />
                        <label htmlFor="dac-quyen">Đặc quyền tại Thế Giới Di Động</label>
                    </div>
                    <div className="flex items-center">
                        <input className="scale-125 mr-1" type="checkbox" name="" id="moi" />
                        <label htmlFor="moi">Mới</label>
                    </div>
                </div>
                <div className="flex items-center justify-center border border-gray-200 rounded-sm py-1 px-2">
                    <span className="mr-1">Xếp theo: Nổi bật</span>
                    <FaCaretDown />
                </div>
            </div>
        </div>

        {/* Products */}
        <div className="flex flex-wrap">
            {data.products.map((value) => {
                // let promotionIcon, onlineStatus = <div></div>, starClass: string[] = ["text-gray-600", "text-gray-600", "text-gray-600", "text-gray-600", "text-gray-600"]
                // // if (value.installment.type === 'iPhone') {
                    
                // // }
                // promotionIcon = <FaApple className="mr-1 text-lg"/>
                // if (value.isOnline) {
                //     onlineStatus = 
                //         <div className="flex items-center mt-3">
                //             <RiMoneyDollarCircleLine className="text-red-600"/>
                //             <span className="text-xs ml-1">Online giá rẻ quá</span>
                //         </div>
                // }
                // for (let i = 0; i < value.ratingPoint; i++) {
                //     starClass[i] = "text-orange-600"
                // }
                return <div key={value.id} className="group border border-gray-200 inline-block p-4 w-1/5 cursor-pointer transition-shadow      hover:shadow-xl">
                    <span className="text-xs bg-gray-200 p-1 inline-block">{value.installment}</span>
                    <img className="h-56 my-5 transition-transform group-hover:-translate-y-2" src={value.image_url} alt="" />
                    <div className="bg-red-700 text-white uppercase text-xs font-normal inline-flex items-center py-1 px-2 rounded-full">
                        {/* {promotionIcon}  */}
                        <span>{value.policy}</span> 
                    </div>
                    <span className="block my-1 group-hover:text-blue-600">{value.name}</span>
                    <div>
                        <span className="bg-gray-200 p-1 mr-1 text-xs">{value.display}</span>
                        <span className="bg-gray-200 p-1 mr-1 text-xs">{value.resolution}</span>
                    </div>
                    <div className="mt-2">
                        <span className="border border-gray-200 rounded-sm text-sm p-1 mr-1 cursor-pointer hover:text-blue-600 hover:border-blue-600 hover:shadow-md first:border-blue-600 first:text-blue-600">{value.memory}</span>
                    </div>
                    {/* {onlineStatus} */}
                    <div className="mt-1 text-sm">
                        <span className="mr-2 line-through">{value.init_price != value.price ? value.init_price : ''}<span className="text-xs align-top"></span></span>
                        <span>{value.discount !== 'NONE' ? value.discount : ''}</span>
                    </div>
                    <span className="font-bold text-red-500">{value.price}<span className="text-xs align-top"></span></span>
                    <div className="flex items-center text-sm">
                        {renderRatingDivs(value.rating_star)}
                        <span className="ml-2">{value.rating_total}</span>
                    </div>
                    {/* <div className="flex items-center text-blue-600">
                        <CiCirclePlus className="text-lg"/>
                        <span className="ml-1 text-xs">So sánh</span>
                    </div> */}
                </div>
            })}
            <div className="flex items-center border border-gray-200 py-2 px-10 mx-auto mt-5 mb-10 cursor-pointer rounded-sm transition-colors hover:bg-blue-600 hover:text-white">
                <span className="mr-1 text-sm">Xem thêm 93 Điện thoại</span>
                <FaCaretDown />
            </div>
        </div>            
    </main>
}