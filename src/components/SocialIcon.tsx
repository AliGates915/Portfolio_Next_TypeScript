
import { FaLinkedin, FaDiscord, FaGithub , FaYoutube } from 'react-icons/fa';

function SocialIcon() {
    return (
        <>
            <div className='pl-2 gap-4 sm:gap-14 text-white flex'>
                <div className="relative group">
                    <LinkedInIc />
                    <span className="absolute left-1/2 transform -translate-x-1/2 
                    top-[2.2rem] bg-white text-[#0077B5] tracking-wider text-[14px] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                        LinkedIn
                    </span>
                </div>
                <div className="relative group">
                    <DiscordIc />
                    <span className="absolute left-1/2 transform -translate-x-1/2 
                    top-[2.2rem] bg-white text-[#4682B4] tracking-wider text-[14px] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                        Discord
                    </span>
                </div>
                <div className="relative group">
                    <GithubIc />
                    <span className="absolute left-1/2 transform -translate-x-1/2 
                    top-[2.2rem] bg-white text-[#2dba4e] tracking-wider text-[14px] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                        Github
                    </span>
                </div>
                <div className="relative group">
                    <YoutubeIc />
                    <span className="absolute left-1/2 transform -translate-x-1/2 
                    top-[2.2rem] bg-white text-[#FF0000] tracking-wider text-[14px] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                        YouTube
                    </span>
                </div>
            </div>
        </>
    );
}

export default SocialIcon;

export const LinkedInIc = () => {
    const linkedInURL = 'https://www.linkedin.com/in/aligates877/';

    return (
        <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
        </a>
    );
};
export const DiscordIc = () => {
    const dicordUrl = 'https://discord.com/channels/aligates38558';

    return (
        <a href={dicordUrl} target="_blank" rel="noopener noreferrer">
            <FaDiscord size={28} />
        </a>
    );
};
export const GithubIc = () => {
    const githubUrl = 'https://github.com/AliGates915';

    return (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
        </a>
    );
};
export const YoutubeIc = () => {
    const youtubeUrl = 'https://www.youtube.com/channel/UCunAeU5sbQ1w0HqUXhrSOEg';

    return (
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            <FaYoutube size={28} />
        </a>
    );
};
