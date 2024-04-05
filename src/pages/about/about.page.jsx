import './about.styles.scss'

const abouts = [
    {
        url: 'https://i.ibb.co/tQz27pv/Mr8eITC.webp',
        title: 'education',
        text: [
            'Graduated with honors from a technical institute specializing in computer science and telecommunications.',
            `From October 2023 enrolled in a Bachelor's degree program in Artificial Intelligence at 
            the University of Palermo`
        ]
    },
    {
        url: 'https://i.ibb.co/D5hxC7Y/photo-1587440871875-191322ee64b0.webp',
        title: 'experience',
        text: [
            'Entered the job market at age 17 doing freelance development.',
            'During my senior year of high school, after a selection, I got my first internship as a software engineer.',
            'Since February 2023, I founded MadNight: an innovative startup for the nightclub world. '
        ]
    },
    {
        url: 'https://i.ibb.co/9qHjksh/photo-1588412079929-790b9f593d8e.webp',
        title: 'hobbies',
        text: [
            'Chess enthusiast, voracious reader and avid gardener, to name a few. I invest my time in meaningful activities.',
            "I have a deep passion for traveling. Exploring diverse landscapes and immersing myself in different cultures has been a lifelong fascination."
        ]
    }
]

const About = () => {
    return (
        <div className='about-page' id='about'>
            <div className='padding-wrapper'>
                <div className='img-ct'>
                    <div className='circle'>
                        <img 
                            src='https://i.ibb.co/KV7cdSY/pic.webp' 
                            alt='profile' 
                        />
                    </div>
                </div>
                <span className='desc'>
                Ambitious, highly curious, and detail-oriented. My goal is to facilitate people's lives through the use of 
                innovative applications. 
                </span>
                <span className='title'>about me</span>
            </div>
            <div className='images-ct'>
                {
                    abouts.map(a => (
                    <div className='image' key={a.title}>
                        <div className='bg-image' style={{ backgroundImage: `url(${a.url})` }} />
                        <div className='desc-ct'>
                            <span className='desc-title'>{a.title}</span>
                            <div className='wrapper'>
                            {
                                a.text.map(t => (
                                    <span className='desc' key={t}>{t}</span>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default About