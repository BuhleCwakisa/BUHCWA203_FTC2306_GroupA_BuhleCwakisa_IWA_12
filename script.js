// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
//BOOK1
const book1 = document.querySelector('#book1');
const status1 = book1.querySelector('.status');
status1.style.color = STATUS_MAP.overdue.color

const reserve1 = book1.querySelector('.reserve');
reserve1.disabled = !(STATUS_MAP.overdue.canReserve);
const checkedOut1 = book1.querySelector('.checkout');
checkedOut1.disabled = !(STATUS_MAP.overdue.canCheckout);

const checkinColor = book1.querySelector('.checkin');
checkinColor.style.color = '';


//BOOK2
const book2 = document.querySelector('#book2');
const status2 = book2.querySelector('.status');
status2.style.color = STATUS_MAP.reserved.color

const reserve2 = book2.querySelector('.reserve');
reserve2.disabled = !(STATUS_MAP.reserved.canReserve);
const checkedin2 = book2.querySelector('.checkin');
checkedin2.disabled = !(STATUS_MAP.reserved.canCheckin);

const checkinColor2 = book2.querySelector('.checkin');
checkinColor2.style.color = '';

//BOOK3
const book3 = document.querySelector('#book3');
const status3 = book3.querySelector('.status');
status3.style.color = STATUS_MAP.shelf.color;

const checkin3 = book3.querySelector('.checkin');
checkin3.disabled = STATUS_MAP.shelf.canReserve;


const checkinColor3 = book3.querySelector('.checkin');
checkinColor3.style.color = ''


// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.color
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
 

 