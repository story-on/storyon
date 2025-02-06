import { NavLink } from "react-router-dom";
import "../css/Main.css"
import logo from "../img/main_logo.png";

function Main() {

    return (
        <>
            <header>
                <div class="container">
                    <div class="logo_layout">
                        <img className="logo_img" src={logo} />
                    </div>
                    <div className="page_layout">
                        <NavLink to='.info'> {/* link 뒤에 /storyon_info 추가됨*/}
                            <div>Story ON?</div>
                        </NavLink>
                        <NavLink to='coach_info'> {/* link 뒤에 /coach_info 추가됨*/}
                            <div>강사 소개</div>
                        </NavLink>
                        <NavLink to='notice'> {/* link 뒤에 /notice 추가됨*/}
                            <div>공지사항</div>
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Main;