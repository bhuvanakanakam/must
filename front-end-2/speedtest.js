document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-button');
  const downloadSpeed = document.getElementById('download-speed');
  const uploadSpeed = document.getElementById('upload-speed');
  const pingElement = document.getElementById('ping');
  const jitterElement = document.getElementById('jitter');
  const ipAddress = document.getElementById('ip-address');
  const loaderWidget = document.querySelector('.loader-widget');
  const content = document.querySelector('.content');

  startButton.addEventListener('click', () => {
      startButton.disabled = true;
      startButton.innerText = 'Testing...';
      loaderWidget.classList.add('loading');
      content.classList.add('hide'); // Hide content during testing

      // Fetch user's IP address
      fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(data => {
              ipAddress.innerText = data.ip;
          });

      // Simulate speed test
      setTimeout(() => {
          const simulatedDownloadSpeed = Math.random() * 50;
          const simulatedUploadSpeed = Math.random() * 50;

          downloadSpeed.innerText = simulatedDownloadSpeed.toFixed(2) + ' Mbps';
          uploadSpeed.innerText = simulatedUploadSpeed.toFixed(2) + ' Mbps';

          // Simulate ping and jitter
          const pingSamples = [];
          const numSamples = 10;
          const minPing = 5; // Minimum ping in milliseconds
          const maxPing = 20; // Maximum ping in milliseconds

          for (let i = 0; i < numSamples; i++) {
              const simulatedPing = Math.random() * (maxPing - minPing) + minPing;
              pingSamples.push(simulatedPing);
          }

          const ping = pingSamples.reduce((sum, value) => sum + value, 0) / pingSamples.length;
          const jitter = Math.sqrt(
              pingSamples.map(p => (p - ping) ** 2).reduce((sum, sq) => sum + sq, 0) / pingSamples.length
          );

          pingElement.innerText = ping.toFixed(2) + ' ms';
          jitterElement.innerText = jitter.toFixed(2) + ' ms';

          loaderWidget.classList.remove('loading');
          loaderWidget.classList.add('loaded');
          content.classList.remove('hide'); // Show the content
          startButton.innerText = 'Recheck'; // Change button text
          startButton.classList.add('recheck-button'); // Add a class for styling
          startButton.disabled = false;
      }, 3000); // Simulated 3-second test
  });
});
