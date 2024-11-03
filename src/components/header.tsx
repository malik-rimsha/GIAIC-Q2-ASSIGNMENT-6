import Link from "next/link"
import Image from "next/image"
export default function Header (){
    return(
        <ul className="flex justify-center items-center">
            <div className="header-logo">
                <Link href={"/"}><img src="logo.png" alt="Logo" /></Link>
            </div>
            <div className="header-button">
                <Link href={"/"}><li>MAIN</li></Link>
                <Link href={"Gallery"}><li>GALLERY</li></Link>
                <Link href={"Projects"}><li>PROJECTS</li></Link>
                <Link href={"Certification"}><li>CERTIFICATION</li></Link>
                <Link href={"Contact"}><li>CONTACT</li></Link>          
            </div>
        </ul>
    )
}