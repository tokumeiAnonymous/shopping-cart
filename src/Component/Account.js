import './Account.css';

export default function Account({balance}) {
    return (
        <main className='account'>
            <div className="account--details">
                <div className="profile">John Doe</div>
                <div>Current balance: ${balance}</div>
            </div>
        </main>
    )
}