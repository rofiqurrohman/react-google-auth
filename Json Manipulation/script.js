const datas = [
  {
    inventory_id: 9382,
    name: 'Brown Chair',
    type: 'furniture',
    tags: ['chair', 'furniture', 'brown'],
    purchased_at: 1579190471,
    placement: {
      room_id: 3,
      name: 'Meeting Room',
    },
  },
  {
    inventory_id: 9380,
    name: 'Big Desk',
    type: 'furniture3425',
    tags: ['desk', 'furniture', 'brown'],
    purchased_at: 1579190642,
    placement: {
      room_id: 3,
      name: 'Meeting Room',
    },
  },
  {
    inventory_id: 2932,
    name: 'LG Monitor 50 inch',
    type: 'electronic',
    tags: ['monitor'],
    purchased_at: 1579017842,
    placement: {
      room_id: 3,
      name: 'Lavender',
    },
  },
  {
    inventory_id: 232,
    name: 'Sharp Pendingin Ruangan 2PK',
    type: 'electronic',
    tags: ['ac'],
    purchased_at: 1578931442,
    placement: {
      room_id: 5,
      name: 'Dhanapala',
    },
  },
  {
    inventory_id: 9382,
    name: 'Alat Makan',
    type: 'tableware',
    tags: ['spoon', 'fork', 'tableware'],
    purchased_at: 1578672242,
    placement: {
      room_id: 10,
      name: 'Rajawali',
    },
  },
];

//Find Meeting Room
function findMeeting(query) {
  return datas.filter((el) => {
    return el.placement.name.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}
console.log(findMeeting('meeting'));

// Find Electro & Furniture
function findAll(query) {
  return datas.filter((el) => {
    return el.type.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}
console.log(findAll('electro'));
console.log(findAll('furnitur'));

// Find Purchased_at
function findPurchased(query) {
  const timestamp = Date.parse(query.split('-').reverse().join('-'));
  return datas.filter((el) => {
    return el.purchased_at === timestamp;
  });
}
console.log(findPurchased('16-01-2020'));

// Find Name
function findTags(query) {
  return datas.filter((el) => {
    return el.tags.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}
console.log(findTags('brown'));
