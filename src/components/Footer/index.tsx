import FooterStyles from './FooterStyles.module.css'

const Footer: React.FC = () => {
    return (
        <footer>
        <p
         className={`${FooterStyles['m-y1']} ${FooterStyles['item4']}`}>This Store is operated by</p>
        <div
         className={`${FooterStyles['footer-bx-1']} ${FooterStyles['item1']}`}>
            <p
            className={`${FooterStyles['m-y1']}`}>This Store is operated by</p>
            <p>powered by:</p>
            <p
             className={`${FooterStyles['bold-text']}`}>CICOD Webshop</p>
        </div>

        <div className={`${FooterStyles['footer-bx-2']} ${FooterStyles['item2']}`}>
            <div className={`${FooterStyles['circle']}`}></div>
            <div className={`${FooterStyles['rect-bx']}`}></div>
        </div>
        
        <div
        className={`${FooterStyles['footer-bx-3']} ${FooterStyles['item3']}`}>

            <div className={`${FooterStyles['sub-bx']}`}>
                <div className={`${FooterStyles['rect-bx']}`}></div>
                <div className={`${FooterStyles['circle']}`}></div>
            </div>

            
            <div className={`${FooterStyles['sub-bx']}`}>
                <div className={`${FooterStyles['rect-bx']}`}></div>
                <div className={`${FooterStyles['circle']}`}></div>
            </div>

            

        </div>

        </footer>
    )
}

export default Footer