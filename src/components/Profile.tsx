import styles from "../styles/components/Profile.module.css"
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/rodolfolarac.png" alt="Rodolfo Lara Cassaro" />

            <div>
                <strong>Rodolfo Lara Cassaro</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 1</p>
            </div>

        </div>
    )
}