import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm, FiHelpCircle, FiSettings } from "react-icons/fi";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { ImNewspaper } from "react-icons/im";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdLiveTv, MdLocalFireDepartment } from "react-icons/md";
import { RiFeedbackLine, RiLightbulbLine } from "react-icons/ri";


//Kategoriler
export const categories = [
    {
        name: "Anasayfa", icon: <AiFillHome />, type: "home"}, 
        {
            name: "Trendler",
            icon: <MdLocalFireDepartment />,
            type: "trending",

        },
        {
            name: "Müzik",
            icon: <CgMusicNote />,
            type: "category",
        },

        {name: "Filmler", icon: <FiFilm />, type: "category" },
        {name: "Canlı", icon: <MdLiveTv />, type: "category" },
        {
            name: "Oyun",
            icon: <IoGameControllerSharp />,
            type: "category",
        },
        {
            name: "Haberler",
            icon: <ImNewspaper />,
            type: "category",
        },
        {
            name: "Spor",
            icon: <GiDiamondTrophy />,
            type: "category",

        },
        {
            name: "Eğitici",
            icon: <RiLightbulbLine />,
            type: "category",
        },
        {
            name: "Güzellik & Kozmetik",
            icon: <GiEclipse />,
            type: "category",
            divider: true,
        },
        {name: "Ayarlar", icon: <FiSettings />, type: "menu" },
        {
            name: "Report History",
            icon: <AiOutlineFlag />,
            type: "menu",
        },
        {name: "Yardım", icon: <FiHelpCircle />, type: "menu" },
        {
            name: "Send feedback",
            icon: <RiFeedbackLine />,
            type: "menu",
        },
];