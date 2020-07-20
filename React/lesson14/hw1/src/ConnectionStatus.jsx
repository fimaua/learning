import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
    const [status, setStatus] = useState('online')

    useEffect(() => {
        const onStatusOnline = () => {
            setStatus('online')
        }
        const onStatusOffline = () => {
            setStatus('offline')
        }
        window.addEventListener('online', onStatusOnline);
        window.addEventListener('offline', onStatusOffline);
        return () => {
            window.removeEventListener('online', onStatusOnline);
            window.removeEventListener('offline', onStatusOffline);
        }
    }, [])
    const toggleClass = () =>
        status === 'online'
            ? 'status'
            : 'status status_offline';

    return <div className={toggleClass()}>{status}</div>
}

export default ConnectionStatus;