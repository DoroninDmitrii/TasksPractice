const tickets = [
  { from: 'London', to: 'Moscow' },
  { from: 'NY', to: 'London' },
  { from: 'Moscow', to: 'SPb' },
];

const findStart = tickets => {
  const hashMap = {};

  for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i].to;
    hashMap[ticket] = ticket;
  }

  for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i].from;
    if (!hashMap[ticket]) {
      return ticket;
    }
  }
};

function orderTickets(tickets) {
  const ticketMap = new Map();

  for (const ticket of tickets) {
    ticketMap.set(ticket.from, ticket.to);
  }

  const start = findStart(tickets);
  const orderedTickets = [];
  let currentFrom = start;

  while (ticketMap.has(currentFrom)) {
    const nextTo = ticketMap.get(currentFrom);
    orderedTickets.push({ from: currentFrom, to: nextTo });
    currentFrom = nextTo;
  }
  return orderedTickets;
}

console.log(orderTickets(tickets))
