import Link from "next/link";
import Image from "next/image";

export default function Footer (){
    return(
        <footer className="footer">
            <div className="logo"> <img src="footer.png" alt="logo" /></div>

            <div className="inform"><h2>Information</h2> <ul>            
                <Link href={"/"}><li>Main</li></Link><br />
                <Link href={"Gallery"}><li>Gallery</li></Link><br />
                <Link href={"Projects"}><li>Projects</li></Link><br />
                <Link href={"Certification"}><li>Certification</li></Link><br />
                <Link href={"Contact"}><li>Contacts</li></Link><br />          
            </ul> </div>

            <div className="contact"><h3>Contacts</h3><ul><p>
            <i className="bi bi-geo-alt"></i>  1235 sample street austin texes 78704 <br /><br />
            <i className="bi bi-telephone"></i>  031224567 <br /><br />
            <i className="bi bi-envelope-fill"></i>  malikrimsha@gmail.com</p>
            </ul></div>
            
            <div className="icons"><h4>Social Media</h4><ul>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-whatsapp"></i>
            </ul></div>
        </footer>
    )
}