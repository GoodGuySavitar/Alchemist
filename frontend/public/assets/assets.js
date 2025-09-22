import header_img from './header_img.png'
import hero from './hero.jpg'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import Dr_Chitra_V_0 from './Dr_Chitra_V_0.jpg'
import Dr_Duraisamy_A_1 from './Dr_Duraisamy_A_1.jpg'
import Dr_Ganapathy_Sankar_U_2 from './Dr_Ganapathy_Sankar_U_2.jpg'
import Dr_Gopal_T_V_3 from './Dr_Gopal_T_V_3.jpg'
import Dr_Hari_Singh_4 from './Dr_Hari_Singh_4.jpg'
import Dr_Helen_Shaji_J_C_5 from './Dr_Helen_Shaji_J_C_5.jpg'
import Dr_Jawaharlal_M_6 from './Dr_Jawaharlal_M_6.jpg'
import Dr_Shivganesh_Bhargava_7 from './Dr_Shivganesh_Bhargava_7.jpg'
import Prof_Dr_P_Sree_Sudha_8 from './Prof_Dr_P_Sree_Sudha_8.jpg'
import Prof_Veeragoudhaman_T_S_9 from './Prof_Veeragoudhaman_T_S_9.jpg'
import Dr_Arthanareeswari_M_10 from './Dr_Arthanareeswari_M_10.jpg'
import Dr_Bernaurdshaw_Neppolian_11 from './Dr_Bernaurdshaw_Neppolian_11.jpg'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import agriculture from './agriculture.png'
import engineeringAndTech from './engineeringAndTech.png'
import management from './management.png'
import scienceandhumanities from './scienceandhumanities.png'
import medical from './medical.png'
import Law from './law.png'



export const assets = {
    header_img,
    hero,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
}

export const specialityData = [
    {
        speciality: 'Agriculture Sciences',
        image: agriculture
    },
    {
        speciality: 'Engineering & Tech',
        image: engineeringAndTech
    },
    {
        speciality: 'Management',
        image: management
    },
    {
        speciality: 'Science and Humanities',
        image: scienceandhumanities
    },
    {
        speciality: 'Medicine and Health',
        image: medical
    },
    {
        speciality: 'School of Law',
        image: Law
    },
]

export const facultyData = [
    {
        id: 1, // Added ID
        name: 'Dr. Chitra V',
        designation: 'Dean, Professor & Head, Department of Pharmacology, College of Pharmacy',
        specialization: null,
        profile_url: 'https://www.srmist.edu.in/faculty/prof-v-chitra/',
        image: Dr_Chitra_V_0
    },
    {
        id: 2, // Added ID
        name: 'Dr. Duraisamy A',
        designation: 'Dean, Faculty of Science and Humanities',
        specialization: null,
        profile_url: 'https://www.srmist.edu.in/faculty/dr-duraisamy-a/',
        image: Dr_Duraisamy_A_1
    },
    {
        id: 3, // Added ID
        name: 'Dr. Ganapathy Sankar U',
        designation: 'Dean, College of Occupational Therapy',
        specialization: null,
        profile_url: 'https://www.srmist.edu.in/faculty/dr-ganapathy-sankar-u/',
        image: Dr_Ganapathy_Sankar_U_2
    },
    {
        id: 4, // Added ID
        name: 'Dr. Gopal T V',
        designation: 'Dean, Faculty of Engineering and Technology',
        specialization: null,
        profile_url: 'https://www.srmist.edu.in/faculty/professor-t-v-gopal/',
        image: Dr_Gopal_T_V_3
    },
    {
        id: 5, // Added ID
        name: 'Dr. Hari Singh',
        designation: 'Dean, School of Public Health',
        specialization: null,
        profile_url: 'https://www.srmist.edu.in/faculty/dr-hari-singh/',
        image: Dr_Hari_Singh_4
    },
    {
        id: 6, // Added ID
        name: 'Dr. Helen Shaji J C',
        designation: 'Dean, SRM College of Nursing',
        specialization: null,
        profile_url: 'https://www.srmist.edu.in/faculty/dr-helen-shaji-j-c/',
        image: Dr_Helen_Shaji_J_C_5
    },
    {
        id: 7, // Added ID
        name: 'Dr. Jawaharlal M',
        designation: 'Dean, SRM College of Agriculture Sciences',
        specialization: null,
        profile_url: 'https://www.srmist.edu.in/faculty/dr-jawaharlal-m/',
        image: Dr_Jawaharlal_M_6
    },
    {
        id: 8, // Added ID
        name: 'Dr. Shivganesh Bhargava',
        designation: 'Dean, Faculty of Management',
        specialization: null,
        profile_url: 'https://www.srmist.edu.in/faculty/dr-shivganesh-bhargava/',
        image: Dr_Shivganesh_Bhargava_7
    },
    {
        id: 9, // Added ID
        name: 'Prof. (Dr.) P. Sree Sudha',
        designation: 'Dean, School of Law',
        specialization: null,
        profile_url: 'https://www.srmist.edu.in/faculty/prof-p-sree-sudha/',
        image: Prof_Dr_P_Sree_Sudha_8
    },
    {
        id: 10, // Added ID
        name: 'Prof. Veeragoudhaman T S',
        designation: 'Dean i/c, College of Physiotherapy',
        specialization: null,
        profile_url: 'https://www.srmist.edu.in/faculty/prof-t-s-veeragoudhaman/',
        image: Prof_Veeragoudhaman_T_S_9
    },
    {
        id: 11, // Added ID
        name: 'Dr. Arthanareeswari M',
        designation: 'Professor & Chairperson (School of Basic Sciences)',
        specialization: null,
        profile_url: 'https://www.srmist.edu.in/faculty/dr-m-arthanareeswari/',
        image: Dr_Arthanareeswari_M_10
    },
    {
        id: 12, // Added ID
        name: 'Dr. Bernaurdshaw Neppolian',
        designation: 'Dean (Research)',
        specialization: null,
        profile_url: 'https://www.srmist.edu.in/faculty/dr-bernaurdshaw-neppolian/',
        image: Dr_Bernaurdshaw_Neppolian_11
    },
]