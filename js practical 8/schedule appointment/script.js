let appointments = [];

let appointment1 = {
    date: '2024-07-19',
    time: '02:00 PM',
    name: 'SMIT institute'
};
appointments.push(appointment1);

let appointment2 = {
    date: '2024-07-20',
    time: '8:30 AM',
    name: 'Dera Ismail Khan'
};
appointments.push(appointment2);

for (let i = 0; i < appointments.length; i++) {
    let appointment = appointments[i];
    console.log(`${appointment.date} at ${appointment.time} in ${appointment.name}`);
}