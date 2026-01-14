import { Link } from "react-router";
import styles from "../../styles/page_styles/Proje.module.scss"
import { IoMdArrowBack } from "react-icons/io";

const BackButton = () => {
    return (
        <Link className={styles.backButtonDiv} to={"/projeler"}>
            <IoMdArrowBack className={styles.backButton} />
        </Link>
    )
}

export default BackButton