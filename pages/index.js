import Link from "next/link"
import A from "../components/A";
import MainContainer from "../components/MainContainer";

const Index = () => {
    return (
        <MainContainer keywords={"main page"}>
        <div>
            <div className="navbar">
                <A href={'/'} text="Главная"></A>
                <A href={'/users'} text="Пользователи"></A>

            </div>
            <h1>Главная страница</h1>
            
        </div>
        </MainContainer>
        
    )
}

export default Index;