import {Link} from 'react-router-dom'
import Card from "../components/shared/Card"
function AboutPage() {
  return (
        <Card>
            <div className="about">
                <h1>
                    About this project
                </h1>
                <p>this is a react app to leave feedback</p>
                <Link to = '/'>
                    Homepage
                </Link>
            </div>
        </Card>
    )
}

export default AboutPage