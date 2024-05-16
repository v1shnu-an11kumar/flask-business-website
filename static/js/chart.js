document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('lineChart');
    var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Number of Users",
            data: [100, 150, 200, 180, 220, 250],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    };

    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    var lineChart = new Chart(canvas, {
        type: 'line',
        data: data,
        options: options
    });
});
