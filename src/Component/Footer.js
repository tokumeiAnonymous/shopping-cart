import linkedinSrc from '../Assets/linkedin-brands.svg';
import githubSrc from '../Assets/github-brands.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <a target="_blank" rel="noreferrer"  href="https://github.com/tokumeiAnonymous"><img src={linkedinSrc} alt="LinkedIn" /></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jerome-taguba-a15735231/"><img src={githubSrc} alt="Github" /></a>
            <div> © Kaya Development. All Rights Reserve. </div>
        </footer>
    )
}