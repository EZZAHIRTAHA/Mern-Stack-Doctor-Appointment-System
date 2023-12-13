import { FaCommentAlt, FaRegChartBar, FaBusinessTime , FaClinicMedical } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { User } from "./icons";

export const menuItem=[
    {
        path:"/",
        name:"Home",
        icon:<CiHome/>,
        submenus: 
            { title: "Submenu1", link: '/Dashboard/test' }
    },
    {
        path:"/appointements",
        name:"Appointements",
        icon:<FaBusinessTime/>
    },
    {
        path:"/apply-doctor",
        name:"Apply Doctor",
        icon:<FaClinicMedical />
    },
    {
        path:"/profile",
        name:"Profile",
        icon:<User />
    },
    // {
    //     path:"/comment",
    //     name:"Comment",
    //     icon:<FaCommentAlt/>
    // },
    // {
    //     path:"/product",
    //     name:"Product",
    //     icon:<FaShoppingBag/>
    // },
    // {
    //     path:"/productList",
    //     name:"Product List",
    //     icon:<FaThList/>
    // }
]
