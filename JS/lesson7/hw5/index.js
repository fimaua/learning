const withdraw = (clients, balances, client, amount) =>
    balances[clients
        .indexOf(client)] >= amount ? balances[clients
        .indexOf(client)] - amount : -1;