import NavBarStyles from './NavBarStyles.module.css'

interface Props {
    businessName: string,
    logoUrl?: string
}

const NavBar: React.FC<Props> = ({logoUrl, businessName}) => {
    return (
        <nav className={`${NavBarStyles['nav']}`}>
            <div>
            <img src={logoUrl} alt="logo" />
            </div>

            <p className={`${NavBarStyles['business-name']}`}>{businessName}</p>

            <div className={`${NavBarStyles['webshop-box']}`}>
            <i className="fas fa-store"></i>
            <p>Web shop</p>
            </div>
        </nav>
    )
}

export default NavBar