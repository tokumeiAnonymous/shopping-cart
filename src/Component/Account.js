export default function Account({balance}) {
    return (
        <main className='account'>
            <div className="profile">John Doe</div>
            <div>Current balance: ${balance}</div>
        </main>
    )
}