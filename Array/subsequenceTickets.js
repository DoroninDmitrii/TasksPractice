const tickets = [
  { from: 'Astana', to: 'Bali' },
  { from: 'Moscow', to: 'Astana' },
  { from: 'Bali', to: 'SPb' }
];

function findStart(tickets) {
  const destinations = new Set(tickets.map(ticket => ticket.to));
  for (const ticket of tickets) {
    if (!destinations.has(ticket.from)) {
      return ticket.from;
    }
  }
  return null;
}

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

const orderedTickets = orderTickets(tickets);
console.log(orderedTickets);
