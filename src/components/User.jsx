const User = ({username, userhandle})=>{
    return (
        <span className='user'>
        <span className='name'>{username}</span>
        <span className='handle'>@{userhandle}</span>
        </span>
    )
}
export default User



