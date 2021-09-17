import react from "react";

export default function Footer(){
    return(
        <>
        <div className="footer">
            <div className="footer-links">
                <div></div>
                <div>
                <h4>Sign Up/Login</h4>
                <ul>
                    <li><h4>Driver</h4></li>
                    <li><h4>Restaurant Manager</h4></li>
                </ul>
                </div>
                <div><h4>Help &amp; Support</h4>
                <ul>
                <li>Help</li>
                <li>Contact</li>
                <li>Legal</li></ul>
                </div>
                <div><h4>Social media</h4></div>
            </div>
            <h4>Black BowTie &copy; 2021 </h4>
        </div>
        </>
    );
}