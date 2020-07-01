import React from "react";

const Mailbox = ({ unreadMessages }) => {
    return (
        <div className='mailbox'>
            <span>Messages</span>
            {
                unreadMessages.length > 0 &&
                (<span>{unreadMessages.length}</span>)
            }
        </div>
    )
}

export default Mailbox;