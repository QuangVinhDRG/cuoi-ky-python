import { FaLaptop } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import { TfiTablet } from "react-icons/tfi";
import { LuHeadphones } from "react-icons/lu";
import { IoWatchOutline } from "react-icons/io5";
import { BsSmartwatch } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { Parser } from "html-to-react";
import { ReactNode, useState } from "react";
import { JsxElement, factory } from "typescript";
import ReactDOM from "react-dom/client";
import { render } from "@testing-library/react";

const iconMap: {
    [key: string]: JSX.Element
} = 
    {
        '': <span></span>,
        'Phone': <IoPhonePortraitOutline className="text-xl mr-1"/>,
        'Laptop': <FaLaptop className="text-xl mr-1"/>,
        'Tablet': <TfiTablet className="text-xl mr-1"/>,
        'Accessory': <LuHeadphones className="text-xl mr-1"/>,
        'Smartwatch': <IoWatchOutline className="text-xl mr-1"/>,
        'Watch': <BsSmartwatch className="text-xl mr-1"/>,
        'OldDevice': <IoMdPhonePortrait className="text-xl mr-1"/>,
        'PCPrinter': <FaComputer className="text-xl mr-1"/>
    }

const navigationItems: {
    id: number,
    iconId: string,
    name: string,
    subItems: {
        idItem: number,
        generalName: string,
        detailItems: string[]
    }[]
}[] = [
    {
        id: 1,
        iconId: 'Phone',
        name: "Điện thoại",
        subItems: []
    },
    {
        id: 2,
        iconId: 'Laptop',
        name: "Laptop",
        subItems: []
    },
    {
        id: 3,
        iconId: 'Tablet',
        name: "Tablet",
        subItems: []
    },
    {
        id: 4,
        iconId: 'Accessory',
        name: "Phụ kiện",
        subItems: [
            {
                idItem: 41,
                generalName: "Phụ kiện di động",
                detailItems: ["Sạc dự phòng", "Sạc, cáp", "Hub, cáp chuyển đổi", "Ốp lưng điện thoại", "Ốp lưng máy tính bảng", "Miếng dán", "Miếng dán Camera", "Túi đựng AirPods", "AirTag, vỏ bảo vệ AirTag", "Bàn phím, bút tablet", "Giá đỡ điện thoại"]
            },
            {
                idItem: 42,
                generalName: "Thiết bị âm thanh",
                detailItems: ["Tai nghe Bluetooth", "Tai nghe dây", "Loa", "Micro"]
            },
            {
                idItem: 43,
                generalName: "Thiết bị nhà thông minh",
                detailItems: ["Camera trong nhà", "Camera ngoài trời", "Máy chiếu"]
            },
            {
                idItem: 44,
                generalName: "Thương hiệu hàng đầu",
                detailItems: ["Apple", "Samsung", "Imou", "Baseus", "JBL", "Anker", "Xmobile"]
            },
            {
                idItem: 45,
                generalName: "Phụ kiện Laptop",
                detailItems: ["Chuột máy tính", "Bàn phím", "Router - Thiết bị mạng", "Balo, túi chống sốc", "Giá đỡ laptop", "Phần mềm"]
            },
            {
                idItem: 46,
                generalName: "Thiết bị lưu trữ",
                detailItems: ["Ổ cứng di động", "Thẻ nhớ", "USB"]
            },
            {
                idItem: 47,
                generalName: "Phụ kiện khác",
                detailItems: ["Pin tiểu", "Tay cầm chơi game", "Phụ kiện ô tô"]
            }
        ]
    },
    {
        id: 5,
        iconId: 'Smartwatch',
        name: "Smartwatch",
        subItems: []
    },
    {
        id: 6,
        iconId: 'Watch',
        name: "Đồng hồ",
        subItems: []
    },
    {
        id: 7,
        iconId: 'OldDevice',
        name: "Máy cũ, Thu cũ",
        subItems: [
            {
                idItem: 71,
                generalName: "Máy cũ giá rẻ",
                detailItems: []
            },
            {
                idItem: 72,
                generalName: "Thu cũ đổi mới",
                detailItems: []
            }
        ]
    },
    {
        id: 8,
        iconId: 'PCPrinter',
        name: "PC, Máy in",
        subItems: [
            {
                idItem: 81,
                generalName: "Máy in",
                detailItems: []
            },
            {
                idItem: 82,
                generalName: "Mực in",
                detailItems: []
            },
            {
                idItem: 83,
                generalName: "Màn hình máy tính",
                detailItems: []
            },
            {
                idItem: 84,
                generalName: "Máy tính để bàn",
                detailItems: []
            },
            {
                idItem: 85,
                generalName: "Máy chơi game cầm tay",
                detailItems: []
            },
            {
                idItem: 86,
                generalName: "Phần mềm",
                detailItems: []
            }
        ]
    },
    {
        id: 9,
        iconId: '',
        name: "Sim, Thẻ cào",
        subItems: []
    },
    {
        id: 10,
        iconId: '',
        name: "Dịch vụ tiện ích",
        subItems: [
            {
                idItem: 101,
                generalName: "Thanh toán hóa đơn",
                detailItems: ["Đóng tiền trả góp", "Đóng tiền điện", "Đóng tiền nước", "Đóng tiền NET FPT", "Đóng tiền NET, cáp VNPT", "Vé tàu, xe, máy bay"]
            },
            {
                idItem: 102,
                generalName: "Tài chính - bảo hiểm",
                detailItems: ["Mua bảo hiểm xe máy, ô tô", "Đóng tiền bảo hiểm", "Mua gói truyền hình"]
            },
            {
                idItem: 103,
                generalName: "Tiện ích viễn thông",
                detailItems: ["Mua gói data 3G, 4G", "Nạp tiền trả trước", "Nạp tiền trả sau", "Thẻ cào game", "Thẻ cào điện thoại"]
            }
        ]
    }
]

export default function ClientNavigation() {
    return (
        <div className="bg-[#FFD400]">
            <ul className="h-16 flex my-0 mx-auto justify-between items-center w-[1200px]">
                {navigationItems.map((value) => {
                    let dropdownIcon = <span className="hidden"></span>;
                    let subNavigation = <span className="hidden"></span>;
                    if (value.subItems.length > 0) {
                        dropdownIcon = <span className="before:content-[''] before:absolute before:right-0 before:border-[5px] before:border-transparent before:border-t-black"></span>
                        if (value.subItems.some((subItem) => {
                            return subItem.detailItems.length > 0;
                        })) {
                            subNavigation = <div className="absolute top-8 group-[:nth-child(4)]/navigation:left-0 group-[:nth-child(4)]/navigation:w-[750px]  group-last/navigation:right-0 group-last/navigation:w-[600px] bg-white z-10 border border-gray-200 rounded-md before:content-[''] before:absolute before:border-[15px] before:border-transparent before:border-b-white before:-top-[25px] group-[:nth-child(4)]/navigation:before:left-[30px] group-last/navigation:before:right-[45px] after:content-[''] after:absolute after:w-full after:h-5 after:-top-3 after:bg-transparent hidden group-hover/navigation:flex group-hover/navigation:flex-wrap">
                                {value.subItems.map((generalItem) => {
                                    return <span key={generalItem.idItem} className="uppercase font-medium text-sm m-3">
                                        {generalItem.generalName}
                                        {generalItem.detailItems.map((detailItem) => {
                                            return <span key={generalItem.detailItems.indexOf(detailItem)} className="font-normal normal-case block my-1 hover:font-medium">
                                                {detailItem}
                                            </span>
                                        })}
                                    </span>                                
                                })}
                            </div>
                        } else {                        
                            subNavigation = <div className="absolute top-8 bg-white z-10 rounded-md border border-gray-200 p-3 w-[180px] group-[:nth-child(7)]/navigation:right-0 group-[:nth-child(8)]/navigation:left-0 before:content-[''] before:absolute before:border-[15px] before:border-transparent before:border-b-white before:-top-[25px] group-[:nth-child(7)]/navigation:before:right-[50px] group-[:nth-child(8)]/navigation:before:left-[40px] after:content-[''] after:absolute after:w-full after:h-5 after:-top-3 after:bg-transparent hidden group-hover/navigation:block">
                                {value.subItems.map((detailItem) => {
                                    return <span className="block my-1 hover:font-medium">
                                        {detailItem.generalName}
                                    </span>
                                })}
                            </div>
                        }
                    }
                    return <li key={value.iconId} className="group/navigation flex justify-center items-center font-normal text-sm pr-4 cursor-pointer relative">
                        {iconMap[value.iconId]}
                        {value.name}
                        {dropdownIcon}
                        {subNavigation}
                    </li>
                })}            
            </ul>
        </div>
    )
}