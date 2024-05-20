from flask import Flask, jsonify
import speedtest
import statistics

app = Flask(__name__)
st = speedtest.Speedtest()

@app.route('/speedtest')
def speed_test():
    download_speed_bps = st.download()
    download_speed_mbps = (download_speed_bps / 1e6) / 100
    upload_speed_bps = st.upload()
    upload_speed_mbps = (upload_speed_bps / 1e6) / 100

    servernames = []
    st.get_servers(servernames)
    ping = st.results.ping

    ping_results = []
    num_samples = 10

    for _ in range(num_samples):
        st.get_best_server()
        ping_results.append(st.results.ping)

    jitter = statistics.stdev(ping_results)

    return jsonify({
        'downloadSpeed': download_speed_mbps,
        'uploadSpeed': upload_speed_mbps,
        'ping': ping,
        'jitter': jitter
    })

if __name__ == '__main__':
    app.run(debug=True)
