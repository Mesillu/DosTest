const rpmChart = new Chart(document.getElementById("rpmChart"), {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      label: "Requests / Minute",
      data: [],
      borderColor: "#cccccc", // mid gray line
      backgroundColor: "rgba(255,255,255,0.1)",
      fill: false,
      tension: 0.4,
      pointRadius: 0
    }]
  },
  options: {
    animation: false,
    responsive: true,
    plugins: { legend: { labels: { color: "#ffffff" } } },
    scales: {
      x: { ticks: { color: "#ffffff" }, grid: { color: "rgba(255,255,255,0.1)" } },
      y: { ticks: { color: "#ffffff" }, grid: { color: "rgba(255,255,255,0.1)" } }
    }
  }
});

const rpsChart = new Chart(document.getElementById("rpsChart"), {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      label: "Requests / Second",
      data: [],
      borderColor: "#cccccc", // whitish/mid gray
      backgroundColor: "rgba(255,255,255,0.1)",
      fill: false,
      tension: 0.4,
      pointRadius: 0
    }]
  },
  options: {
    animation: false,
    responsive: true,
    plugins: { legend: { labels: { color: "#ffffff" } } },
    scales: {
      x: { ticks: { color: "#ffffff" }, grid: { color: "rgba(255,255,255,0.1)" } },
      y: { ticks: { color: "#ffffff" }, grid: { color: "rgba(255,255,255,0.1)" } }
    }
  }
});

const latencyChart = new Chart(document.getElementById("latencyChart"), {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      label: "Latency (ms)",
      data: [],
      borderColor: "#cccccc", // mid gray
      backgroundColor: "rgba(255,255,255,0.1)",
      fill: false,
      tension: 0.4,
      pointRadius: 0
    }]
  },
  options: {
    animation: false,
    responsive: true,
    plugins: { legend: { labels: { color: "#ffffff" } } },
    scales: {
      x: { ticks: { color: "#ffffff" }, grid: { color: "rgba(255,255,255,0.1)" } },
      y: { ticks: { color: "#ffffff" }, grid: { color: "rgba(255,255,255,0.1)" } }
    }
  }
});