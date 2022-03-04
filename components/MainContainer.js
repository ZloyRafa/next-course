import A from "./A";

const MainContainer = ({ children, keywords}) => {
    return (
        <>
        <head>
            <meta keywords={"key words, next js" + keywords}></meta>
            <title>Главная</title>
        </head>
        
        <div className="navbar">
            <A href={'/'} text="Главная"></A>
            <A href={'/users'} text="Пользователи"></A>
        </div>
        <div>
            {children}
        </div>
        <style jsx>
                {`
                    .navbar {
                     background: orange;   
                     padding: 15px;
                    }
                   
                `}
            </style>
        </>
    )
}

export default MainContainer;