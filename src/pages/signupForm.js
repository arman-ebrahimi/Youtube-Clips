
export const SignupForm = () => {
    return(
        <div className="reg-page">
            <form className="reg-form-box">
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" />
                <label htmlFor="last-name">Last Name :</label>
                <input type="text" id="last-name" />
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" />
                <label htmlFor="password">Set a password :</label>
                <input type="password" id="password" />
                <label htmlFor="text-box">Your Favorite videos :</label>
                <textarea id="text-box"></textarea>
                <input className="button" type="submit" value="Registry" />
            </form>
        </div>
    )
}