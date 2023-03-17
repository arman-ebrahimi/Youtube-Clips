

export const LoginForm = () => {
    return(
        <div className="reg-page">
            <form className="reg-form-box">
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" />
                <label htmlFor="password">Password :</label>
                <input type="password" id="password" />
                <input className="button" type="submit" value="Login" />
            </form>
        </div>
    )
}