const ctx = document.getElementById('contributionChart');

new Chart(ctx, {

type: 'bar',

data: {

labels: ['Jan','Feb','Mar','Apr','May','Jun'],

datasets: [{

label: 'KES Contributions',

data: [20000,35000,30000,50000,42000,60000],

borderWidth: 1

}]

},

options: {

responsive: true

}

});

function toggleSidebar(){

const sidebar = document.getElementById("sidebar");

sidebar.classList.toggle("active");

}