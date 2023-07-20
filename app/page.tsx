import { ExperiencieBar } from '@/src/components/ExperienceBar'
import { CompletedChallenges } from '@/src/components/CompletedChallenges'
import { Profile } from '@/src/components/Profile'

import styles from "../src/styles/pages/Home.module.css"


export default function Home() {
  return (
    <div className={styles.container}>
      <ExperiencieBar/>

      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
        </div>

        <div>

        </div>
      </section>
    </div>
  )
}
