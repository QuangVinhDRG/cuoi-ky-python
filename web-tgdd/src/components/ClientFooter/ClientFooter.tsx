import { FaCaretDown } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import BoCongThuong from "../../assets/img/footer/bo-cong-thuong.png"
import DieuKhoan from "../../assets/img/footer/dieu-khoan.png"
import DCMAProtected from "../../assets/img/footer/dcma-protected.png"
import TinNhiemMang from "../../assets/img/footer/tin-nhiem-mang.png"
import TopZone from "../../assets/img/footer/top-zone.png"
import DienMayXanh from "../../assets/img/footer/dien-may-xanh.png"
import BachHoaXanh from "../../assets/img/footer/bach-hoa-xanh.png"
import NhaThuocAnKhang from "../../assets/img/footer/nha-thuoc-an-khang.png"
import AvaKids from "../../assets/img/footer/ava-kid.png"
import FourKFarm from "../../assets/img/footer/4k-farm.png"
import ViecLam from "../../assets/img/footer/viec-lam.png"
export default function ClientFooter() {
    return (
        <footer className="border-t border-t-gray-200">
            <div className="flex justify-between text-sm relative left-1/2 -translate-x-1/2 mt-5" style={{width: "1200px"}}>
                <ul className="">
                    <li className="py-1">Tích điểm Quà tặng VIP</li>
                    <li className="py-1">Lịch sử mua hàng</li>
                    <li className="py-1">Tìm hiểu về mua trả góp</li>
                    <li className="py-1">Chính sách bảo hành</li>
                    <li className="py-1 flex items-center">
                        Xem thêm
                        <FaCaretDown className="ml-1"/>
                    </li>
                </ul>
                <ul className="">
                    <li className="py-1">Giới thiệu công ty &#40;MWG.vn&#41;</li>
                    <li className="py-1">Tuyển dụng</li>
                    <li className="py-1">Gửi góp ý, khiếu nại</li>
                    <li className="py-1">Tìm siêu thị &#40;3.151 shop&#41;</li>
                    <li className="py-1">Xem bản mobile</li>
                </ul>
                <ul className="">
                    <li className="py-1 font-bold">Tổng đài hỗ trợ</li>
                    <li className="py-1">Gọi mua: <span className="font-bold text-blue-500">1900 232 460</span> &#40;7:30 - 22:30&#41;</li>
                    <li className="py-1">Khiếu nại: <span className="font-bold text-blue-500">1800 1062</span> &#40;8:00 - 21:30&#41;</li>
                    <li className="py-1">Bảo hành: <span className="font-bold text-blue-500">1900 232 464</span> &#40;8:00 - 21:00&#41;</li>
                </ul>
                <div className="w-1/3">
                    <ul className="flex flex-wrap justify-center">
                        <li className="flex justify-center items-center mx-2">
                            <FaFacebook className="text-blue-600 text-xl"/>
                            <span className="text-blue-500 font-medium ml-1">3886k Fan</span>
                        </li>
                        <li className="flex justify-center items-center mx-2">
                            <FaYoutube className="text-red-600 text-xl"/>
                            <span className="text-blue-500 font-medium ml-1">866k Đăng ký</span>
                        </li>
                        <li className="flex justify-center items-center mx-2">
                            <span className="border border-blue-600 rounded-full p-1"><SiZalo className="text-blue-600 text-sm"/></span>
                            <span className="text-blue-500 font-medium ml-1">Zalo TGDĐ</span>
                        </li>
                        <li>
                            <img src={BoCongThuong} alt="" className="h-6 m-1" />
                        </li>
                        <li>
                            <img src={DieuKhoan} alt="" className="h-6 m-1" />
                        </li>
                        <li>
                            <img src={DCMAProtected} alt="" className="h-6 m-1" />
                        </li>
                        <li>
                            <img src={TinNhiemMang} alt="" className="h-6 m-1" />
                        </li>
                    </ul>
                    <span className="mt-10 mb-3 inline-block">Website cùng tập đoàn</span>
                    <ul className="flex flex-wrap">
                        <li>
                            <img src={TopZone} alt=""  className="h-6 m-1" />
                        </li>
                        <li>
                            <img src={DienMayXanh} alt=""  className="h-6 m-1" />
                        </li>
                        <li>
                            <img src={BachHoaXanh} alt=""  className="h-6 m-1" />
                        </li>
                        <li>
                            <img src={NhaThuocAnKhang} alt=""  className="h-6 m-1" />
                        </li>
                        <li>
                            <img src={AvaKids} alt=""  className="h-6 m-1" />
                        </li>
                        <li>
                            <img src={FourKFarm} alt=""  className="h-6 m-1" />
                        </li>
                        <li>
                            <img src={ViecLam} alt=""  className="h-6 m-1" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-gray-100 py-4 mt-10">
                <span style={{width: "1200px"}} className="text-justify my-0 mx-auto text-xs block leading-normal">
                © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020.
Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email: Tot.huynhvan@thegioididong.com. <span>Xem chính sách sử dụng</span>
                </span>           
            </div>
        </footer>
    )
}