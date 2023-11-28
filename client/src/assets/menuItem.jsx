import { FaCommentAlt, FaRegChartBar, FaShoppingBag, FaThList, FaUserAlt, FaUsers } from "react-icons/fa";

export const menuItem=[
    {
        path:"/",
        name:"Users",
        icon:<FaUsers/>,
        submenus: 
            { title: "Submenu1", link: '/Dashboard/test' }
    },
    {
        path:"/about",
        name:"About",
        icon:<FaUserAlt/>
    },
    {
        path:"/analytics",
        name:"Analytics",
        icon:<FaRegChartBar/>
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
