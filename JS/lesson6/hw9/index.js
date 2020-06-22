function withdraw(clients, balances, client, amount) {
    if (!Array.isArray(clients) & !Array.isArray(balances)) {
        return null;
    }
    for (let i = 0; clients.length - 1; i++) {
        if (clients[i] == client) {
            if ((balances[i] - amount) < 0) {
                return -1;
            } else {
                balances[i] -= amount;
                return balances[i];
            }
        }
    }
}