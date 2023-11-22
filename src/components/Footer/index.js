import './footer.css'


export const Footer = () => {
    return(
        <div className='footer'>
            <section className='icons'>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/img/fb.png" alt="Logo Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/img/tw.png" alt="Logo Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/img/ig.png" alt="Logo Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/img/logo.png' alt='Logo Organo'/>
            </section>
            <section>
                <p>Dessenvolvido por Alura / Olluas</p>
            </section>
        </div>
    )
}