import './styles/TitlePage.css'; // Optional: Add a CSS file for styling

const TitlePage = () => {
    return (
        <div className="title-page">
            <h1> ClockWork
                <span className='blink'> :</span> 
            </h1>
            <h1> <span className='text-gradient'>Time</span> Estimation </h1>
            <p> Simplify your time management with accurate and intuitive time estimation tools. </p>

            <div className='title-buttons'>
                <button onClick={() => document.getElementById('milestones-section').scrollIntoView({ behavior: 'smooth' })}>
                    View Project Milestones
                </button>
                <button onClick={() => document.getElementById('team-section').scrollIntoView({ behavior: 'smooth' })}>
                    View / Contact Team
                </button>
            </div>
            
        </div>
    );
};

export default TitlePage;