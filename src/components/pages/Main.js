import { NavLink } from "react-router-dom";
import "../css/Main.css"
import logo from "../img/main_logo.png";

function Main() {

    return (
        <>
            <header>
                <div class="container">
                    <div class="logo_layout">
                        <div className="page_layout">
                            <NavLink className="link_text" to='.info'> {/* link 뒤에 /storyon_info 추가됨*/}
                                <p>Story ON?</p>
                            </NavLink>
                            <NavLink className="link_text" to='coach_info'> {/* link 뒤에 /coach_info 추가됨*/}
                                <p>강사 소개</p>
                            </NavLink>
                            <NavLink className="link_text" to='notice'> {/* link 뒤에 /notice 추가됨*/}
                                <p>공지사항</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Main;