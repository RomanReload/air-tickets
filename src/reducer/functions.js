const filteredFoo = ({ all = false, without = false, one = false, two = false, three = false },
    allTickets
) => {
    let data = [
        ...allTickets.filter((ticket) => {
            const transfer = ticket.segments[0].stops.length;
            if (all) {
                return ticket;
            }
            if (without) {
                return transfer === 0;
            }
            if (one) {
                return transfer === 1;
            }
            if (two) {
                return transfer === 2;
            }
            if (three) {
                return transfer === 3;
            }
            return null;
        }),
    ];
    return data.length !== 0 ? data : allTickets;
};

export default filteredFoo;