import { FaCommentAlt, FaRegChartBar, FaBusinessTime , FaClinicMedical } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { Doctor, User, Users } from "./icons";

export const adminMenu=[
    {
        path:"/",
        name:"Home",
        icon:<CiHome/>,
        submenus: 
            { title: "Submenu1", link: '/Dashboard/test' }
    },
    {
        path:"/users",
        name:"Users",
        icon:<Users/>
    },
    {
        path:"/doctors",
        name:"Doctors",
        icon:<Doctor />
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
