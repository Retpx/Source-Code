let chart;

function updateUI() {
    const score = parseFloat(document.getElementById('scoreRange').value);
    
    // Update labels
    document.getElementById('scoreVal').innerText = score.toFixed(1);
    document.getElementById('bigScore').innerText = score.toFixed(1);

    // Feedback Logic based on score ranges
    const feedback = document.getElementById('feedbackText');
    if (score >= 8) {
        feedback.innerText = "Excellent performance with strong control."; // Score >= 8
    } else if (score >= 6) {
        feedback.innerText = "Good performance with minor inaccuracies."; // Score 6-7
    } else {
        feedback.innerText = "Needs improvement."; // Score < 6
    }

    // Update Chart with skill scores
    const skillScores = [score, score - 0.5, score + 0.3, score - 0.2];
    drawChart(skillScores);
}

function drawChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    if (chart) { chart.destroy(); }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Pronunciation', 'Fluency', 'Vocabulary', 'Grammar'],
            datasets: [{
                label: 'Band Score',
                data: data,
                backgroundColor: '#3498db'
            }]
        },
        options: {
            scales: { y: { beginAtZero: true, max: 9 } }
        }
    });
}

// Initial load
window.onload = updateUI;